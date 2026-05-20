/* global React, HC_DATA, Nav, Hero, Eventos, Podcasts, Pildoras, Herramientas, Formaciones, Articulos, Embajadores, RegistrationModal, PrivateArea, Icon */
const { useState, useEffect, useRef, useLayoutEffect } = React;

// ============================================================
// MobileHeader — replaces desktop .nav
//   user      → {nombre, apellido} when logged in (shows profile pill)
//   onLogo    → click on the brand logo (always navigates home)
//   onProfile → click on profile pill (logged-in only; → área privada)
//   onMenu    → open the side drawer
// ============================================================
const MobileHeader = ({ onMenu, onLogo, onProfile, user, dark = false }) => (
  <header className="m-header" style={dark ? { background: "var(--color-azul)", color: "#fff", borderBottomColor: "rgba(255,255,255,0.08)" } : null}>
    <button className="m-header__brand" onClick={onLogo} aria-label="Ir a la home">
      <img className="m-header__logo" src={dark ? "assets/logo-hacemos-cocina-negativo.svg" : "assets/logo-hacemos-cocina.svg"} alt="Hacemos cocina" />
    </button>
    <div className="m-header__icons">
      {user &&
        <button className="m-profile-avatar" onClick={onProfile} aria-label="Ir a mi área privada">
          <img src="assets/user-avatar.png" alt="Mi perfil" />
        </button>
      }
      <button className="m-icon-btn m-icon-btn--fill" aria-label="Menú" onClick={onMenu}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
    </div>
  </header>
);

// ============================================================
// MobileDrawer
// ============================================================
const MobileDrawer = ({ open, onClose, onAuth }) => {
  if (!open) return null;
  const links = ["Encuentros", "Podcast", "Herramientas", "Artículos"];
  return (
    <div className="m-drawer">
      <div className="m-drawer__head">
        <img src="assets/logo-hacemos-cocina-negativo.svg" alt="" style={{ height: 22 }} />
        <button className="m-drawer__close" onClick={onClose} aria-label="Cerrar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <nav className="m-drawer__nav">
        {links.map((l) =>
          <a key={l} href="#" className="m-drawer__link" onClick={(e) => { e.preventDefault(); onClose(); }}>
            {l}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
          </a>
        )}
      </nav>
      <div className="m-drawer__cta">
        <button className="btn btn--primary" style={{ height: 52, width: "100%", justifyContent: "center" }} onClick={() => { onClose(); onAuth(); }}>Regístrate gratis</button>
        <button className="btn btn--navy-outline" style={{ height: 52, width: "100%", justifyContent: "center" }} onClick={() => { onClose(); onAuth(); }}>Inicia sesión</button>
      </div>
    </div>);
};

