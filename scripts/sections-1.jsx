/* global React, Icon, HC_DATA */
const { useState } = React;

// ---------------- NAV ----------------
const Nav = ({ loggedInUser, onLogout } = {}) => {
  const navLinks = ["Encuentros", "Podcast", "Herramientas", "Artículos"];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const initials = loggedInUser ? (loggedInUser.nombre[0] || "") + (loggedInUser.apellido[0] || "") : "";
  const goHome = (e) => {
    e.preventDefault();
    if (window.__goHome) window.__goHome();
    else window.scrollTo(0, 0);
  };
  return (
    <header className="nav nav--light">
      <div className="wrap nav__inner">
        <a className="nav__brand" href="#" onClick={goHome} aria-label="guía repsol — Hacemos cocina">
          <img src="assets/logo-hacemos-cocina.svg" alt="guía repsol | Hacemos cocina" className="nav__logo" />
        </a>
        <nav className="nav__links">
          {navLinks.map((l) =>
          <a key={l} className="nav__link" href="#">{l}</a>
          )}
        </nav>
        <div className="nav__actions">
          <button className="nav__icon-btn" aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          </button>
          {loggedInUser ?
          <button type="button" className="nav__user" onClick={(e) => { e.preventDefault(); window.__goPrivate && window.__goPrivate(); }} aria-label="Ir a tu área privada">
              <span className="nav__avatar"><img src="assets/user-avatar.png" alt={initials || "AG"} /></span>
              <span className="nav__user-name">{loggedInUser.nombre || "Ane"}</span>
            </button> :

          <a className="btn btn--navy btn--sm" href="#" onClick={(e) => {e.preventDefault();window.__openRegister && window.__openRegister();}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
              Entrar
            </a>
          }
        </div>
      </div>
    </header>);

};

// ---------------- HERO ----------------
const Hero = () =>
<section className="hero">
    <div className="hero__halo"></div>
    <div className="wrap hero__inner">
      <div className="hero__copy">
        <div className="hero__overline" style={{ display: "none" }}>
          <span className="dot"></span>
          
        </div>
        <h1 className="hero__title">
          <br />Tu día a día,<br />tu espacio en Guía Repsol
        </h1>
        <p className="hero__lede" style={{ fontSize: "16px" }}>El lugar donde conectas con otros hosteleros, compartes experiencias y resuelves tu día a día con las herramientas que necesitas.

      </p>
        <div className="hero__cta-row">
          <a className="btn btn--primary" href="#" onClick={(e) => { e.preventDefault(); window.__openRegister && window.__openRegister(); }}>Regístrate <Icon name="arrow" size={18} /></a>
          <a className="btn btn--navy-outline" href="#" onClick={(e) => { e.preventDefault(); window.__openLogin && window.__openLogin(); }}>Inicia sesión</a>
          <span className="hero__cta-meta"></span>
        </div>
        <div className="hero__stats">
          <div>
            <div className="hero__stat-num" style={{ color: "rgb(255, 255, 255)", fontWeight: "400" }}>+1.000</div>
            <div className="hero__stat-label">Hosteleros activos</div>
          </div>
          <div>
            <div className="hero__stat-num" style={{ fontWeight: "400", color: "rgb(255, 255, 255)" }}>+1.200</div>
            <div className="hero__stat-label">Localidades</div>
          </div>
          <div>
            <div className="hero__stat-num" style={{ fontWeight: "400", color: "rgb(255, 255, 255)" }}>+25</div>
            <div className="hero__stat-label">Eventos al año</div>
          </div>
        </div>
      </div>
      <div className="hero__art">
        <div className="hero__video">
          <img src="assets/hero-chef.png" alt="Chef en cocina" />
        </div>
      </div>
    </div>
  </section>;


// ---------------- EVENTOS ----------------
const EventCard = ({ ev }) => {
  const isLinkable = ev.id === "e1";
  const handleClick = (e) => {
    if (isLinkable && typeof window !== "undefined" && typeof window.__openEvento === "function") {
      e.preventDefault();
      window.__openEvento(ev);
    }
  };
  return (
    <article
      className={"event-card" + (isLinkable ? " event-card--linkable" : "")}
      onClick={handleClick}
      role={isLinkable ? "link" : undefined}
      tabIndex={isLinkable ? 0 : undefined}
      onKeyDown={(e) => { if (isLinkable && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); handleClick(e); } }}>
    <div className="event-card__photo ph">
      <img src={ev.photo} alt="" />
      <div className="event-card__date">
        <div className="d">{ev.day}</div>
        <span className="m">{ev.month}</span>
      </div>
      <div className="event-card__chip">
        <span className="overline-chip">{ev.isFree ? "Gratis" : "Plazas limitadas"}</span>
      </div>
    </div>
    <div className="event-card__body">
      <h3 className="event-card__title">{ev.title}</h3>
      <div className="event-card__meta">
        <div className="event-card__meta-row">
          <Icon name="clock" size={16} />
          <span><span className="label">Hora</span>{ev.time}</span>
        </div>
        <div className="event-card__meta-row">
          <Icon name="pin" size={16} />
          <span>{ev.place}</span>
        </div>
      </div>
      <div className="event-card__footer">
        <div className="event-card__attendees">
          <span className="av"><img src="https://i.pravatar.cc/64?img=12" alt="" /></span>
          <span className="av"><img src="https://i.pravatar.cc/64?img=32" alt="" /></span>
          <span className="av"><img src="https://i.pravatar.cc/64?img=47" alt="" /></span>
          <span className="count">+{ev.attendees} apuntados</span>
        </div>
        <a className="btn btn--navy btn--sm" href="#" onClick={(e) => e.stopPropagation()}>Apúntate</a>
      </div>
    </div>
  </article>);
};


const Eventos = () =>
<section className="section eventos">
    <div className="wrap">
      <div className="section__header">
        <div className="section__heading">
          <h2 className="section__title">Encuentros con hosteleros como tú</h2>
          <p className="section__subtitle">Lo que sabemos, lo compartimos.</p>
        </div>
        <a className="section__see-all" href="#">Ver todos <Icon name="arrow" size={14} /></a>
      </div>
      <div className="eventos__grid">
        {HC_DATA.eventos.map((ev) => <EventCard key={ev.id} ev={ev} />)}
      </div>
    </div>
  </section>;


window.Nav = Nav;
window.Hero = Hero;
window.Eventos = Eventos;
window.EventCard = EventCard;