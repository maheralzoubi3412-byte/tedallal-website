import { useState } from 'react';

function css(str) {
  const style = {};
  str.split(';').forEach((rule) => {
    const idx = rule.indexOf(':');
    if (idx === -1) return;
    const prop = rule
      .slice(0, idx)
      .trim()
      .replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const value = rule.slice(idx + 1).trim();
    if (prop && value) style[prop] = value;
  });
  return style;
}

export default function App() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  const onPhone = (e) => setPhone(e.target.value);
  const submit = () => {
    if (phone.trim().length >= 6) setSubmitted(true);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .tadall, .tadall * { box-sizing: border-box; }
        .tadall {
          margin: 0;
          font-family: 'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif;
          color: #E6E9EF;
        }
        .tadall a { color: #6EE7CF; text-decoration: none; }
        .tadall a:hover { color: #A6F4E4; }
        .tadall ::selection { background: rgba(63,214,184,0.3); }
        @keyframes tdFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes tdPulse { 0%,100% { opacity:0.5; transform:scale(1); } 50% { opacity:0.9; transform:scale(1.06); } }

        /* ---------- Responsive ---------- */
        .rg-nav-toggle { display: none; }

        @media (max-width: 1279px) {
          .tadall section, .tadall > nav, .tadall footer > div {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }
        }

        @media (max-width: 1023px) {
          .rg-nav-links { display: none !important; }
          .rg-nav-toggle {
            display: flex; align-items: center; justify-content: center;
            width: 44px; height: 44px; border-radius: 10px;
            background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
            color: #E6E9EF; cursor: pointer; flex-shrink: 0;
          }
          .rg-nav-links.rg-open {
            display: flex !important;
            position: absolute; top: 100%; left: 0; right: 0;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 2px !important;
            background: #0B111C;
            padding: 10px 24px 18px !important;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 16px 30px rgba(0,0,0,0.35);
          }
          .rg-nav-links.rg-open a { padding: 12px 4px !important; font-size: 16px !important; }

          .rg-hero-grid, .rg-demo-grid, .rg-showcase-grid, .rg-payments-grid, .rg-about-grid {
            grid-template-columns: 1fr !important;
          }
          .rg-how-grid, .rg-capabilities-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .rg-pricing-grid { grid-template-columns: 1fr !important; max-width: 460px; margin-left: auto !important; margin-right: auto !important; }
          .rg-footer-grid { grid-template-columns: 1fr 1fr !important; }
          .rg-hero-visual { min-height: 0 !important; margin-top: 8px; }
        }

        @media (max-width: 767px) {
          .tadall section, .tadall > nav, .tadall footer > div {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .rg-hero-h1 { font-size: 34px !important; line-height: 1.25 !important; }
          .rg-section-h2 { font-size: 25px !important; line-height: 1.3 !important; }
          .rg-how-grid, .rg-capabilities-grid { grid-template-columns: 1fr 1fr !important; }
          .rg-stats-grid { grid-template-columns: 1fr !important; }
          .rg-footer-grid { grid-template-columns: 1fr !important; }
          .rg-about-stats { grid-template-columns: 1fr 1fr !important; }

          .rg-showcase-phones { flex-direction: column !important; align-items: center !important; }
          .rg-showcase-phone {
            width: 100% !important; max-width: 230px !important;
            height: auto !important; aspect-ratio: 210 / 430 !important;
            margin-top: 0 !important;
          }
          .rg-demo-phone {
            width: 100% !important; max-width: 300px !important;
            height: auto !important; aspect-ratio: 300 / 600 !important;
          }
          .rg-hero-visual-inner {
            width: 100% !important; max-width: 300px !important;
            height: auto !important; aspect-ratio: 330 / 400 !important;
          }
          .rg-waitlist-row { flex-direction: column !important; align-items: stretch !important; }
          .rg-waitlist-row input, .rg-waitlist-row button { width: 100% !important; }
          .rg-partners { flex-direction: column !important; align-items: flex-start !important; }
          .rg-partners a { width: 100%; text-align: center; }
        }

        @media (max-width: 479px) {
          .rg-how-grid, .rg-capabilities-grid { grid-template-columns: 1fr !important; }
          .rg-hero-h1 { font-size: 28px !important; }
          .rg-about-stats { grid-template-columns: 1fr 1fr !important; }
        }
      ` }} />

      <main className="tadall" dir="rtl" style={css("width:100%; overflow-x:hidden; background:radial-gradient(1200px 600px at 80% -5%, rgba(63,214,184,0.10), transparent 60%), radial-gradient(900px 500px at 5% 10%, rgba(124,196,228,0.06), transparent 55%), #06101A;")}>

        {/* NAV */}
        <nav className="rg-nav" style={css("position:sticky; top:0; z-index:50; display:flex; align-items:center; justify-content:space-between; gap:24px; padding:16px 40px; background:rgba(6,16,26,0.82); border-bottom:1px solid rgba(255,255,255,0.06); backdrop-filter:blur(12px);")}>
          <a href="#" style={css("display:flex; align-items:center; gap:12px; flex-shrink:0;")}>
            <img src="/tadall-icon-96.png" alt="" width="40" height="35" style={css("width:40px; height:35px; flex-shrink:0;")} />
            <img src="/tadall-wordmark-white.png" alt="تدلل TADALL" width="91" height="36" style={css("height:36px; width:auto;")} />
          </a>
          <div className={`rg-nav-links${menuOpen ? ' rg-open' : ''}`} style={css("display:flex; align-items:center; gap:32px; font-size:15px; color:#AEB6C4;")}>
            <a href="#" onClick={() => setMenuOpen(false)} style={css("color:#E6E9EF;")}>الرئيسية</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} style={css("color:#AEB6C4;")}>كيف يعمل</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} style={css("color:#AEB6C4;")}>الأسعار</a>
            <a href="#about" onClick={() => setMenuOpen(false)} style={css("color:#AEB6C4;")}>عن تدلل</a>
          </div>
          <div style={css("display:flex; align-items:center; gap:12px; flex-shrink:0;")}>
            <a href="#waitlist" style={css("background:#3FD6B8; color:#04201C; font-weight:600; padding:11px 22px; border-radius:11px; font-size:15px; box-shadow:0 8px 24px rgba(63,214,184,0.25); flex-shrink:0;")}>جرّب تدلل الآن</a>
            <button
              type="button"
              aria-label="فتح القائمة"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="rg-nav-toggle"
              style={css("background:transparent; border:none; padding:0;")}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? (
                  <path d="M6 6 L18 18 M18 6 L6 18"></path>
                ) : (
                  <path d="M4 7h16 M4 12h16 M4 17h16"></path>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="rg-hero-grid" style={css("max-width:1200px; margin:0 auto; padding:72px 40px 40px; display:grid; grid-template-columns:1.1fr 0.9fr; gap:48px; align-items:center;")}>
          <div>
            <div style={css("display:inline-flex; align-items:center; gap:8px; padding:7px 14px; border:1px solid rgba(110,231,207,0.3); border-radius:999px; background:rgba(63,214,184,0.08); font-size:13px; color:#A6F4E4; margin-bottom:24px;")}>
              <span style={css("width:7px; height:7px; border-radius:50%; background:#6EE7CF; box-shadow:0 0 10px #6EE7CF;")}></span>
              مساعد ذكي للتجارة في الأردن
            </div>
            <h1 className="rg-hero-h1" style={css("font-size:52px; line-height:1.18; font-weight:700; color:#FFFFFF; margin:0 0 18px; letter-spacing:-0.01em;")}>احكي شو بدك..<br/><span style={css("color:#6EE7CF;")}>وتدلل</span></h1>
            <p style={css("font-size:19px; line-height:1.7; color:#AEB6C4; margin:0 0 28px; max-width:520px;")}>قل له ما تريد… وتدلل يفهم ويبحث ويقارن ويطلب ويدفع ويتابع — كل شيء عنك، بدون أي ضغط منك.</p>
            <div style={css("display:flex; gap:20px; flex-wrap:wrap; margin-bottom:30px;")}>
              <div style={css("display:flex; align-items:center; gap:8px; color:#D6DBE4; font-size:15px;")}><span style={css("color:#6EE7CF;")}>✓</span> بدون ضغط</div>
              <div style={css("display:flex; align-items:center; gap:8px; color:#D6DBE4; font-size:15px;")}><span style={css("color:#6EE7CF;")}>✓</span> بدون بحث</div>
              <div style={css("display:flex; align-items:center; gap:8px; color:#D6DBE4; font-size:15px;")}><span style={css("color:#6EE7CF;")}>✓</span> بدون انتظار</div>
            </div>
            <div style={css("display:flex; gap:14px; flex-wrap:wrap;")}>
              <a href="#waitlist" style={css("background:#3FD6B8; color:#04201C; font-weight:600; padding:15px 30px; border-radius:12px; font-size:16px; box-shadow:0 12px 30px rgba(63,214,184,0.3);")}>جرّب تدلل الآن</a>
              <a href="#download" style={css("border:1px solid rgba(255,255,255,0.18); color:#E6E9EF; padding:15px 28px; border-radius:12px; font-size:16px;")}>حمّل التطبيق</a>
            </div>
          </div>

          <div className="rg-hero-visual" style={css("position:relative; display:flex; align-items:center; justify-content:center; min-height:440px;")}>
            <div style={css("position:absolute; width:340px; height:340px; border-radius:50%; background:radial-gradient(circle, rgba(63,214,184,0.22), transparent 70%); filter:blur(10px); animation:tdPulse 4s ease-in-out infinite;")}></div>
            <div className="rg-hero-visual-inner" style={css("position:relative; width:330px; height:400px; animation:tdFloat 6s ease-in-out infinite;")}>
              <img src="/tadall-icon.png" alt="شعار تدلل" width="640" height="557" style={css("position:absolute; inset:0; width:100%; height:100%; object-fit:contain; filter:drop-shadow(0 24px 50px rgba(0,0,0,0.45));")} />
            </div>
            {/* floating chat bubble */}
            <div style={css("position:absolute; bottom:24px; right:-8px; background:#0F1B27; border:1px solid rgba(110,231,207,0.28); border-radius:16px 16px 4px 16px; padding:14px 16px; max-width:230px; box-shadow:0 16px 40px rgba(0,0,0,0.4);")}>
              <div style={css("font-size:14px; color:#E6E9EF; line-height:1.6;")}>تدلل اطلبلي منسف لشخصين من أطيب مطعم قريب</div>
            </div>
            <div style={css("position:absolute; top:34px; left:-10px; display:flex; align-items:center; gap:8px; background:#0F1B27; border:1px solid rgba(255,255,255,0.1); border-radius:14px; padding:10px 14px; box-shadow:0 16px 40px rgba(0,0,0,0.4);")}>
              <span style={css("width:9px; height:9px; border-radius:50%; background:#6EE7CF; box-shadow:0 0 8px #6EE7CF;")}></span>
              <span style={css("font-size:13px; color:#AEB6C4;")}>جاري تنفيذ الطلب…</span>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={css("max-width:1120px; margin:24px auto 0; padding:0 40px;")}>
          <div className="rg-stats-grid" style={css("display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.07); border-radius:18px; overflow:hidden;")}>
            <div style={css("background:#0B1320; padding:30px; text-align:center;")}>
              <div style={css("font-size:38px; font-weight:700; color:#6EE7CF;")}>+50,000</div>
              <div style={css("font-size:15px; color:#AEB6C4; margin-top:6px;")}>طلب تم تنفيذه</div>
            </div>
            <div style={css("background:#0B1320; padding:30px; text-align:center;")}>
              <div style={css("font-size:38px; font-weight:700; color:#6EE7CF;")}>+1,200</div>
              <div style={css("font-size:15px; color:#AEB6C4; margin-top:6px;")}>متجر ومطعم متاح</div>
            </div>
            <div style={css("background:#0B1320; padding:30px; text-align:center;")}>
              <div style={css("font-size:38px; font-weight:700; color:#6EE7CF;")}>12</div>
              <div style={css("font-size:15px; color:#AEB6C4; margin-top:6px;")}>محافظة في الأردن</div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={css("max-width:1200px; margin:0 auto; padding:88px 40px 40px;")}>
          <div style={css("text-align:center; margin-bottom:48px;")}>
            <div style={css("font-size:13px; letter-spacing:0.28em; color:#6EE7CF; text-transform:uppercase; margin-bottom:12px;")}>How It Works</div>
            <h2 className="rg-section-h2" style={css("font-size:36px; font-weight:700; color:#FFFFFF; margin:0;")}>كيف يعمل تدلل؟</h2>
          </div>
          <div className="rg-how-grid" style={css("display:grid; grid-template-columns:repeat(5,1fr); gap:16px;")}>
            <div style={css("background:#0C1420; border:1px solid rgba(110,231,207,0.16); border-radius:16px; padding:24px 18px; text-align:center;")}>
              <div style={css("width:40px; height:40px; margin:0 auto 16px; border-radius:12px; background:rgba(63,214,184,0.12); color:#6EE7CF; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:17px;")}>1</div>
              <div style={css("font-size:17px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>يفهم طلبك</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>يفهم طلبك بلغة طبيعية كما تتكلم</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(110,231,207,0.16); border-radius:16px; padding:24px 18px; text-align:center;")}>
              <div style={css("width:40px; height:40px; margin:0 auto 16px; border-radius:12px; background:rgba(63,214,184,0.12); color:#6EE7CF; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:17px;")}>2</div>
              <div style={css("font-size:17px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>يختار الأفضل لك</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>يبحث ويقارن ويختار أفضل خيار قريب</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(110,231,207,0.16); border-radius:16px; padding:24px 18px; text-align:center;")}>
              <div style={css("width:40px; height:40px; margin:0 auto 16px; border-radius:12px; background:rgba(63,214,184,0.12); color:#6EE7CF; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:17px;")}>3</div>
              <div style={css("font-size:17px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>ينفّذ الطلب</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>يدخل نظام المتجر ويضع الطلب تلقائيًا</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(110,231,207,0.16); border-radius:16px; padding:24px 18px; text-align:center;")}>
              <div style={css("width:40px; height:40px; margin:0 auto 16px; border-radius:12px; background:rgba(63,214,184,0.12); color:#6EE7CF; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:17px;")}>4</div>
              <div style={css("font-size:17px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>يتابع الطلب</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>يتابع حالة الطلب حتى يصل إليك</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(110,231,207,0.16); border-radius:16px; padding:24px 18px; text-align:center;")}>
              <div style={css("width:40px; height:40px; margin:0 auto 16px; border-radius:12px; background:rgba(63,214,184,0.12); color:#6EE7CF; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:17px;")}>5</div>
              <div style={css("font-size:17px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>يصلك طلبك</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>يصل الطلب لموقعك وأنت مرتاح</div>
            </div>
          </div>
        </section>

        {/* DEMO + PROMPTS */}
        <section className="rg-demo-grid" style={css("max-width:1200px; margin:0 auto; padding:56px 40px; display:grid; grid-template-columns:0.85fr 1.15fr; gap:48px; align-items:center;")}>
          {/* phone chat mock */}
          <div className="rg-demo-phone" style={css("justify-self:center; width:300px; height:600px; background:#0A0F18; border:10px solid #161d29; border-radius:44px; box-shadow:0 30px 70px rgba(0,0,0,0.5); overflow:hidden; position:relative;")}>
            <div style={css("height:44px; display:flex; align-items:center; justify-content:space-between; padding:0 22px; font-size:12px; color:#8A93A5;")}><span>9:41</span><span>تدلل</span></div>
            <div style={css("padding:14px 16px; display:flex; flex-direction:column; gap:14px;")}>
              <div style={css("align-self:flex-start; background:#141d2a; color:#E6E9EF; padding:12px 14px; border-radius:14px 14px 14px 4px; font-size:14px; line-height:1.6; max-width:82%;")}>أهلاً! أنا تدلل 👋 احكيلي شو بدك وأنا بنفّذلك ياه.</div>
              <div style={css("align-self:flex-end; background:#1F7F74; color:#E8FBF7; padding:12px 14px; border-radius:14px 14px 4px 14px; font-size:14px; line-height:1.6; max-width:82%;")}>اطلبلي منسف لشخصين من أطيب مطعم قريب</div>
              <div style={css("align-self:flex-start; background:#141d2a; color:#E6E9EF; padding:12px 14px; border-radius:14px; font-size:14px; line-height:1.7; max-width:88%;")}>
                تمام ✓ لقيت لك <b style={css("color:#6EE7CF;")}>مطعم بيت المنسف</b> · 4.8★ · يبعد 1.2 كم
                <div style={css("margin-top:8px; color:#94A0B3; font-size:13px;")}>لشخصين · 14 دينار · بوصل خلال 25 دقيقة</div>
              </div>
              <div style={css("align-self:flex-start; display:flex; align-items:center; gap:8px; color:#94A0B3; font-size:13px;")}><span style={css("width:8px;height:8px;border-radius:50%;background:#6EE7CF;box-shadow:0 0 8px #6EE7CF;")}></span> جاري تنفيذ الطلب…</div>
            </div>
            <div style={css("position:absolute; bottom:16px; left:16px; right:16px; display:flex; align-items:center; gap:10px; background:#121a26; border:1px solid rgba(255,255,255,0.08); border-radius:999px; padding:8px 8px 8px 16px;")}>
              <span style={css("flex:1; color:#6C7688; font-size:13px;")}>اضغط للتحدث…</span>
              <span style={css("width:38px; height:38px; border-radius:50%; background:#3FD6B8; display:flex; align-items:center; justify-content:center;")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#04201C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
              </span>
            </div>
          </div>

          <div>
            <div style={css("font-size:13px; letter-spacing:0.28em; color:#7CC4E4; text-transform:uppercase; margin-bottom:12px;")}>Just Ask</div>
            <h2 className="rg-section-h2" style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin:0 0 14px;")}>أمثلة طلبات تقولها لتدلل</h2>
            <p style={css("font-size:17px; color:#AEB6C4; line-height:1.7; margin:0 0 26px; max-width:520px;")}>اكتبها أو قلها صوتيًا — تدلل يفهمك ويكمّل الباقي بنفسه.</p>
            <div style={css("display:flex; flex-direction:column; gap:12px;")}>
              <div style={css("display:flex; align-items:center; gap:14px; background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:15px 18px;")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="12" x2="4" y2="12"></line><line x1="8" y1="8" x2="8" y2="16"></line><line x1="12" y1="4" x2="12" y2="20"></line><line x1="16" y1="9" x2="16" y2="15"></line><line x1="20" y1="11" x2="20" y2="13"></line></svg>
                <span style={css("font-size:15.5px; color:#E6E9EF;")}>«تدلل بدي بيتزا كبيرة من دومينوز»</span>
              </div>
              <div style={css("display:flex; align-items:center; gap:14px; background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:15px 18px;")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="12" x2="4" y2="12"></line><line x1="8" y1="8" x2="8" y2="16"></line><line x1="12" y1="4" x2="12" y2="20"></line><line x1="16" y1="9" x2="16" y2="15"></line><line x1="20" y1="11" x2="20" y2="13"></line></svg>
                <span style={css("font-size:15.5px; color:#E6E9EF;")}>«تدلل جيبلي أغراض البيت الشهرية من أرخص سوبرماركت»</span>
              </div>
              <div style={css("display:flex; align-items:center; gap:14px; background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:15px 18px;")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="12" x2="4" y2="12"></line><line x1="8" y1="8" x2="8" y2="16"></line><line x1="12" y1="4" x2="12" y2="20"></line><line x1="16" y1="9" x2="16" y2="15"></line><line x1="20" y1="11" x2="20" y2="13"></line></svg>
                <span style={css("font-size:15.5px; color:#E6E9EF;")}>«تدلل اطلبلي آيس لاتيه وكنافة نابلسية»</span>
              </div>
              <div style={css("display:flex; align-items:center; gap:14px; background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:15px 18px;")}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="12" x2="4" y2="12"></line><line x1="8" y1="8" x2="8" y2="16"></line><line x1="12" y1="4" x2="12" y2="20"></line><line x1="16" y1="9" x2="16" y2="15"></line><line x1="20" y1="11" x2="20" y2="13"></line></svg>
                <span style={css("font-size:15.5px; color:#E6E9EF;")}>«تدلل بدي أحسن عرض على آيفون قريب مني»</span>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section style={css("max-width:1200px; margin:0 auto; padding:56px 40px;")}>
          <div style={css("text-align:center; margin-bottom:44px;")}>
            <h2 className="rg-section-h2" style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin:0 0 10px;")}>تدلل ينفّذ الطلب بالكامل — بدون أي ضغط منك</h2>
            <p style={css("font-size:16px; color:#AEB6C4; margin:0;")}>من فهم الطلب حتى وصوله، تدلل يتكفّل بكل خطوة.</p>
          </div>
          <div className="rg-capabilities-grid" style={css("display:grid; grid-template-columns:repeat(5,1fr); gap:16px;")}>
            <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px;")}>
              <div style={css("width:44px;height:44px;border-radius:12px;background:rgba(63,214,184,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:6px;")}>تحديد الموقع تلقائيًا</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>يحدد موقعك بدقة دون خطوات إضافية</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px;")}>
              <div style={css("width:44px;height:44px;border-radius:12px;background:rgba(63,214,184,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12l-1 7H7L6 2z"></path><path d="M5 9h14l-1 12H6L5 9z"></path></svg></div>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:6px;")}>اختيار المتجر الأفضل</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>حسب التقييم والوقت والسعر</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px;")}>
              <div style={css("width:44px;height:44px;border-radius:12px;background:rgba(63,214,184,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></div>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:6px;")}>تخصيص الطلب</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>الكمية والإضافات والملاحظات</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px;")}>
              <div style={css("width:44px;height:44px;border-radius:12px;background:rgba(63,214,184,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></div>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:6px;")}>اختيار طريقة الدفع</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>المحفظة، CliQ، Apple Pay</div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:22px;")}>
              <div style={css("width:44px;height:44px;border-radius:12px;background:rgba(63,214,184,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px;")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4 20-7z"></path></svg></div>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:6px;")}>الإرسال والتتبع</div>
              <div style={css("font-size:13.5px; color:#94A0B3; line-height:1.6;")}>يرسل الطلب ويتابعه حتى يصلك</div>
            </div>
          </div>
        </section>

        {/* APP SHOWCASE */}
        <section id="download" style={css("max-width:1200px; margin:0 auto; padding:56px 40px;")}>
          <div className="rg-showcase-grid" style={css("background:linear-gradient(180deg, #0C1622, #0A121C); border:1px solid rgba(255,255,255,0.07); border-radius:24px; padding:48px; display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center;")}>
            <div>
              <div style={css("font-size:13px; letter-spacing:0.28em; color:#6EE7CF; text-transform:uppercase; margin-bottom:12px;")}>The App</div>
              <h2 className="rg-section-h2" style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin:0 0 16px;")}>تطبيق واحد يطلب لك كل شيء</h2>
              <p style={css("font-size:17px; color:#AEB6C4; line-height:1.7; margin:0 0 26px;")}>طعام، بقالة، خدمات — قارن الأسعار، وفّر وقتك، وخلّي تدلل ينفّذ. متوفر قريبًا على iOS و Android.</p>
              <div style={css("display:flex; gap:14px; flex-wrap:wrap;")}>
                <a href="#waitlist" style={css("display:flex; align-items:center; gap:10px; background:#111a26; border:1px solid rgba(255,255,255,0.14); border-radius:12px; padding:12px 20px; color:#E6E9EF;")}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#E6E9EF"><path d="M16.5 1.6c0 1.1-.4 2.1-1.2 3-.9 1-2 1.5-3 1.4-.1-1.1.4-2.2 1.1-3 .8-.9 2.1-1.5 3.1-1.4zM20 17.2c-.5 1.2-.8 1.7-1.4 2.8-1 1.6-2.3 3.6-4 3.6-1.5 0-1.9-1-3.9-1-2 0-2.4 1-3.9 1-1.7 0-3-1.8-4-3.4C.4 15.7 0 12.2 1.7 9.9c1-1.3 2.5-2.1 4-2.1 1.6 0 2.6 1 3.9 1 1.3 0 2.1-1 3.9-1 1.4 0 2.9.8 3.9 2.1-3.4 1.9-2.9 6.8.7 8.3z"></path></svg>
                  <span style={css("font-size:15px; white-space:nowrap;")}>App Store</span>
                </a>
                <a href="#waitlist" style={css("display:flex; align-items:center; gap:10px; background:#111a26; border:1px solid rgba(255,255,255,0.14); border-radius:12px; padding:12px 20px; color:#E6E9EF;")}>
                  <svg width="20" height="20" viewBox="0 0 24 24"><path d="M3 3.5v17l9.5-8.5L3 3.5z" fill="#6EE7CF"></path><path d="M14 11 5 3l11.5 6.5L14 11z" fill="#7CC4E4"></path><path d="M14 13l2.5 1.5L5 21l9-8z" fill="#4B9EF8"></path><path d="M16.5 9.5 20 11.5c1 .6 1 1.8 0 2.4l-3.5 2L14 13l2.5-3.5z" fill="#F7C94A"></path></svg>
                  <span style={css("font-size:15px; white-space:nowrap;")}>Google Play</span>
                </a>
              </div>
            </div>
            <div className="rg-showcase-phones" style={css("display:flex; gap:18px; justify-content:center;")}>
              <div className="rg-showcase-phone" style={css("width:210px; height:430px; border:8px solid #161d29; border-radius:36px; overflow:hidden; background:#0A0F18; box-shadow:0 24px 60px rgba(0,0,0,0.5); display:flex; flex-direction:column;")}>
                <div style={css("height:34px; display:flex; align-items:center; justify-content:space-between; padding:0 16px; font-size:10px; color:#8A93A5; flex-shrink:0;")}>
                  <span>9:41</span>
                  <span>تدلل</span>
                </div>
                <div style={css("padding:14px 16px; flex:1; display:flex; flex-direction:column; gap:12px;")}>
                  <div style={css("font-size:15px; font-weight:600; color:#FFFFFF;")}>أهلاً 👋 شو بدك اليوم؟</div>
                  <div style={css("display:flex; align-items:center; gap:8px; background:#141d2a; border:1px solid rgba(255,255,255,0.08); border-radius:12px; padding:10px 12px;")}>
                    <span style={css("width:16px; height:16px; border-radius:50%; background:#6EE7CF; flex-shrink:0;")}></span>
                    <span style={css("font-size:11px; color:#8A93A5;")}>احكيلي شو بتحتاج…</span>
                  </div>
                  <div style={css("display:grid; grid-template-columns:1fr 1fr; gap:8px;")}>
                    <div style={css("background:#141d2a; border-radius:10px; padding:10px; text-align:center; font-size:10.5px; color:#E6E9EF;")}>🍔<br/>طعام</div>
                    <div style={css("background:#141d2a; border-radius:10px; padding:10px; text-align:center; font-size:10.5px; color:#E6E9EF;")}>🛒<br/>بقالة</div>
                    <div style={css("background:#141d2a; border-radius:10px; padding:10px; text-align:center; font-size:10.5px; color:#E6E9EF;")}>📱<br/>موبايلات</div>
                    <div style={css("background:#141d2a; border-radius:10px; padding:10px; text-align:center; font-size:10.5px; color:#E6E9EF;")}>💊<br/>صيدلية</div>
                  </div>
                  <div style={css("margin-top:auto; background:#0F1B27; border:1px solid rgba(110,231,207,0.25); border-radius:12px; padding:10px 12px;")}>
                    <div style={css("font-size:10px; color:#94A0B3; margin-bottom:4px;")}>آخر طلب</div>
                    <div style={css("display:flex; align-items:center; gap:6px; font-size:11px; color:#E6E9EF;")}>
                      <span style={css("width:7px; height:7px; border-radius:50%; background:#6EE7CF; box-shadow:0 0 6px #6EE7CF;")}></span>
                      في الطريق إليك
                    </div>
                  </div>
                </div>
              </div>
              <div className="rg-showcase-phone" style={css("width:210px; height:430px; border:8px solid #161d29; border-radius:36px; overflow:hidden; background:#0A0F18; box-shadow:0 24px 60px rgba(0,0,0,0.5); margin-top:26px; display:flex; flex-direction:column;")}>
                <div style={css("height:34px; display:flex; align-items:center; justify-content:space-between; padding:0 16px; font-size:10px; color:#8A93A5; flex-shrink:0;")}>
                  <span>9:42</span>
                  <span>تدلل</span>
                </div>
                <div style={css("padding:14px 16px; flex:1; display:flex; flex-direction:column; gap:12px;")}>
                  <div style={css("font-size:15px; font-weight:600; color:#FFFFFF;")}>تتبع طلبك</div>
                  <div style={css("position:relative; height:120px; border-radius:14px; background:radial-gradient(circle at 30% 30%, rgba(63,214,184,0.22), transparent 60%), #10192a; border:1px solid rgba(255,255,255,0.06); overflow:hidden;")}>
                    <div style={css("position:absolute; inset:0; background:repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 14px);")}></div>
                    <span style={css("position:absolute; top:18px; left:22px; width:10px; height:10px; border-radius:50%; background:#FFFFFF; box-shadow:0 0 0 4px rgba(255,255,255,0.15);")}></span>
                    <span style={css("position:absolute; bottom:16px; right:20px; width:12px; height:12px; border-radius:50%; background:#6EE7CF; box-shadow:0 0 10px #6EE7CF;")}></span>
                  </div>
                  <div style={css("font-size:11.5px; color:#AEB6C4;")}>الوصول خلال <b style={css("color:#6EE7CF;")}>12 دقيقة</b></div>
                  <div style={css("display:flex; flex-direction:column; gap:8px;")}>
                    <div style={css("display:flex; align-items:center; gap:8px; font-size:10.5px; color:#E6E9EF;")}><span style={css("color:#6EE7CF;")}>✓</span> تم استلام الطلب</div>
                    <div style={css("display:flex; align-items:center; gap:8px; font-size:10.5px; color:#E6E9EF;")}><span style={css("color:#6EE7CF;")}>✓</span> جاري التحضير</div>
                    <div style={css("display:flex; align-items:center; gap:8px; font-size:10.5px; color:#6EE7CF; font-weight:600;")}><span style={css("width:7px; height:7px; border-radius:50%; background:#6EE7CF; box-shadow:0 0 6px #6EE7CF; display:inline-block;")}></span> في الطريق إليك</div>
                    <div style={css("display:flex; align-items:center; gap:8px; font-size:10.5px; color:#5C6678;")}><span>○</span> تم التوصيل</div>
                  </div>
                  <div style={css("margin-top:auto; display:flex; align-items:center; gap:10px; background:#141d2a; border-radius:12px; padding:10px 12px;")}>
                    <span style={css("width:28px; height:28px; border-radius:50%; background:#6EE7CF; display:flex; align-items:center; justify-content:center; font-size:13px; flex-shrink:0;")}>🚗</span>
                    <span style={css("font-size:11px; color:#E6E9EF; flex:1;")}>محمد · Elantra بيضاء</span>
                    <span style={css("width:26px; height:26px; border-radius:50%; background:rgba(63,214,184,0.15); display:flex; align-items:center; justify-content:center; font-size:12px;")}>📞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAYMENTS + SAFETY */}
        <section className="rg-payments-grid" style={css("max-width:1200px; margin:0 auto; padding:40px 40px 56px; display:grid; grid-template-columns:1fr 1fr; gap:24px;")}>
          <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:32px;")}>
            <h3 style={css("font-size:22px; font-weight:600; color:#FFFFFF; margin:0 0 22px;")}>طرق الدفع المتاحة</h3>
            <div style={css("display:grid; grid-template-columns:1fr 1fr; gap:14px;")}>
              <div style={css("display:flex; align-items:center; gap:12px; background:#0A111B; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:16px;")}><span style={css("width:36px;height:36px;border-radius:10px;background:rgba(63,214,184,0.12);display:flex;align-items:center;justify-content:center;")}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="2"><rect x="2" y="6" width="20" height="13" rx="2"></rect><path d="M16 12h.01"></path></svg></span><span style={css("color:#E6E9EF; font-size:15px;")}>محفظة تدلل</span></div>
              <div style={css("display:flex; align-items:center; gap:12px; background:#0A111B; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:16px;")}><span style={css("width:36px;height:36px;border-radius:10px;background:rgba(63,214,184,0.12);display:flex;align-items:center;justify-content:center;font-weight:700;color:#6EE7CF;font-size:11px;")}>CliQ</span><span style={css("color:#E6E9EF; font-size:15px;")}>كليك CliQ</span></div>
              <div style={css("display:flex; align-items:center; gap:12px; background:#0A111B; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:16px;")}><span style={css("width:36px;height:36px;border-radius:10px;background:rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;")}><svg width="18" height="18" viewBox="0 0 24 24" fill="#E6E9EF"><path d="M16.5 1.6c0 1.1-.4 2.1-1.2 3-.9 1-2 1.5-3 1.4-.1-1.1.4-2.2 1.1-3 .8-.9 2.1-1.5 3.1-1.4zM20 17.2c-.5 1.2-.8 1.7-1.4 2.8-1 1.6-2.3 3.6-4 3.6-1.5 0-1.9-1-3.9-1-2 0-2.4 1-3.9 1-1.7 0-3-1.8-4-3.4C.4 15.7 0 12.2 1.7 9.9c1-1.3 2.5-2.1 4-2.1 1.6 0 2.6 1 3.9 1 1.3 0 2.1-1 3.9-1 1.4 0 2.9.8 3.9 2.1-3.4 1.9-2.9 6.8.7 8.3z"></path></svg></span><span style={css("color:#E6E9EF; font-size:15px;")}>Apple Pay</span></div>
              <div style={css("display:flex; align-items:center; gap:12px; background:#0A111B; border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:16px;")}><span style={css("width:36px;height:36px;border-radius:10px;background:rgba(140,90,220,0.18);display:flex;align-items:center;justify-content:center;font-weight:700;color:#B79BF0;font-size:11px;")}>zain</span><span style={css("color:#E6E9EF; font-size:15px;")}>زين كاش</span></div>
            </div>
          </div>
          <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:32px;")}>
            <h3 style={css("font-size:22px; font-weight:600; color:#FFFFFF; margin:0 0 22px;")}>أمان وخصوصية</h3>
            <div style={css("display:flex; flex-direction:column; gap:16px;")}>
              <div style={css("display:flex; align-items:center; gap:12px;")}><span style={css("width:24px;height:24px;border-radius:50%;background:rgba(63,214,184,0.14);display:flex;align-items:center;justify-content:center;flex-shrink:0;")}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span style={css("color:#D6DBE4; font-size:15.5px;")}>بياناتك آمنة ومشفّرة 100%</span></div>
              <div style={css("display:flex; align-items:center; gap:12px;")}><span style={css("width:24px;height:24px;border-radius:50%;background:rgba(63,214,184,0.14);display:flex;align-items:center;justify-content:center;flex-shrink:0;")}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span style={css("color:#D6DBE4; font-size:15.5px;")}>تأكيد منك قبل الطلب والدفع</span></div>
              <div style={css("display:flex; align-items:center; gap:12px;")}><span style={css("width:24px;height:24px;border-radius:50%;background:rgba(63,214,184,0.14);display:flex;align-items:center;justify-content:center;flex-shrink:0;")}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span style={css("color:#D6DBE4; font-size:15.5px;")}>يمكنك إلغاء الطلب في أي وقت</span></div>
              <div style={css("display:flex; align-items:center; gap:12px;")}><span style={css("width:24px;height:24px;border-radius:50%;background:rgba(63,214,184,0.14);display:flex;align-items:center;justify-content:center;flex-shrink:0;")}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6EE7CF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span style={css("color:#D6DBE4; font-size:15.5px;")}>لا نحفظ بيانات بطاقتك البنكية</span></div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" style={css("max-width:1200px; margin:0 auto; padding:56px 40px;")}>
          <div style={css("text-align:center; margin-bottom:44px;")}>
            <div style={css("font-size:13px; letter-spacing:0.28em; color:#6EE7CF; text-transform:uppercase; margin-bottom:12px;")}>Pricing</div>
            <h2 className="rg-section-h2" style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin:0 0 10px;")}>أسعار بسيطة وواضحة</h2>
            <p style={css("font-size:16px; color:#AEB6C4; margin:0;")}>بدون رسوم مخفية — تدفع فقط مقابل ما تطلبه.</p>
          </div>
          <div className="rg-pricing-grid" style={css("display:grid; grid-template-columns:repeat(3,1fr); gap:20px;")}>
            <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:32px;")}>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>مجاني</div>
              <div style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin-bottom:4px;")}>0 دينار<span style={css("font-size:14px; color:#94A0B3; font-weight:400;")}> / شهريًا</span></div>
              <p style={css("font-size:13.5px; color:#94A0B3; line-height:1.6; margin:0 0 20px;")}>حمّل التطبيق وابدأ فورًا. تدفع فقط سعر طلبك.</p>
              <div style={css("display:flex; flex-direction:column; gap:12px;")}>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> طلبات غير محدودة</div>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> رسوم توصيل قياسية</div>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> دعم عبر الدردشة</div>
              </div>
            </div>
            <div style={css("position:relative; background:linear-gradient(180deg, #0B2A2E, #0C1420); border:1px solid rgba(110,231,207,0.4); border-radius:20px; padding:32px; box-shadow:0 20px 50px rgba(63,214,184,0.12);")}>
              <div style={css("position:absolute; top:-13px; right:28px; background:#3FD6B8; color:#04201C; font-size:12px; font-weight:700; padding:5px 14px; border-radius:999px;")}>الأكثر طلبًا</div>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>تدلل+</div>
              <div style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin-bottom:4px;")}>4.99 دينار<span style={css("font-size:14px; color:#94A0B3; font-weight:400;")}> / شهريًا</span></div>
              <p style={css("font-size:13.5px; color:#94A0B3; line-height:1.6; margin:0 0 20px;")}>لمن يطلب باستمرار ويريد أولوية وتوفير أكبر.</p>
              <div style={css("display:flex; flex-direction:column; gap:12px;")}>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> توصيل مجاني على أغلب الطلبات</div>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> أولوية في التنفيذ والتتبع</div>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> دعم فوري على مدار الساعة</div>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> كاش باك على كل طلب</div>
              </div>
            </div>
            <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:32px;")}>
              <div style={css("font-size:16px; font-weight:600; color:#FFFFFF; margin-bottom:8px;")}>للأعمال</div>
              <div style={css("font-size:26px; font-weight:700; color:#FFFFFF; margin-bottom:4px;")}>تواصل معنا</div>
              <p style={css("font-size:13.5px; color:#94A0B3; line-height:1.6; margin:0 0 20px;")}>خطط مخصصة للشركات والطلبات بالجملة.</p>
              <div style={css("display:flex; flex-direction:column; gap:12px;")}>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> فوترة مركزية للفريق</div>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> حسابات متعددة المستخدمين</div>
                <div style={css("display:flex; align-items:center; gap:10px; font-size:14px; color:#D6DBE4;")}><span style={css("color:#6EE7CF;")}>✓</span> مدير حساب مخصص</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={css("max-width:1200px; margin:0 auto; padding:56px 40px;")}>
          <div className="rg-about-grid" style={css("display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; margin-bottom:48px;")}>
            <div>
              <div style={css("font-size:13px; letter-spacing:0.28em; color:#6EE7CF; text-transform:uppercase; margin-bottom:12px;")}>About</div>
              <h2 className="rg-section-h2" style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin:0 0 16px;")}>عن تدلل</h2>
              <p style={css("font-size:17px; color:#AEB6C4; line-height:1.8; margin:0 0 16px;")}>تدلل مساعد ذكي أردني يفهم طلبك بلغتك الطبيعية، وينفّذه بالكامل نيابة عنك — من البحث والمقارنة إلى الطلب والدفع والمتابعة. هدفنا نرجّعلك وقتك.</p>
              <p style={css("font-size:17px; color:#AEB6C4; line-height:1.8; margin:0;")}>نؤمن أن التسوق والطلب ما لازم يكون تعب — تدلل يتكفّل بكل التفاصيل حتى يوصلك طلبك وأنت مرتاح.</p>
            </div>
            <div className="rg-about-stats" style={css("display:grid; grid-template-columns:1fr 1fr; gap:16px;")}>
              <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:24px; text-align:center;")}>
                <div style={css("font-size:30px; font-weight:700; color:#6EE7CF;")}>2025</div>
                <div style={css("font-size:13px; color:#94A0B3; margin-top:6px;")}>سنة التأسيس</div>
              </div>
              <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:24px; text-align:center;")}>
                <div style={css("font-size:30px; font-weight:700; color:#6EE7CF;")}>12</div>
                <div style={css("font-size:13px; color:#94A0B3; margin-top:6px;")}>محافظة أردنية</div>
              </div>
              <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:24px; text-align:center;")}>
                <div style={css("font-size:30px; font-weight:700; color:#6EE7CF;")}>+50k</div>
                <div style={css("font-size:13px; color:#94A0B3; margin-top:6px;")}>طلب منفّذ</div>
              </div>
              <div style={css("background:#0C1420; border:1px solid rgba(255,255,255,0.07); border-radius:16px; padding:24px; text-align:center;")}>
                <div style={css("font-size:30px; font-weight:700; color:#6EE7CF;")}>100%</div>
                <div style={css("font-size:13px; color:#94A0B3; margin-top:6px;")}>أردني</div>
              </div>
            </div>
          </div>

          <div id="partners" className="rg-partners" style={css("background:linear-gradient(135deg, #0C1420, #0A121C); border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:36px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap;")}>
            <div>
              <h3 style={css("font-size:22px; font-weight:600; color:#FFFFFF; margin:0 0 8px;")}>شراكات واستثمار</h3>
              <p style={css("font-size:15px; color:#AEB6C4; margin:0; max-width:480px;")}>نتطلع للتعاون مع المتاجر والمطاعم والمستثمرين اللي بشاركونا رؤية مستقبل الطلب الذكي في الأردن.</p>
            </div>
            <a href="mailto:partners@tadall.com" style={css("background:#3FD6B8; color:#04201C; font-weight:600; padding:13px 26px; border-radius:12px; font-size:15px; white-space:nowrap;")}>تواصل معنا</a>
          </div>
        </section>

        {/* WAITLIST CTA */}
        <section id="waitlist" style={css("max-width:1000px; margin:0 auto; padding:40px 40px 80px;")}>
          <div style={css("position:relative; overflow:hidden; background:linear-gradient(135deg, #0B2A2E, #0A141F); border:1px solid rgba(110,231,207,0.25); border-radius:24px; padding:52px 48px; text-align:center;")}>
            <div style={css("position:absolute; width:400px;height:400px; border-radius:50%; background:radial-gradient(circle, rgba(63,214,184,0.18), transparent 70%); top:-180px; right:-80px;")}></div>
            <div style={css("position:relative;")}>
              <h2 className="rg-section-h2" style={css("font-size:34px; font-weight:700; color:#FFFFFF; margin:0 0 12px;")}>جرّب تدلل — احكي شو بدك، وسيهتم بالباقي</h2>
              <p style={css("font-size:17px; color:#B9C2D0; margin:0 0 28px;")}>انضم للوصول المبكر واحصل على أولوية التجربة عند الإطلاق.</p>
              {submitted && (
                <div style={css("display:inline-flex; align-items:center; gap:12px; background:rgba(63,214,184,0.12); border:1px solid rgba(110,231,207,0.4); border-radius:14px; padding:18px 28px;")}>
                  <span style={css("width:26px;height:26px;border-radius:50%;background:#3FD6B8;display:flex;align-items:center;justify-content:center;")}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#04201C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                  <span style={css("color:#E8FBF7; font-size:16px; font-weight:600;")}>تم تسجيلك! رح نحكي معك على {phone} قريبًا.</span>
                </div>
              )}
              {!submitted && (
                <div className="rg-waitlist-row" style={css("display:flex; gap:12px; max-width:520px; margin:0 auto; flex-wrap:wrap; justify-content:center;")}>
                  <input type="tel" inputMode="tel" autoComplete="tel" aria-label="رقم الموبايل" value={phone} onChange={onPhone} placeholder="رقم موبايلك (مثال: 07xxxxxxxx)" style={css("flex:1; min-width:240px; background:#0A121C; border:1px solid rgba(255,255,255,0.14); border-radius:12px; padding:15px 18px; color:#FFFFFF; font-size:16px; font-family:inherit; outline:none;")} />
                  <button onClick={submit} style={css("background:#3FD6B8; color:#04201C; font-weight:600; padding:15px 34px; border-radius:12px; font-size:16px; border:none; cursor:pointer; box-shadow:0 12px 30px rgba(63,214,184,0.3); font-family:inherit;")}>انضم الآن</button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={css("border-top:1px solid rgba(255,255,255,0.06); background:#060A11;")}>
          <div className="rg-footer-grid" style={css("max-width:1200px; margin:0 auto; padding:48px 40px 28px; display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr; gap:32px;")}>
            <div>
              <div style={css("display:flex; align-items:center; gap:12px; margin-bottom:16px;")}>
                <img src="/tadall-icon-96.png" alt="" width="38" height="33" style={css("width:38px; height:33px;")} />
                <img src="/tadall-wordmark-white.png" alt="تدلل TADALL" width="86" height="34" style={css("height:34px; width:auto;")} />
              </div>
              <p style={css("color:#8A93A5; font-size:14px; line-height:1.7; margin:0; max-width:260px;")}>ذكاء ينفّذ طلبك بالكامل. احكي شو بدك.. وتدلل — في كل محافظات الأردن.</p>
            </div>
            <div>
              <div style={css("color:#FFFFFF; font-weight:600; font-size:15px; margin-bottom:14px;")}>المنتج</div>
              <div style={css("display:flex; flex-direction:column; gap:10px; font-size:14px;")}>
                <a href="#how-it-works" style={css("color:#9AA4B4;")}>كيف يعمل</a>
                <a href="#pricing" style={css("color:#9AA4B4;")}>الأسعار</a>
                <a href="#download" style={css("color:#9AA4B4;")}>حمّل التطبيق</a>
              </div>
            </div>
            <div>
              <div style={css("color:#FFFFFF; font-weight:600; font-size:15px; margin-bottom:14px;")}>الشركة</div>
              <div style={css("display:flex; flex-direction:column; gap:10px; font-size:14px;")}>
                <a href="#about" style={css("color:#9AA4B4;")}>عن تدلل</a>
                <a href="#partners" style={css("color:#9AA4B4;")}>شراكات واستثمار</a>
              </div>
            </div>
            <div>
              <div style={css("color:#FFFFFF; font-weight:600; font-size:15px; margin-bottom:14px;")}>تواصل معنا</div>
              <div style={css("display:flex; flex-direction:column; gap:10px; font-size:14px;")}>
                <a href="mailto:partners@tadall.com" style={css("color:#9AA4B4;")} dir="ltr">partners@tadall.com</a>
                <span style={css("color:#9AA4B4;")}>عمّان، الأردن</span>
              </div>
            </div>
          </div>
          <div style={css("max-width:1200px; margin:0 auto; padding:0 40px 28px; border-top:1px solid rgba(255,255,255,0.05); padding-top:20px; color:#5C6678; font-size:13px;")} suppressHydrationWarning>© {year} TADALL تدلل — جميع الحقوق محفوظة.</div>
        </footer>

      </main>
    </>
  );
}
