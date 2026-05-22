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
      <span className="article-card__overline">{a.read}</span>
    </div>
    <div className="article-card__body">
      <h3 className="article-card__title">{a.title}</h3>
      <p className="article-card__excerpt">{a.excerpt}</p>
      <div className="article-card__meta">
        <span>{a.date}</span>
      </div>
      <button type="button" className="article-card__audio-btn" aria-label="Reproducir audio">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </button>
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
        <a className="btn btn--primary" href="#">Regístrate <Icon name="arrow" size={18} /></a>
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
const DemoTabs = ({ view, setView, openReg, authMode, setUser }) => {
  const active = view === "private" ? "priv" : authMode ? "reg" : "home";
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

// ---------------- RESPONSIVE BREAKPOINT ----------------
const MOBILE_BP = 724;
const useIsMobile = () => {
  const get = () => typeof window !== "undefined" && window.innerWidth < MOBILE_BP;
  const [m, setM] = React.useState(get());
  React.useEffect(() => {
    const f = () => setM(get());
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return m;
};

// ---------------- APP ----------------
const App = () => {
  const isMobile = useIsMobile();
  if (isMobile && typeof MobileApp !== "undefined") {
    return <MobileApp />;
  }

  return <DesktopApp />;
};

const DesktopApp = () => {
  const [view, setView] = React.useState("home");
  const [authMode, setAuthMode] = React.useState(null); // null | "register" | "login"
  const [user, setUser] = React.useState(null);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [showWelcome, setShowWelcome] = React.useState(false);
  const [eventoData, setEventoData] = React.useState(null);
  const [chatRegData, setChatRegData] = React.useState(null);

  React.useEffect(() => {
    window.__openRegister = () => setAuthMode("register");
    window.__openLogin = () => setAuthMode("login");
    window.__goHome = () => {setView("home");window.scrollTo(0, 0);};
    window.__goPrivate = () => {setView("private");window.scrollTo(0, 0);};
    window.__viewEstablishments = () => {setView("establishments");window.scrollTo(0, 0);};
    window.__editProfile = () => {setView("edit-profile");window.scrollTo(0, 0);};
    window.__openFandit = () => {setView("fandit");window.scrollTo(0, 0);};
    window.__openEvento = (ev) => {setEventoData(ev || null);setView("evento");window.scrollTo(0, 0);};
    window.__openVerifyFromChat = (info) => { setChatRegData(info || {}); setAuthMode("verify"); };
    return () => {
      delete window.__openRegister;delete window.__openLogin;
      delete window.__goHome;delete window.__goPrivate;
      delete window.__viewEstablishments;delete window.__editProfile;
      delete window.__openFandit;
      delete window.__openEvento;
      delete window.__openVerifyFromChat;
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = authMode ? "hidden" : "";
  }, [authMode]);

  const handleComplete = (data) => {
    const { __welcome, ...userData } = data || {};
    setUser(userData);
    setAuthMode(null);
    setChatRegData(null);
    setView("private");
    if (__welcome) setShowWelcome(true);
    window.scrollTo(0, 0);
  };

  const closeAuth = () => { setAuthMode(null); setChatRegData(null); };
  const authModal = authMode ? <RegistrationModal initialMode={authMode} initialEmail={(chatRegData && chatRegData.email) || ""} initialName={(chatRegData && chatRegData.nombre) || ""} onClose={closeAuth} onComplete={handleComplete} /> : null;

  if (view === "private") {
    const u = user || { nombre: "Ane", apellido: "G." };
    return (
      <React.Fragment>
        <PrivateArea user={u} onLogout={() => {setUser(null);setView("home");}} />
        <DemoTabs view={view} setView={setView} openReg={() => setAuthMode("register")} authMode={authMode} setUser={setUser} />
        {authModal}
        {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}
      </React.Fragment>);

  }

  if (view === "establishments") {
    const u = user || { nombre: "Ane", apellido: "G." };
    return (
      <React.Fragment>
        <EstablishmentsPage user={u} onBack={() => {setView("private");window.scrollTo(0, 0);}} />
        <DemoTabs view={view} setView={setView} openReg={() => setAuthMode("register")} authMode={authMode} setUser={setUser} />
        {authModal}
      </React.Fragment>);

  }

  if (view === "edit-profile") {
    const u = user || { nombre: "Ane", apellido: "G." };
    return (
      <React.Fragment>
        <EditProfilePage user={u} onBack={() => {setView("private");window.scrollTo(0, 0);}} />
        <DemoTabs view={view} setView={setView} openReg={() => setAuthMode("register")} authMode={authMode} setUser={setUser} />
        {authModal}
      </React.Fragment>);

  }

  if (view === "fandit") {
    return (
      <React.Fragment>
        <FanditPage onBack={() => {setView("home");window.scrollTo(0, 0);}} />
        <DemoTabs view={view} setView={setView} openReg={() => setAuthMode("register")} authMode={authMode} setUser={setUser} />
        {authModal}
      </React.Fragment>);

  }

  if (view === "evento") {
    return (
      <React.Fragment>
        <Nav loggedInUser={user} onLogout={() => setUser(null)} />
        <EventoPage ev={eventoData} onBack={() => {setView("home");window.scrollTo(0, 0);}} />
        <Footer />
        <DemoTabs view={view} setView={setView} openReg={() => setAuthMode("register")} authMode={authMode} setUser={setUser} />
        {authModal}
      </React.Fragment>);

  }

  return (
    <React.Fragment>
      <Nav loggedInUser={user} onLogout={() => setUser(null)} />
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
      <button type="button" className={"pa-chat-fab" + (chatOpen ? " is-hidden" : "")} aria-label="Pregunta a Guía Repsol" onClick={() => setChatOpen(true)}>
        <img className="pa-chat-fab__icon" src="assets/chat-voice.svg" alt="" aria-hidden="true" />
        <span className="pa-chat-fab__badge" aria-hidden="true">
          <img src="assets/chat-sparkle.svg" alt="" />
        </span>
      </button>
      {chatOpen && <ChatModal user={user} onClose={() => setChatOpen(false)} onRegister={() => setAuthMode("register")} />}
      {authModal}
      <DemoTabs view={view} setView={setView} openReg={() => setAuthMode("register")} authMode={authMode} setUser={setUser} />
    </React.Fragment>);

};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);