// ============================================================
// CarouselDots — JS-driven dots that track scroll position of a
// horizontally scrolling rail. We add them just after the rail.
// ============================================================
const useCarouselDots = (railSelector) => {
  useLayoutEffect(() => {
    const rails = document.querySelectorAll(railSelector);
    const cleanups = [];
    rails.forEach((rail) => {
      // Avoid duplicates
      if (rail.dataset.dotsAttached) return;
      rail.dataset.dotsAttached = "1";

      const dotsWrap = document.createElement("div");
      dotsWrap.className = "m-dots";

      const children = Array.from(rail.children);
      if (children.length < 2) return;

      children.forEach((_, i) => {
        const d = document.createElement("span");
        d.className = "m-dot" + (i === 0 ? " is-active" : "");
        dotsWrap.appendChild(d);
      });
      rail.parentElement.insertBefore(dotsWrap, rail.nextSibling);

      const update = () => {
        const slideW = children[0]?.getBoundingClientRect().width + 12 || 1;
        const idx = Math.round(rail.scrollLeft / slideW);
        const dots = dotsWrap.querySelectorAll(".m-dot");
        dots.forEach((d, i) => d.classList.toggle("is-active", i === Math.min(idx, dots.length - 1)));
      };
      rail.addEventListener("scroll", update, { passive: true });
      cleanups.push(() => {
        rail.removeEventListener("scroll", update);
        dotsWrap.remove();
        delete rail.dataset.dotsAttached;
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [railSelector]);
};

// ============================================================
// MobileFooterCta — mobile version of desktop FooterCta
// ============================================================
const MobileFooterCta = ({ onAuth }) => (
  <section className="m-footer-cta">
    <h2 className="m-footer-cta__title">Tu cocina, tu negocio, tu casa</h2>
    <p className="m-footer-cta__lede">El espacio donde nos encontramos. Hacemos cocina de Guía Repsol.</p>
    <button className="btn btn--navy" style={{ width: "100%", justifyContent: "center", height: 52 }} onClick={onAuth}>
      Crear cuenta
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
    </button>
    <div className="m-footer-cta__art">
      <img src="assets/footer-cta-cocineros.jpg" alt="" />
    </div>
  </section>
);

// ============================================================
// MobileFooter — accordion
// ============================================================
const MobileFooter = () => {
  const groups = [
    { id: "g1", title: "Plataforma", links: ["Eventos", "Podcast", "Formación", "Herramientas", "Artículos"] },
    { id: "g2", title: "Guía Repsol", links: ["Restaurantes Soles", "Soletes", "Sol Sostenible", "Recetas"] },
    { id: "g3", title: "Ayuda", links: ["Contacto", "Preguntas frecuentes", "Para profesionales"] },
    { id: "g4", title: "Legal", links: ["Política de privacidad", "Política de cookies", "Nota legal", "Condiciones del servicio"] }
  ];
  const [open, setOpen] = useState(null);
  return (
    <footer className="m-footer">
      <a className="m-footer__logo" href="#" aria-label="guía repsol — Hacemos cocina">
        <img src="assets/logo-hacemos-cocina-negativo.svg" alt="" />
      </a>
      <p className="m-footer__desc">El espacio de todos los hosteleros. Hablamos como tú, desde el gremio, sin formalismos y sin rodeos.</p>
      <div className="m-footer__acc">
        {groups.map((g) =>
          <div key={g.id} className={"m-footer__group " + (open === g.id ? "is-open" : "")}>
            <button className="m-footer__trigger" onClick={() => setOpen(open === g.id ? null : g.id)}>
              {g.title}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div className="m-footer__body">
              <div className="m-footer__body-inner">
                {g.links.map((l) => <a key={l} href="#" className="m-footer__link">{l}</a>)}
              </div>
            </div>
          </div>
        )}
      </div>
      <p className="m-footer__copy">© Repsol S.A. 2000 — 2026</p>
    </footer>);
};

// ============================================================
// MobileHome — composes desktop section components + mobile chrome
// ============================================================
const MobileHome = ({ onMenu, onAuth, onProfile, onLogout, user }) => {
  // Wire up carousel dots for the desktop grids that we've turned
  // into horizontal rails via mobile.css.
  useCarouselDots(".m-app .eventos__grid");
  useCarouselDots(".m-app .articulos__grid");
  useCarouselDots(".m-app .embajadores__grid");
  useCarouselDots(".m-app .herramientas__grid");
  useCarouselDots(".m-app .formacion__grid");
  useCarouselDots(".m-app .pildoras__carousel");

  // The Hero's "Regístrate" / "Inicia sesión" buttons live inside the
  // shared desktop <Hero/> section, so we wire them up here via event
  // delegation on the scrolling container.
  const scrollRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onClick = (e) => {
      const btn = e.target.closest(".hero .btn--primary, .hero .btn--navy-outline");
      if (!btn) return;
      e.preventDefault();
      onAuth();
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [onAuth]);

  return (
    <div className="m-view">
      <MobileHeader onMenu={onMenu} onLogo={onLogout} onProfile={onProfile} user={user} />
      <div className="m-scroll" ref={scrollRef}>
        <Hero />
        <Eventos />
        <Podcasts />
        <Pildoras />
        <Herramientas />
        <Articulos />
        <Embajadores />
        <MobileFooterCta onAuth={onAuth} />
        <MobileFooter />
      </div>
    </div>);
};

// ============================================================
// MobileAuth — wraps desktop RegistrationModal, full screen
// ============================================================
const MobileAuth = ({ onClose, onComplete }) => (
  <div className="m-view" style={{ background: "#fff" }}>
    <RegistrationModal onClose={onClose} onComplete={onComplete} />
  </div>
);

// ============================================================
// MobileChat — fullscreen overlay (replaces desktop chat-modal)
// ============================================================
const MobileChat = ({ user, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="m-chat">
      <div className="m-chat__head">
        <h2 className="m-chat__title">¿Cómo podemos ayudarte?</h2>
        <button className="m-chat__close" onClick={onClose} aria-label="Cerrar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <div className="m-chat__body">
        <div className="m-bubble m-bubble--user"><p>Cómo puedo mejorar las reseñas negativas que me han puesto mis clientes?</p></div>
        <div className="m-bubble m-bubble--bot"><p>Las 3 reviews negativas hacen mención de un problema con el servicio en sala en el turno de cena los fines de semana.</p></div>
        <div className="m-chat__insights">
          <article className="m-insight m-insight--green">
            <span className="m-insight__label">Aprendizajes</span>
            <p className="m-insight__text">En la mayor parte de los casos tiene que ver con personal con poca experiencia.</p>
          </article>
          <article className="m-insight m-insight--blue">
            <span className="m-insight__label">Qué hacer</span>
            <p className="m-insight__text">Revisa tu personal entre las fechas 11/05 al 13/05 en turno de noche</p>
          </article>
        </div>
        <section className="m-chat__related">
          <div className="m-chat__related-head">
            <img src="assets/solete-sol.png" alt="" />
            Otros Soletes hicieron
          </div>
          {[
            { name: "Casa Manolo", meta: "Cambió los turnos de cena los fines de semana" },
            { name: "El Rincón de Lola", meta: "Reorganizó el equipo de sala" }
          ].map((r) =>
            <div key={r.name} className="m-chat__related-item">
              <div>
                <div className="m-chat__related-name">{r.name}</div>
                <div className="m-chat__related-sub">{r.meta}</div>
              </div>
              <button className="m-chat__more" aria-label="Más">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>
              </button>
            </div>
          )}
        </section>
      </div>
      <div className="m-chat__foot">
        <button className="m-chat__action m-chat__action--secondary" aria-label="Subir">
          <img src="assets/chat-upload.svg" alt="" width="22" height="22" />
        </button>
        <button className="m-chat__action m-chat__action--primary" aria-label="Voz">
          <img src="assets/chat-voice-icon.svg" alt="" width="26" height="26" />
        </button>
        <button className="m-chat__action m-chat__action--secondary" aria-label="Teclado">
          <img src="assets/chat-keyboard.svg" alt="" width="22" height="22" />
        </button>
      </div>
    </div>);
};

// ============================================================
// MobilePrivate — wraps desktop PrivateArea, single column
// ============================================================
const MobilePrivate = ({ user, onLogout, onHome, onMenu, onChat }) => {
  // Carousel dots inside PA themes
  useCarouselDots(".m-app .pa-themes");

  // Click handler bridge: when the desktop FAB is clicked, open mobile chat
  useEffect(() => {
    const fab = document.querySelector(".m-app .pa-chat-fab");
    if (!fab) return;
    const onClick = (e) => { e.preventDefault(); e.stopPropagation(); onChat(); };
    fab.addEventListener("click", onClick, true);
    return () => fab.removeEventListener("click", onClick, true);
  }, [onChat]);

  // Wire the "Cerrar sesión" link inside the PA side rail.
  const scrollRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onClick = (e) => {
      const link = e.target.closest(".pa-rail__link");
      if (!link) return;
      if (link.textContent.trim().startsWith("Cerrar sesi\u00f3n")) {
        e.preventDefault();
        onLogout();
      }
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [onLogout]);

  return (
    <div className="m-view" style={{ background: "#fff" }}>
      <MobileHeader onMenu={onMenu} onLogo={onHome} onProfile={() => {}} user={user} />
      <div className="m-scroll" ref={scrollRef}>
        <PrivateArea user={user} onLogout={onLogout} />
      </div>
    </div>);
};

// ============================================================
// ROOT
//
// View flow:
//   home(logged-out)  → [banner Regístrate]   → auth
//   auth              → [Crear cuenta]        → home(logged-in)
//   home(logged-in)   → [profile pill click]  → private
//   private           → [Cerrar sesión]       → home(logged-out)
//   home / private    → [logo click]          → home
// ============================================================
const MobileApp = () => {
  const [view, setView] = useState("home"); // home | auth | private
  const [drawer, setDrawer] = useState(false);
  const [chat, setChat] = useState(false);
  const [user, setUser] = useState(null);

  const onAuth = () => setView("auth");
  // After registration, drop the user back on the home with a logged-in header.
  const onAuthDone = (u) => { setUser(u); setView("home"); };
  const onLogout = () => { setUser(null); setView("home"); setChat(false); };
  const onHome = () => { setChat(false); setDrawer(false); setView("home"); };
  const onProfile = () => { setChat(false); setDrawer(false); setView("private"); };

  return (
    <div className="m-app">
      {view === "home" &&
        <MobileHome
          user={user}
          onMenu={() => setDrawer(true)}
          onAuth={onAuth}
          onProfile={onProfile}
          onLogout={onLogout} />}
      {view === "auth" && <MobileAuth onClose={() => setView("home")} onComplete={onAuthDone} />}
      {view === "private" &&
        <MobilePrivate
          user={user || { nombre: "Ane", apellido: "G." }}
          onLogout={onLogout}
          onHome={onHome}
          onMenu={() => setDrawer(true)}
          onChat={() => setChat(true)} />}
      {drawer && <MobileDrawer open={drawer} onClose={() => setDrawer(false)} onAuth={onAuth} />}
      {chat && <MobileChat user={user} onClose={() => setChat(false)} />}
    </div>);
};

window.MobileApp = MobileApp;
