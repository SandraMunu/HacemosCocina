/* global React, Icon, HC_DATA, Nav, Footer */

// Datos del establecimiento activo
const PA_DATA = {
  establecimientos: [
  { id: "tar", name: "Taberna Arrano", active: true },
  { id: "dma", name: "Doña Manuela", active: false },
  { id: "che", name: "Ché Bolú", active: false }],

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
const ProfileCover = () =>
<section className="pa-cover">
    <div className="container">
      <div className="pa-cover__photo" style={{ backgroundImage: `url(${PA_DATA.cover})` }}>
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
    <a className="pa-rail__edit" href="#">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>
      Editar perfil
    </a>
    <div className="pa-rail__estabs">
      {PA_DATA.establecimientos.map((e) =>
    <button key={e.id} className={"pa-chip " + (activeEstab === e.id ? "is-active" : "")} onClick={() => setActiveEstab(e.id)}>
          {e.name}
        </button>
    )}
    </div>
    <div className="pa-rail__divider"></div>
    <nav className="pa-rail__nav">
      <a className="pa-rail__link" href="#">
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
const EstabName = () =>
<div className="pa-estab" style={{ gap: "0px" }}>
  <img className="pa-estab__badge" src="assets/badge-solete.png" alt="Solete · guía repsol" />
  <h1 className="pa-h1-estab">Taberna Arrano</h1>
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


// ---------- SOLETE MATERIALES (compact) ----------
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
        <div className="pa-socials">
          {[
        { n: "Google", c: "#fff", b: true },
        { n: "Tripadvisor", c: "#34E0A1" },
        { n: "Instagram", c: "linear-gradient(135deg,#fdcd36,#f55d36,#c43091)" },
        { n: "Facebook", c: "#1877F2" },
        { n: "Tiktok", c: "#000" }].
        map((s) =>
        <button key={s.n} className="pa-social" type="button">
              <span className="pa-social__ic" style={{ background: s.c, border: s.b ? '1px solid var(--border-low,#D8E5F0)' : 'none' }}>
                {s.n === "Google" && <svg width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.2-1 2.3-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6C4.7 19.7 8.1 22 12 22z" /><path fill="#FBBC04" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1c-.7 1.4-1.1 3-1.1 4.6 0 1.6.4 3.2 1.1 4.6L6.4 14z" /><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 3 14.7 2 12 2 8.1 2 4.7 4.3 3.1 7.4L6.4 10c.8-2.4 3-4.1 5.6-4.1z" /></svg>}
                {s.n === "Tripadvisor" && <svg width="14" height="14" viewBox="0 0 24 24" fill="#000"><circle cx="8" cy="14" r="2.5" /><circle cx="16" cy="14" r="2.5" /></svg>}
                {s.n === "Instagram" && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#fff" /></svg>}
                {s.n === "Facebook" && <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M14 22v-8h3l1-4h-4V8c0-1 .5-2 2-2h2V2.5C17 2 16 2 15 2c-3 0-5 2-5 5v3H7v4h3v8h4z" /></svg>}
                {s.n === "Tiktok" && <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M16 4c.5 2 2 3.5 4 4v3c-1.5 0-3-.4-4-1v7a6 6 0 1 1-6-6c.4 0 .7 0 1 .1V14c-.3-.1-.6-.1-1-.1a3 3 0 1 0 3 3V4h3z" /></svg>}
              </span>
              {s.n}
            </button>
        )}
        </div>
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
                    <button className="btn btn--navy btn--sm" type="button">Copiar</button>
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

const ChatModal = ({ user, onClose }) => {
  // Close on Esc
  React.useEffect(() => {
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="chat-modal" role="dialog" aria-label="Asistente Guía Repsol">
      <div className="chat-modal__panel">
        {/* Header */}
        <header className="chat-modal__header">
          <h2 className="chat-modal__title" style={{ fontWeight: "400" }}>¿Cómo podemos ayudarte?</h2>
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
              <span className="chat-insight__label" style={{ fontWeight: "600" }}>Aprendizajes</span>
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

  React.useEffect(() => {
    window.__onLogout = onLogout;
    return () => {delete window.__onLogout;};
  }, [onLogout]);

  return (
    <React.Fragment>
      <Nav loggedInUser={user} onLogout={onLogout} />
      <main className="pa-main">
        <ProfileCover />
        <div className="container pa-layout">
          <SideRail user={user} activeEstab={activeEstab} setActiveEstab={setActiveEstab} />
          <div className="pa-content" style={{ padding: "32px 0px 0px 8px", gap: "48px" }}>
            <EstabName />
            <SobreTi />
            <SoleteCreativos />
            <AccesosDirectos />
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