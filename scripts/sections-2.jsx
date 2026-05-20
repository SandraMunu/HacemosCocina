/* global React, Icon, HC_DATA */

// ---------------- PODCASTS ----------------
const PodcastRow = ({ p }) =>
<article className="podcast-row">
    <div className="podcast-row__art ph">
      <img src={p.art} alt="" />
      <div className="podcast-row__play">
        <span className="podcast-row__play-btn"><Icon name="play" size={14} /></span>
      </div>
    </div>
    <div className="podcast-row__body">
      <h3 className="podcast-row__title">{p.title}</h3>
      <div className="podcast-row__meta">
        {p.isNew && <span className="new">Nuevo</span>}
        <span>Episodio {p.ep}</span>
        <span className="dur">{p.dur}</span>
      </div>
    </div>
    <button className="podcast-row__spotify" title="Guardar en Spotify">
      <Icon name="spotify" size={18} />
    </button>
  </article>;


const Podcasts = () =>
<section className="section podcasts">
    <div className="wrap">
      <div className="section__header">
        <div className="section__heading">
          <h2 className="section__title">Podcast: De puertas para adentro</h2>
          <p className="section__subtitle">Conversaciones honestas con quienes saben lo que es sacar el negocio adelante.</p>
        </div>
        <a className="section__see-all" href="#">Ver todos <Icon name="arrow" size={14} /></a>
      </div>
      <div className="podcast-rail">
        {HC_DATA.podcasts.map((p) => <PodcastRow key={p.id} p={p} />)}
      </div>
    </div>
  </section>;


// ---------------- PÍLDORAS 90s ----------------
const Pildora = ({ p }) =>
<article className="pildora">
    <div className="pildora__photo ph">
      <img src={p.photo} alt="" />
    </div>
    <span className="pildora__chip"><span className="dot"></span>{p.cat}</span>
    <span className="pildora__dur">{p.dur}</span>
    <span className="pildora__play"><img src="assets/play.svg" alt="" /></span>
    <div className="pildora__body">
      <h3 className="pildora__title">{p.title}</h3>
      <div className="pildora__author">{p.author}</div>
    </div>
  </article>;


const Pildoras = () => {
  const railRef = React.useRef(null);
  const [pos, setPos] = React.useState(0);
  const [maxScroll, setMaxScroll] = React.useState(0);
  const scroll = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector('.pildora');
    const step = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
  };
  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    setPos(el.scrollLeft);
    setMaxScroll(el.scrollWidth - el.clientWidth);
  };
  React.useEffect(() => {
    const el = railRef.current;
    if (el) setMaxScroll(el.scrollWidth - el.clientWidth);
  }, []);
  const atStart = pos <= 4;
  const atEnd = pos >= maxScroll - 4;
  return (
    <section className="section section--alt">
      <div className="wrap">
        <div className="section__header">
          <h2 className="section__title">La calle en <em>90 segundos</em></h2>
          <div className="carousel-ctrls">
            <button className="carousel-btn" onClick={() => scroll(-1)} disabled={atStart} aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button className="carousel-btn" onClick={() => scroll(1)} disabled={atEnd} aria-label="Siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
            <a className="section__see-all" href="#">Ver todos <Icon name="arrow" size={14} /></a>
          </div>
        </div>
        <div className="pildoras__carousel" ref={railRef} onScroll={onScroll}>
          {HC_DATA.pildoras.concat(HC_DATA.pildoras).map((p, i) => <Pildora key={p.id + '-' + i} p={p} />)}
        </div>
      </div>
    </section>);

};

// ---------------- HERRAMIENTAS ----------------
const ToolTile = ({ t }) =>
<article className={"tool-tile" + (t.style !== "default" ? " tool-tile--" + t.style : "")}>
    <div>
      <div className="tool-tile__overline">{t.overline}</div>
      <h3 className="tool-tile__title">{t.title}</h3>
      {t.style !== "soon" &&
    <span className="tool-tile__cta">Saber más <Icon name="arrow" size={14} /></span>
    }
      {t.style === "soon" &&
    <span className="tool-tile__cta">Saber más <Icon name="arrow" size={14} /></span>
    }
    </div>
    <div className="tool-tile__icon">
      {t.logo
    ? <img src={t.logo} alt={t.overline} className="tool-tile__logo" />
    : <Icon name={t.icon} size={28} />
    }
    </div>
  </article>;


const Herramientas = () =>
<section className="section">
    <div className="wrap">
      <div className="section__header">
        <h2 className="section__title">Todo lo que necesitas en un solo sitio <em></em></h2>
        <a className="section__see-all" href="#">Ver todas <Icon name="arrow" size={14} /></a>
      </div>
      <div className="herramientas__grid">
        {HC_DATA.herramientas.map((t) => <ToolTile key={t.id} t={t} />)}
      </div>
    </div>
  </section>;


window.Podcasts = Podcasts;
window.Pildoras = Pildoras;
window.Herramientas = Herramientas;