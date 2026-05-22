/* global React, Icon, HC_DATA, Nav, Footer */

// Datos del establecimiento activo
const PA_DATA = {
  establecimientos: [
  { id: "tar", name: "Taberna Arrano", active: true, isSolete: true },
  { id: "dma", name: "Doña Manuela", active: false, isSolete: false, cover: "assets/cover-establecimiento.jpg" }],

  cover: "assets/cover-arrano.png",
  resena: `El cocinero se provee de productos silvestres y otros de pequeños ganaderos, agricultores y artesanos (cordero, pan, trucha…), y fuego lento y paciencia son herramientas con las que posteriormente elabora guisos concentrados, salsas con fondo y combinaciones ligeras que pueden presumir.`,
  fotos: [
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80"],

  reviews: [
  { author: "Carlos Méndez", role: "Cliente · Google", count: "12 reseñas", stars: 2, when: "Hace 3 días", text: "Esperamos 40 min para sentarnos teniendo reserva. La comida bien, pero salimos con un sabor de boca regular. Por el precio que se paga, esto no debería pasar.", negativo: true, sugerencia: "Hola Carlos, sentimos el retrato del sábado: un servicio se nos alargó más de la cuenta y arrastró las reservas. Ya hemos ajustado los turnos para que no se repita. Nos gustaría invitarte a volver — escríbenos a reservas@arrano.eus y te buscamos hueco." },
  { author: "Pablo Arias", role: 'Chef "La caprichosa"', count: "28 reseñas", stars: 5, when: "Hace 2 semanas", text: "Mesa y servicio de primera. Producto local, fuego de leña y un equipo que no improvisa. Volveremos seguro — y con tiempo, que aquí no se viene a comer rápido." },
  { author: "Marta Gil", role: 'Chef "El Tintero"', count: "28 reseñas", stars: 5, when: "Hace 1 mes", text: "El cordero al horno es de los que recuerdas. Carta corta, honesta. La sala te explica todo sin postureo. Para repetir." }],

  precios: {
    altas: [
    { label: "Atún fresco (lomo limpio)", price: "18,90 €" },
    { label: "Huevos clase L", price: "2,85 €/dz" }],

    bajas: [
    { label: "Tomate ensalada", price: "1,40 €/kg" },
    { label: "Aceite oliva virgen extra", price: "8,90 €/L" }],

    topSub: [
    { label: "Atún fresco (lomo limpio)", price: "+12 %" },
    { label: "Huevos clase L", price: "+8 %" }],

    topBaj: [
    { label: "Aceite oliva virgen extra", price: "−6 %" },
    { label: "Atún fresco (lomo limpio)", price: "−3 %" }]

  },
  competidores: {
    riesgos: [
    { txt: "3 nuevas aperturas con ticket similar al tuyo en 500 m", pri: "alta" },
    { txt: "Una reseña 1★ en Google en los últimos 7 días", pri: "media" }],

    oport: [
    { txt: "Falta oferta de desayuno en la franja 7-9 h en tu zona", pri: "alta" },
    { txt: "Solo 1 competidor ofrece delivery después de las 23:00 h", pri: "media" }]

  }
};

// ---------- COVER ----------
const ProfileCover = ({ cover }) =>
<section className="pa-cover">
    <div className="container">
      <div className="pa-cover__photo" style={{ backgroundImage: `url(${cover})` }}>
        <button className="pa-cover__edit">
          <Icon name="image" size={16} /> Cambiar foto
        </button>
      </div>
    </div>
  </section>;


// ---------- LEFT RAIL (avatar + greeting + chips + nav links) ----------
const SideRail = ({ user, activeEstab, setActiveEstab }) =>
<aside className="pa-rail">
    <div className="pa-avatar">
      <img src="assets/user-avatar.png" alt="Ane" />
    </div>
    <h1 className="pa-greeting">Aupa, {user.nombre || "Ane"}!</h1>
    <a className="pa-rail__edit" href="#" onClick={(e) => {e.preventDefault();window.__editProfile && window.__editProfile();}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>
      Editar perfil
    </a>
    <div className="pa-rail__estabs">
      {PA_DATA.establecimientos.map((e) =>
    <button key={e.id} className={"pa-chip " + (activeEstab === e.id ? "is-active" : "")} onClick={() => setActiveEstab(e.id)}>
          {e.name}
        </button>
    )}
      <button type="button" className="pa-chip pa-chip--add" aria-label="Añadir nuevo establecimiento">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        Añadir
      </button>
    </div>
    <div className="pa-rail__divider"></div>
    <nav className="pa-rail__nav">
      <a className="pa-rail__link" href="#" onClick={(e) => {e.preventDefault();window.__viewEstablishments && window.__viewEstablishments();}}>
        <span>Ver datos de los establecimientos</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </a>
      <div className="pa-rail__sep"></div>
      <a className="pa-rail__link" href="#">
        <span>Cerrar sesión</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M15 17l5-5-5-5M20 12H9M12 19v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" /></svg>
      </a>
    </nav>
  </aside>;


// ---------- ESTABLISHMENT NAME ----------
const EstabName = ({ estab }) =>
<div className="pa-estab" style={{ gap: "0px" }}>
  {estab.isSolete && <img className="pa-estab__badge" src="assets/badge-solete.png" alt="Solete · guía repsol" />}
  <h1 className="pa-h1-estab">{estab.name}</h1>
</div>;


// ---------- SOBRE TI (full main column) ----------
const SobreTi = () =>
<section className="pa-sobreti-wrap" style={{ gap: "32px" }}>
    <h2 className="pa-h2 pa-sobreti__h2">Así apareces en Guía Repsol</h2>
    <div className="pa-sobreti-card">
      <div className="pa-sobreti-card__preview">
        <img src="assets/ficha-preview.png" alt="Vista previa de tu ficha en Guía Repsol" />
      </div>
      <div className="pa-sobreti-card__copy">
        <span className="pa-resena__label">Tu reseña</span>
        <p className="pa-sobreti-card__text">{PA_DATA.resena}</p>
        <div className="pa-sobreti-card__actions">
          <a className="pa-link" href="#">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>
            Editar contenidos
          </a>
          <button type="button" className="btn-text-pill">Visualizar ficha</button>
        </div>
      </div>
    </div>
  </section>;


// ---------- JOIN GUÍA REPSOL (non-Solete establishments) ----------
const JoinGuiaRepsol = () =>
<section className="pa-sobreti-wrap" style={{ gap: "20px" }}>
    <div className="pa-join-card">
      <div className="pa-join-card__copy">
        <h2 className="pa-h2 pa-join-card__title">¿Te gustaría que tu negocio apareciese en Guía Repsol?</h2>
        <p className="pa-join-card__lede">Queremos conocer tu proyecto. Cuéntanos qué hace único a tu restaurante.</p>
      </div>
      <a href="#" className="btn btn--navy pa-join-card__cta">
        Empezar
        <Icon name="arrow" size={14} />
      </a>
    </div>
  </section>;
const SoleteCreativos = () =>
<section className="pa-sobreti-wrap">
  <h2 className="pa-h2 pa-sobreti__h2">Materiales para tu Solete</h2>
  <div className="pa-card-block pa-block--solete">
    <div className="pa-solete-row">
      <div className="pa-solete-thumbs">
        <img src="assets/creativo-post-69.png" alt="Creatividad amarilla" />
        <img src="assets/creativo-post-70.png" alt="Creatividad con foto" />
        <img src="assets/creativo-post-73.png" alt="Creatividad tipográfica" />
      </div>
      <div className="pa-solete-actions">
        <a className="pa-link pa-link--lg" href="#">
          Solicitar duplicado de mi pegatina
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <a className="pa-link pa-link--lg" href="#">
          Descargar zip con manual
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>
        </a>
        <a className="pa-link pa-link--lg" href="#">
          Descargar zip con creatividades
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>
        </a>
      </div>
    </div>
  </div>
</section>;


// ---------- ACCESOS DIRECTOS ----------
const AccesosDirectos = () => {
  const items = [
  { id: "fandit", label: "Ayudas y subvenciones", logo: "assets/logo-fandit.png" },
  { id: "shifty", label: "Encuentra personal", logo: "assets/logo-shifty.png" },
  { id: "tipi", label: "Conoce el beneficio de tu plato", logo: "assets/logo-tipi.png" }];

  return (
    <section className="pa-sobreti-wrap">
      <h2 className="pa-h2 pa-sobreti__h2">Herramientas para tu día a día</h2>
      <div className="pa-card-block pa-block--accesos">
        <div className="pa-accesos">
        {items.map((it) =>
          <a key={it.id} className="pa-acceso" href="#">
            <span className="pa-acceso__icon pa-acceso__icon--logo"><img src={it.logo} alt="" /></span>
            <span className="pa-acceso__label">{it.label}</span>
            <svg className="pa-acceso__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          )}
        </div>
      </div>
    </section>);

};


// ---------- ACCIONES RÁPIDAS ----------
const AccionesRapidas = () => {
  const items = [
  {
    id: "historia",
    label: "Quiero contar mi historia",
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="3" width="6" height="12" rx="3" />
          <path d="M5 11a7 7 0 0 0 14 0" />
          <path d="M12 18v3" />
        </svg>

  },
  {
    id: "encuentro",
    label: "Quiero organizar un encuentro",
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M3 19a6 6 0 0 1 12 0" />
          <path d="M14.5 19a4 4 0 0 1 6.5-3" />
        </svg>

  },
  {
    id: "vallehermoso",
    label: "Quiero acudir al Mercado de Vallehermoso",
    icon:
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18l-2-5H5l-2 5z" />
          <path d="M5 9v10h14V9" />
          <path d="M9 19v-6h6v6" />
        </svg>

  }];

  return (
    <section className="pa-sobreti-wrap">
      <h2 className="pa-h2 pa-sobreti__h2">Sumérgete en el mundo Guía Repsol</h2>
      <div className="pa-card-block pa-block--accesos">
        <div className="pa-accesos">
        {items.map((it) =>
          <a key={it.id} className="pa-acceso" href="#">
            <span className="pa-acceso__icon">{it.icon}</span>
            <span className="pa-acceso__label">{it.label}</span>
            <svg className="pa-acceso__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          )}
        </div>
      </div>
    </section>);

};


// ---------- COMO EVOLUCIONA TU NEGOCIO ----------
const REVIEW_THEMES = [
{
  tone: "alert",
  title: "El ruido se repite como queja",
  body: "4 personas han mencionado el ruido en sus reseñas este mes. Es la pega más nombrada y va al alza (+2 vs. el mes anterior).",
  quotes: [
  "…no nos oíamos hablar en la mesa de al lado…",
  "…la música demasiado alta para cenar tranquilos…"],

  cta: "Ver como resolverlo"
},
{
  tone: "good",
  title: "El menú del día engancha",
  body: "6 personas recomiendan tu menú del día entre semana. Es tu argumento más fuerte para comunicar en redes y atraer cubiertos al mediodía.",
  quotes: [
  "…el menú del mediodía es de los mejores del barrio…",
  "…volvemos cada semana por el menú, siempre acierta…"],

  cta: "Sácale partido"
}];


const SocialTabs = () => {
  const [active, setActive] = React.useState("Google");
  const tabs = ["Google", "Tripadvisor", "Instagram", "Facebook", "Tiktok"];
  return (
    <div className="pa-social-tabs" role="tablist">
      {tabs.map((n) =>
      <button
        key={n}
        role="tab"
        type="button"
        aria-selected={active === n}
        className={"pa-social-tab" + (active === n ? " is-active" : "")}
        onClick={() => setActive(n)}>
          {n}
        </button>
      )}
    </div>);

};

const ThemeIcon = ({ tone }) => {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (tone === "alert") return <svg {...common}><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.86 2.18 18a2 2 0 0 0 1.74 3h16.16a2 2 0 0 0 1.74-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /></svg>;
  if (tone === "good") return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="m8 12 3 3 5-6" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="9" /></svg>;
};

const EvolucionaNegocio = () =>
<section className="pa-section" style={{ gap: "32px" }}>
    <h2 className="pa-h2">Tu negocio esta semana</h2>
    <p className="pa-section__lede">Lo que se repite en las reseñas de tus clientes.</p>
    <div className="pa-themes">
      {REVIEW_THEMES.map((it, i) =>
    <article key={i} className={`pa-theme pa-theme--${it.tone}`}>
          <div className="pa-theme__head">
            <span className="pa-theme__icon"><ThemeIcon tone={it.tone} /></span>
            <h3 className="pa-theme__title">{it.title}</h3>
          </div>
          <p className="pa-theme__body">{it.body}</p>
          <ul className="pa-theme__quotes">
            {it.quotes.map((q, j) => <li key={j}>“{q}”</li>)}
          </ul>
          <button type="button" className="btn-text-ai">
            <img src="assets/ai-sparkle.svg" alt="" width="18" height="18" aria-hidden="true" />
            {it.cta}
          </button>
        </article>
    )}
    </div>
    <div className="pa-evolucion-grid">

      {/* OPINIONES */}
      <article className="pa-card pa-card--lg">
        <header className="pa-card__head">
          <h3>Conecta tus redes y accede a tus valoraciones</h3>
        </header>
        <p className="pa-card__lede"></p>
        <SocialTabs />
        <div className="pa-rating">
          <div className="pa-rating__num">
            <span className="pa-rating__big">4,6</span><span className="pa-rating__den">/5</span>
            <div className="pa-rating__stars">
              {[1, 2, 3, 4, 5].map((i) => <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= 4 ? "#FCB300" : "rgba(252,179,0,0.3)"}><path d="m12 3 2.6 5.6 6 .7-4.5 4.2 1.2 6L12 16.7 6.7 19.5 8 13.5 3.4 9.3l6-.7L12 3Z" /></svg>)}
            </div>
            <span className="pa-rating__lbl">PUNTUACIÓN MEDIA</span>
          </div>
        </div>
        <div className="pa-reviews">
          {PA_DATA.reviews.map((r, i) =>
        <div key={i} className={`pa-review ${r.negativo ? 'pa-review--neg' : ''}`}>
              <div className="pa-review__head">
                <div className="pa-review__avatar"><img src={`https://i.pravatar.cc/80?img=${20 + i * 5}`} alt="" /></div>
                <div>
                  <div className="pa-review__author">{r.author}</div>
                  <div className="pa-review__meta">{r.role} · {r.count}</div>
                </div>
                <span className="pa-review__when">{r.when}</span>
              </div>
              <div className="pa-review__stars">
                {[1, 2, 3, 4, 5].map((j) => <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill={j <= r.stars ? "#FCB300" : "rgba(252,179,0,0.25)"}><path d="m12 3 2.6 5.6 6 .7-4.5 4.2 1.2 6L12 16.7 6.7 19.5 8 13.5 3.4 9.3l6-.7L12 3Z" /></svg>)}
              </div>
              <p className="pa-review__text">{r.text}</p>
              {r.sugerencia ?
          <div className="pa-suggest">
                  <div className="pa-suggest__head">
                    <span className="pa-suggest__badge">
                      <img src="assets/ai-sparkle.svg" alt="" width="14" height="14" aria-hidden="true" />
                      Respuesta sugerida
                    </span>
                    <button className="pa-suggest__refresh" type="button" aria-label="Reescribir">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></svg>
                    </button>
                  </div>
                  <p className="pa-suggest__text">{r.sugerencia}</p>
                  <div className="pa-suggest__actions">
                    <button className="btn btn--navy btn--sm" type="button">Copiar respuesta</button>
                    <button className="btn btn--ghost btn--sm" type="button">Editar</button>
                  </div>
                </div> :

          <a href="#" className="pa-link pa-link--sm">Leer más</a>
          }
            </div>
        )}
        </div>
        <footer className="pa-card__footer">
          <button className="btn btn--navy">Mejorar mi reputación digital <Icon name="arrow" size={14} /></button>
        </footer>
      </article>
    </div>
  </section>;


// ---------- CHAT MODAL ----------
const CHAT_DATA = {
  question: "Cómo puedo mejorar las reseñas negativas que me han puesto mis clientes?",
  answer: "Las 3 reviews negativas hacen mención de un problema con el servicio en sala en el turno de cena los fines de semana.",
  learnings: "En la mayor parte de los casos tiene que ver con personal con poca experiencia.",
  todo: "Revisa tu personal entre las fechas 11/05 al 13/05 en turno de noche",
  related: [
  { name: "Casa Manolo", meta: "Cambió los turnos de cena los fines de semana" },
  { name: "El Rincón de Lola", meta: "Reorganizó el equipo de sala" }]

};

const ChatModal = ({ user, onClose, onRegister }) => {
  // Close on Esc
  React.useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const isGuest = !user;
  const [guestStep, setGuestStep] = React.useState(1);
  const [guestEmail, setGuestEmail] = React.useState("");
  const [guestName, setGuestName] = React.useState("");
  const [guestPhone, setGuestPhone] = React.useState("");
  const [guestPassword, setGuestPassword] = React.useState("");
  const [guestShowPwd, setGuestShowPwd] = React.useState(false);
  const emailRef = React.useRef(null);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const val = (emailRef.current && emailRef.current.value || "").trim();
    if (val) setGuestEmail(val);
    setGuestStep(2);
  };
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setGuestStep(3);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    onClose();
    if (typeof window !== "undefined" && typeof window.__openVerifyFromChat === "function") {
      window.__openVerifyFromChat({ email: guestEmail, nombre: guestName });
    } else if (onRegister) {
      onRegister();
    }
  };

  return (
    <div className="chat-modal" role="dialog" aria-label="Asistente Guía Repsol">
      <div className="chat-modal__panel">
        {/* Header */}
        <header className="chat-modal__header">
          <h2 className="chat-modal__title" style={{ fontWeight: "400", padding: "24px 0px 16px 24px" }}>
            {isGuest ? "¡Te damos la bienvenida a Guía Repsol Hacemos cocina!" : "¿Cómo podemos ayudarte?"}
          </h2>
          <div className="chat-modal__head-actions">
            <button type="button" className="chat-modal__close" onClick={onClose} aria-label="Cerrar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="chat-modal__body">
          {isGuest ?
          <div className="chat-guest">
              <div className="chat-bubble chat-bubble--bot chat-bubble--guest">
                <p className="chat-guest__lede">
                   <strong></strong>Desde aquí podemos ayudarte en todo lo que necesitas diariamente: reseñas, gestión de personal, costes de menú, ayudas y subvenciones o cualquier detalle que te quite el sueño.
                </p>
                <p className="chat-guest__lede" style={{ fontWeight: "700" }}>Introduce tu correo para empezar</p>
                {guestStep === 1 &&
              <form className="chat-guest__form" onSubmit={handleEmailSubmit}>
                    <input ref={emailRef} type="email" required placeholder="tu@correo.com" className="chat-guest__input" aria-label="Correo electrónico" />
                    <button type="submit" className="chat-guest__submit" aria-label="Enviar">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </button>
                  </form>
              }
              </div>

              {guestStep >= 2 &&
            <React.Fragment>
                  <div className="chat-bubble chat-bubble--user">
                    <p>{guestEmail || "Mi correo"}</p>
                  </div>
                  <div className="chat-bubble chat-bubble--bot chat-bubble--guest">
                    <p className="chat-guest__lede">
                      <strong>¡Bien!</strong> Veo que aún no tienes cuenta. Déjame tu nombre y número de teléfono para que podamos continuar.
                    </p>
                    {guestStep === 2 &&
                <form className="chat-guest__form chat-guest__form--stack" onSubmit={handleNameSubmit}>
                        <input
                    type="text"
                    required
                    placeholder="Nombre"
                    className="chat-guest__input chat-guest__input--solo"
                    aria-label="Nombre"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)} />
                        <div className="chat-guest__form-row">
                          <input
                      type="tel"
                      required
                      placeholder="Teléfono"
                      className="chat-guest__input"
                      aria-label="Teléfono"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)} />
                          <button type="submit" className="chat-guest__submit" aria-label="Enviar">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                          </button>
                        </div>
                      </form>
                }
                  </div>
                </React.Fragment>
            }

              {guestStep >= 3 &&
            <React.Fragment>
                  <div className="chat-bubble chat-bubble--user">
                    <p>{(guestName || "Nombre") + " · " + (guestPhone || "Teléfono")}</p>
                  </div>
                  <div className="chat-bubble chat-bubble--bot chat-bubble--guest">
                    <p className="chat-guest__lede">
                      <strong>¡Muchas gracias{guestName ? ", " + guestName : ""}!</strong> Ya solo te falta crear una contraseña.
                    </p>
                    <form className="chat-guest__form" onSubmit={handlePasswordSubmit}>
                      <input
                    type={guestShowPwd ? "text" : "password"}
                    required
                    minLength={4}
                    placeholder="Tu contraseña"
                    className="chat-guest__input"
                    aria-label="Contraseña"
                    value={guestPassword}
                    onChange={(e) => setGuestPassword(e.target.value)} />
                      <button
                    type="button"
                    className="chat-guest__eye"
                    aria-label={guestShowPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                    onClick={() => setGuestShowPwd(!guestShowPwd)}>
                        {guestShowPwd ?
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.86 19.86 0 0 1 4.24-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.86 19.86 0 0 1-3.17 4.42M1 1l22 22M9.88 9.88a3 3 0 1 0 4.24 4.24" /></svg> :
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    }
                      </button>
                      <button type="submit" className="chat-guest__submit" aria-label="Enviar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </button>
                    </form>
                  </div>
                </React.Fragment>
            }
            </div> :

          <React.Fragment>
              {/* User bubble */}
              <div className="chat-bubble chat-bubble--user">
                <p>{CHAT_DATA.question}</p>
              </div>

              {/* Assistant response */}
              <div className="chat-bubble chat-bubble--bot">
                <p>{CHAT_DATA.answer}</p>
              </div>

              {/* Insight cards */}
              <div className="chat-insights">
                <article className="chat-insight chat-insight--green">
                  <span className="chat-insight__label" style={{ fontWeight: "600" }}>Claves</span>
                  <p className="chat-insight__text">{CHAT_DATA.learnings}</p>
                </article>
                <article className="chat-insight chat-insight--blue">
                  <span className="chat-insight__label" style={{ fontWeight: "600" }}>Qué hacer</span>
                  <p className="chat-insight__text">{CHAT_DATA.todo}</p>
                </article>
              </div>

              {/* Otros Soletes hicieron */}
              <section className="chat-related">
                <div className="chat-related__head">
                  <span className="chat-related__tag" style={{ fontWeight: "600" }}>
                    <img className="chat-related__icon" src="assets/solete-face.png" alt="" aria-hidden="true" />
                    <span className="chat-related__label">Otros Soletes hicieron</span>
                  </span>
                </div>
                <ul className="chat-related__list">
                  {CHAT_DATA.related.map((r, i) =>
                <li key={i} className="chat-related__item" style={{ width: "2000px" }}>
                      <div className="chat-related__meta">
                        <span className="chat-related__name" style={{ fontWeight: "400" }}>{r.name}</span>
                        <span className="chat-related__sub">{r.meta}</span>
                      </div>
                      <button type="button" className="chat-related__more" aria-label="Más opciones">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="5" r="1.6" />
                          <circle cx="12" cy="12" r="1.6" />
                          <circle cx="12" cy="19" r="1.6" />
                        </svg>
                      </button>
                    </li>
                )}
                </ul>
              </section>
            </React.Fragment>
          }
        </div>

        {/* Footer */}
        <footer className="chat-modal__footer">
          <button type="button" className="chat-action chat-action--secondary" aria-label="Subir archivo">
            <img src="assets/chat-upload.svg" alt="" width="24" height="24" />
          </button>
          <button type="button" className="chat-action chat-action--primary" aria-label="Hablar">
            <img src="assets/chat-voice-icon.svg" alt="" width="28" height="28" />
          </button>
          <button type="button" className="chat-action chat-action--secondary" aria-label="Teclado">
            <img src="assets/chat-keyboard.svg" alt="" width="24" height="24" />
          </button>
        </footer>
      </div>
    </div>);

};


