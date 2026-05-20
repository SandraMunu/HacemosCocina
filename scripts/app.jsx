/* global React, Icon, HC_DATA */

// ---------------- FORMACIONES ----------------
const FormacionCard = ({ f }) => {
  const pct = Math.round(f.seats.taken / f.seats.total * 100);
  const left = f.seats.total - f.seats.taken;
  return (
    <article className="formacion-card">
      <span className="formacion-card__category">
        <span className="dot"></span>{f.cat}
      </span>
      <h3 className="formacion-card__title">{f.title}</h3>
      <p className="formacion-card__desc">{f.desc}</p>
      <div className="formacion-card__meta">
        <div>
          <div className="label">Fecha</div>
          <div className="value">{f.date}</div>
        </div>
        <div>
          <div className="label">Duración</div>
          <div className="value">{f.duration}</div>
        </div>
        <div>
          <div className="label">Formato</div>
          <div className="value"><span className="value--badge">{f.format}</span></div>
        </div>
      </div>
      <div className="formacion-card__footer">
        <div className="formacion-card__seats">
          {left > 0 ? <><b>{left} plazas</b> libres de {f.seats.total}</> : <><b>Completo</b> — lista de espera</>}
        </div>
        <a className={"btn " + (left > 0 ? "btn--navy" : "btn--ghost") + " btn--sm"} href="#">
          {left > 0 ? "Apúntate" : "Avísame"}
        </a>
      </div>
    </article>);

};

const Formaciones = () =>
<section className="section section--alt">
    <div className="wrap">
      <div className="section__header">
        <h2 className="section__title">Tenemos la <em>formación</em> que te pone por delante</h2>
        <a className="section__see-all" href="#">Ver todas <Icon name="arrow" size={14} /></a>
      </div>
      <div className="formacion__grid">
        {HC_DATA.formaciones.map((f) => <FormacionCard key={f.id} f={f} />)}
      </div>
    </div>
  </section>;


// ---------------- ARTÍCULOS ----------------
const ArticleCard = ({ a }) =>
<article className="article-card">
    <div className="article-card__photo ph">
      <img src={a.photo} alt="" />
      <span className="article-card__overline">{a.cat}</span>
      <button className="article-card__audio" type="button" aria-label="Escuchar artículo">
        <img src="assets/volume-up.svg" alt="" aria-hidden="true" />
      </button>
    </div>
    <div className="article-card__body">
      <h3 className="article-card__title">{a.title}</h3>
      <p className="article-card__excerpt">{a.excerpt}</p>
      <div className="article-card__meta">
        <span>{a.date}</span>
        <span className="sep"></span>
        <span>{a.read} lectura o escucha</span>
      </div>
    </div>
  </article>;


const Articulos = () =>
<section className="section">
    <div className="wrap">
      <div className="section__header">
        <div className="section__heading">
          <h2 className="section__title">Lo que está pasando en hostelería</h2>
          <p className="section__subtitle">Artículos, entrevistas y crónicas de encuentros contados desde dentro.</p>
        </div>
        <a className="section__see-all" href="#">Ver todos <Icon name="arrow" size={14} /></a>
      </div>
      <div className="articulos__grid">
        {HC_DATA.articulos.map((a) => <ArticleCard key={a.id} a={a} />)}
      </div>
    </div>
  </section>;


// ---------------- FOOTER CTA ----------------
const FooterCta = () =>
<section className="footer-cta">
    <div className="wrap footer-cta__inner">
      <div>
        <h2 className="footer-cta__title">Tu cocina, tu negocio, tu casa</h2>
        <p className="footer-cta__lede">El espacio donde nos encontramos. Hacemos cocina de Guía Repsol.
      </p>
        <a className="btn btn--primary" href="#">Crear cuenta <Icon name="arrow" size={18} /></a>
      </div>
      <div className="footer-cta__art">
        <img src="assets/footer-cta-cocineros.jpg" alt="Cocineros en cocina" />
      </div>
    </div>
  </section>;

