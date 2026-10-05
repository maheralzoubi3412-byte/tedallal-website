// Regenerates the PNG icons and social share image in public/.
// Run manually after brand changes: node scripts/generate-images.js
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { chromium } from 'playwright';

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public');
const dataUri = async (file) =>
  `data:image/png;base64,${(await readFile(path.join(publicDir, file))).toString('base64')}`;
const mark = await dataUri('tadall-icon.png');
const wordmark = await dataUri('tadall-wordmark-white.png');

const icon = (size, bg) => `
  <body style="margin:0; width:${size}px; height:${size}px; background:${bg}; display:flex; align-items:center; justify-content:center;">
    <img src="${mark}" style="width:${size * (bg === 'transparent' ? 1 : 0.78)}px; height:auto;" />
  </body>`;

const ogImage = `
  <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@500;700&display=swap"></head>
  <body dir="rtl" style="margin:0; width:1200px; height:630px; font-family:'IBM Plex Sans Arabic', sans-serif;
    background:radial-gradient(900px 500px at 85% -10%, rgba(63,214,184,0.22), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(124,196,228,0.12), transparent 60%), #06101A;
    display:flex; align-items:center; justify-content:space-between; gap:48px; padding:0 96px; box-sizing:border-box; color:#fff;">
    <div>
      <img src="${wordmark}" style="height:84px; margin-bottom:44px; display:block;" />
      <div style="font-size:80px; font-weight:700; line-height:1.2;">احكي شو بدك..<br/><span style="color:#6EE7CF;">وتدلل</span></div>
      <div style="font-size:30px; color:#AEB6C4; margin-top:28px; font-weight:500;">مساعد ذكي يبحث ويقارن ويطلب ويدفع ويتابع عنك</div>
    </div>
    <img src="${mark}" style="width:340px; height:auto; flex-shrink:0;" />
  </body>`;

const shots = [
  { file: 'og-image.png', width: 1200, height: 630, html: ogImage },
  { file: 'icon-512.png', width: 512, height: 512, html: icon(512, '#06101A') },
  { file: 'icon-192.png', width: 192, height: 192, html: icon(192, '#06101A') },
  { file: 'apple-touch-icon.png', width: 180, height: 180, html: icon(180, '#06101A') },
  { file: 'favicon-32.png', width: 32, height: 32, html: icon(32, 'transparent'), omitBackground: true },
];

const browser = await chromium.launch();
for (const { file, width, height, html, omitBackground } of shots) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(publicDir, file), omitBackground });
  await page.close();
  console.log(`wrote public/${file}`);
}
await browser.close();