// ---------- PRIVATE AREA ----------
const PrivateArea = ({ user, onLogout }) => {
  const [activeEstab, setActiveEstab] = React.useState("tar");
  const [chatOpen, setChatOpen] = React.useState(false);
  const activeData = PA_DATA.establecimientos.find((e) => e.id === activeEstab) || PA_DATA.establecimientos[0];

  React.useEffect(() => {
    window.__onLogout = onLogout;
    return () => {delete window.__onLogout;};
  }, [onLogout]);

  return (
    <React.Fragment>
      <Nav loggedInUser={user} onLogout={onLogout} />
      <main className="pa-main">
        <ProfileCover cover={PA_DATA.cover} />
        <div className="container pa-layout">
          <SideRail user={user} activeEstab={activeEstab} setActiveEstab={setActiveEstab} />
          <div className="pa-content" style={{ padding: "32px 0px 0px 8px", gap: "48px" }}>
            <EstabName estab={activeData} />
            {activeData.isSolete ? <SobreTi /> : <JoinGuiaRepsol />}
            {activeData.isSolete && <SoleteCreativos />}
            <AccesosDirectos />
            <AccionesRapidas />
            <EvolucionaNegocio />
          </div>
        </div>
      </main>
      <button type="button" className={"pa-chat-fab" + (chatOpen ? " is-hidden" : "")} aria-label="Pregunta a Guía Repsol" onClick={() => setChatOpen(true)}>
        <img className="pa-chat-fab__icon" src="assets/chat-voice.svg" alt="" aria-hidden="true" />
        <span className="pa-chat-fab__badge" aria-hidden="true">
          <img src="assets/chat-sparkle.svg" alt="" />
        </span>
      </button>
      {chatOpen && <ChatModal user={user} onClose={() => setChatOpen(false)} />}
      <Footer />
    </React.Fragment>);

};