// ---------------- FOOTER ----------------
const Footer = () =>
<footer className="footer">
    <div className="wrap">
      <div className="footer__inner">
        <div className="footer__col footer__brand">
          <a className="footer__logo" href="#" aria-label="guía repsol — Hacemos cocina">
            <img src="assets/logo-hacemos-cocina-negativo.svg" alt="guía repsol | Hacemos cocina" />
          </a>
          <p className="desc">El espacio de todos los hosteleros. Hablamos como tú, desde el gremio, sin formalismos y sin rodeos.</p>
        </div>
        <div className="footer__col">
          <h4>Plataforma</h4>
          <ul>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Podcast</a></li>
            <li><a href="#">Formación</a></li>
            <li><a href="#">Herramientas</a></li>
            <li><a href="#">Artículos</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Guía Repsol</h4>
          <ul>
            <li><a href="#">Restaurantes Soles</a></li>
            <li><a href="#">Soletes</a></li>
            <li><a href="#">Sol Sostenible</a></li>
            <li><a href="#">Recetas</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Ayuda</h4>
          <ul>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Para profesionales</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© Repsol S.A. 2000 — 2026</span>
        <div className="footer__legal">
          <a href="#">Política de privacidad</a>
          <a href="#">Política de cookies</a>
          <a href="#">Nota legal</a>
          <a href="#">Condiciones del servicio</a>
        </div>
      </div>
    </div>
  </footer>;


// ---------------- DEMO TABS (floating mini-nav, bottom-left) ----------------
const DemoTabs = ({ view, setView, openReg, regOpen, setUser }) => {
  const active = view === "private" ? "priv" : regOpen ? "reg" : "home";
  const go = (k) => {
    if (k === "home") {setUser(null);setView("home");window.scrollTo(0, 0);}
    if (k === "reg") {setUser(null);setView("home");openReg();}
    if (k === "priv") {setView("private");window.scrollTo(0, 0);}
  };
  const Tab = ({ id, label, icon }) =>
  <button type="button" className={`demo-tab ${active === id ? "is-active" : ""}`} onClick={() => go(id)}>
      <span className="demo-tab__ic">{icon}</span>
      <span className="demo-tab__lbl">{label}</span>
    </button>;

  return (
    <div className="demo-tabs" role="navigation" aria-label="Demo" style={{ position: 'fixed', left: '20px', bottom: '20px', zIndex: 9999, display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px', background: '#011E37', borderRadius: '999px', boxShadow: '0 12px 32px rgba(1,30,55,0.25)', fontFamily: 'var(--font-text)', width: 'auto' }}>
      <span className="demo-tabs__title">Demo</span>
      <Tab id="home" label="Home" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 12 3l9 8" /><path d="M5 10v10h14V10" /></svg>} />
      <Tab id="reg" label="Registro" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /><path d="M19 4v4M21 6h-4" /></svg>} />
      <Tab id="priv" label="Área privada" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg>} />
    </div>);

};

// ---------------- APP ----------------
const App = () => {
  const [view, setView] = React.useState("home");
  const [regOpen, setRegOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    window.__openRegister = () => setRegOpen(true);
    return () => {delete window.__openRegister;};
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = regOpen ? "hidden" : "";
  }, [regOpen]);

  const handleComplete = (data) => {
    setUser(data);
    setRegOpen(false);
    setView("private");
    window.scrollTo(0, 0);
  };

  if (view === "private") {
    const u = user || { nombre: "Ane", apellido: "G." };
    return (
      <React.Fragment>
        <PrivateArea user={u} onLogout={() => {setUser(null);setView("home");}} />
        <DemoTabs view={view} setView={setView} openReg={() => setRegOpen(true)} regOpen={regOpen} setUser={setUser} />
        {regOpen && <RegistrationModal onClose={() => setRegOpen(false)} onComplete={handleComplete} />}
      </React.Fragment>);

  }

  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <Eventos />
        <Podcasts />
        <Pildoras />
        <Herramientas />
        <Embajadores />
        <Articulos />
        <FooterCta />
      </main>
      <Footer />
      {regOpen && <RegistrationModal onClose={() => setRegOpen(false)} onComplete={handleComplete} />}
      <DemoTabs view={view} setView={setView} openReg={() => setRegOpen(true)} regOpen={regOpen} setUser={setUser} />
    </React.Fragment>);

};


window.FormacionCard = FormacionCard;
window.Formaciones = Formaciones;
window.ArticleCard = ArticleCard;
window.Articulos = Articulos;
window.FooterCta = FooterCta;
window.Footer = Footer;

if (!window.__skipAutoMount) {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}