window.PrivateArea = PrivateArea;
window.ChatModal = ChatModal;

// ---------- ESTABLISHMENT DETAILS PAGE ----------
const ESTAB_DETAILS = {
  tar: {
    nombre: "Taberna Arrano",
    tipo: "Restaurante",
    cif: "B12345678",
    direccion: "Calle Mayor, 14",
    cp: "20001",
    municipio: "San Sebastián",
    provincia: "Gipuzkoa",
    ccaa: "País Vasco",
    telPublico: "+34 943 12 34 99"
  },
  dma: {
    nombre: "Doña Manuela",
    tipo: "Bar / Cafetería",
    cif: "B98765432",
    direccion: "Plaza del Sol, 7",
    cp: "28013",
    municipio: "Madrid",
    provincia: "Madrid",
    ccaa: "Madrid",
    telPublico: "+34 91 555 22 22"
  }
};

const ESTAB_FIELDS = [
["Nombre del establecimiento", "nombre"],
["CIF", "cif"],
["Dirección", "direccion"],
["Código postal", "cp"],
["Municipio", "municipio"],
["Provincia", "provincia"],
["Comunidad autónoma", "ccaa"]];



const EstablishmentsPage = ({ user, onBack, embedded = false }) => {
  const [active, setActive] = React.useState("tar");
  const [allData, setAllData] = React.useState(ESTAB_DETAILS);
  const data = allData[active] || ESTAB_DETAILS.tar;
  const meta = PA_DATA.establecimientos.find((e) => e.id === active) || PA_DATA.establecimientos[0];
  const setField = (k) => (e) => setAllData({ ...allData, [active]: { ...data, [k]: e.target.value } });
  const fullFields = new Set(["nombre", "direccion"]);

  return (
    <React.Fragment>
      {!embedded && <Nav loggedInUser={user} onLogout={() => window.__goHome && window.__goHome()} />}
      <main className="ed-main">
        <div className="container">
          <button type="button" className="ed-back" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Volver a mi área privada
          </button>
          <header className="ed-header">
            <h1 className="ed-title">Datos de tus establecimientos</h1>
            <p className="ed-lede">Revisa y actualiza la información que tenemos de cada uno de tus negocios. Es lo que aparece en tu ficha y lo que usamos para personalizar tu día a día.</p>
          </header>

          <div className="ed-chips" role="tablist" aria-label="Establecimientos">
            {PA_DATA.establecimientos.map((e) =>
            <button
              key={e.id}
              role="tab"
              aria-selected={active === e.id}
              className={"pa-chip " + (active === e.id ? "is-active" : "")}
              onClick={() => setActive(e.id)}>
                {e.name}
              </button>
            )}
            <button type="button" className="pa-chip pa-chip--add" aria-label="Añadir nuevo establecimiento">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
              Añadir nuevo establecimiento
            </button>
          </div>

          <article className="ed-card">
            <header className="ed-card__head">
              <div className="ed-card__title-row" style={{ gap: "1px" }}>
                {meta.isSolete && <img className="pa-estab__badge" src="assets/badge-solete.png" alt="Solete · guía repsol" />}
                <h2 className="ed-card__title">{data.nombre}</h2>
              </div>
              <a className="pa-link" href="#">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>
                Editar datos
              </a>
            </header>

            <div className="auth-grid auth-grid--two">
              {ESTAB_FIELDS.map(([label, key]) => {
                const cls = "field field--float" + (fullFields.has(key) ? " field--full" : "");
                return (
                  <div key={key} className={cls}>
                    <input id={`ef-${active}-${key}`} type="text" placeholder=" " value={data[key] || ""} onChange={setField(key)} />
                    <label htmlFor={`ef-${active}-${key}`}>{label}</label>
                  </div>);

              })}
            </div>

            <a className="ed-delete" href="#" onClick={(e) => e.preventDefault()}>
              <span>Eliminar establecimiento</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
            </a>

            <div className="ep-actions ed-actions">
              <button type="button" className="btn btn--ghost" onClick={onBack}>Cancelar</button>
              <button type="button" className="btn btn--navy" onClick={onBack}>Guardar</button>
            </div>
          </article>
        </div>
      </main>
      {!embedded && <Footer />}
    </React.Fragment>);

};

window.EstablishmentsPage = EstablishmentsPage;

// ---------- EDIT PROFILE PAGE ----------
const EditProfilePage = ({ user, onBack, embedded = false }) => {
  const [d, setD] = React.useState({
    nombre: user.nombre || "Ane",
    apellido: user.apellido || "García Castellón",
    email: user.email || "ane.garcia@gmail.com",
    telefono: user.telefono || "657 341 298",
    pwdOld: "",
    pwdNew: "",
    pwdConfirm: ""
  });
  const [pwdOpen, setPwdOpen] = React.useState(true);
  const [showOld, setShowOld] = React.useState(false);
  const [showNew, setShowNew] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const set = (k) => (e) => setD({ ...d, [k]: e.target.value });

  const InfoCircle = ({ title }) =>
  <span className="ep-info" title={title} aria-label={title}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" /><path d="M12 8h.01" /><path d="M11 12h1v5h1" />
      </svg>
    </span>;

  const EyeIcon = ({ open }) => open ?
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.86 19.86 0 0 1 4.24-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.86 19.86 0 0 1-3.17 4.42M1 1l22 22M9.88 9.88a3 3 0 1 0 4.24 4.24" /></svg> :
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;

  return (
    <React.Fragment>
      {!embedded && <Nav loggedInUser={user} onLogout={() => window.__goHome && window.__goHome()} />}
      <main className="ep-main">
        <div className="container">
          <button type="button" className="ed-back" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Volver a mi área privada
          </button>

          <header className="ep-header">
            <h1 className="ep-title">Editar perfil</h1>
            <p className="ep-lede">Actualiza tus datos personales, cambia tu contraseña y gestiona la configuración de tu cuenta.</p>
          </header>

          <section className="ep-card">
            <header className="ep-card__head"><h2 className="ep-card__title">Datos personales</h2></header>
            <div className="ep-card__body">
              <div className="auth-grid auth-grid--two">
                <div className="field field--float">
                  <input id="ep-nombre" type="text" placeholder=" " value={d.nombre} onChange={set("nombre")} />
                  <label htmlFor="ep-nombre">Nombre</label>
                </div>
                <div className="field field--float">
                  <input id="ep-email" type="email" placeholder=" " value={d.email} onChange={set("email")} disabled />
                  <label htmlFor="ep-email" className="is-floated">Correo electrónico <InfoCircle title="Para modificar el correo electrónico contacta con Atención al cliente." /></label>
                </div>
                <div className="field field--float">
                  <input id="ep-apellido" type="text" placeholder=" " value={d.apellido} onChange={set("apellido")} />
                  <label htmlFor="ep-apellido">Apellidos</label>
                </div>
                <div className="field field--float">
                  <input id="ep-tel" type="tel" placeholder=" " value={d.telefono} onChange={set("telefono")} />
                  <label htmlFor="ep-tel">Teléfono Móvil</label>
                </div>
              </div>

              <p className="ep-important">
                <strong>Importante:</strong> Si necesitas cambiar tu correo electrónico, ponte en contacto con nuestro equipo de Atención al cliente <a href="#">[Correo X, Teléfono X]</a>.
              </p>

              <button type="button" className="ep-toggle" onClick={() => setPwdOpen(!pwdOpen)} aria-expanded={pwdOpen}>
                <span>¿Quieres cambiar tu contraseña? </span>
                <svg className={"ep-toggle__chev " + (pwdOpen ? "is-open" : "")} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
              </button>

              {pwdOpen &&
              <div className="auth-grid auth-grid--two">
                  <div className="field field--float field--full field--pwd">
                    <input id="ep-pwd-old" type={showOld ? "text" : "password"} placeholder=" " value={d.pwdOld} onChange={set("pwdOld")} />
                    <label htmlFor="ep-pwd-old">Contraseña actual</label>
                    <button type="button" className="field__eye" aria-label={showOld ? "Ocultar" : "Mostrar"} onClick={() => setShowOld(!showOld)}><EyeIcon open={showOld} /></button>
                  </div>
                  <div className="field field--float field--pwd">
                    <input id="ep-pwd-new" type={showNew ? "text" : "password"} placeholder=" " value={d.pwdNew} onChange={set("pwdNew")} />
                    <label htmlFor="ep-pwd-new">Nueva contraseña <InfoCircle title="8 caracteres, una letra y un número o símbolo." /></label>
                    <button type="button" className="field__eye" aria-label={showNew ? "Ocultar" : "Mostrar"} onClick={() => setShowNew(!showNew)}><EyeIcon open={showNew} /></button>
                  </div>
                  <div className="field field--float field--pwd">
                    <input id="ep-pwd-confirm" type={showConfirm ? "text" : "password"} placeholder=" " value={d.pwdConfirm} onChange={set("pwdConfirm")} />
                    <label htmlFor="ep-pwd-confirm">Confirmar nueva contraseña</label>
                    <button type="button" className="field__eye" aria-label={showConfirm ? "Ocultar" : "Mostrar"} onClick={() => setShowConfirm(!showConfirm)}><EyeIcon open={showConfirm} /></button>
                  </div>
                </div>
              }

              <div className="ep-actions">
                <button type="button" className="btn btn--ghost" onClick={onBack}>Cancelar</button>
                <button type="button" className="btn btn--navy" onClick={onBack}>Guardar</button>
              </div>
            </div>
          </section>

          <section className="ep-card">
            <header className="ep-card__head"><h2 className="ep-card__title">Cuenta</h2></header>
            <div className="ep-card__body">
              <a className="ep-row" href="#">
                <span>Condiciones legales</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </a>
              <a className="ep-row" href="#">
                <span>Eliminar mi cuenta</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
              </a>
            </div>
          </section>
        </div>
      </main>
      {!embedded && <Footer />}
    </React.Fragment>);

};

window.EditProfilePage = EditProfilePage;