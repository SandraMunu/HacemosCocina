/* global React */

const FanditPage = ({ onBack }) => {
  return (
    <div className="fandit-page">
      <section className="fandit-hero">
        <img className="fandit-hero__img" src="assets/fandit-hero.png" alt="" />
        <button type="button" className="fandit-back" onClick={onBack} aria-label="Volver">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Volver</span>
        </button>
        <div className="fandit-hero__logo">
          <img src="assets/fandit-logo.png" alt="Fandit" />
        </div>
      </section>

      <div className="fandit-page__wrap" style={{ fontWeight: "400" }}>
        <header className="fandit-head">
          <span className="fandit-head__overline">FANDIT</span>
          <button type="button" className="fandit-share" aria-label="Compartir">
            <span>Compartir</span>
            <span className="fandit-share__icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </span>
          </button>
        </header>

        <h1 className="fandit-title" style={{ fontWeight: "400" }}>
          La herramienta que conecta<br />
          tu negocio con las mejores<br />
          subvenciones
        </h1>

        <section className="fandit-block">
          <h2 className="fandit-block__title">¿Qué es Fandit y cómo puede ayudarte?</h2>

          <ol className="fandit-list">
            <li>
              <h3>Encuentra subvenciones sin complicaciones</h3>
              <p>Fandit es una plataforma diseñada para que los profesionales del sector de la hostelería encuentren las subvenciones que necesitan de forma rápida y sencilla. Olvídate de perder tiempo buscando: Fandit filtra las ayudas que mejor encajan con tu negocio.</p>
            </li>
            <li>
              <h3>Pensado para hosteleros como tú</h3>
              <p>Si tienes un restaurante, bar, cafetería o cualquier negocio del sector hostelero, Fandit es para ti. Encuentra oportunidades para modernizar tu establecimiento, apostar por la sostenibilidad o financiar nuevos proyectos.</p>
            </li>
            <li>
              <h3>Convierte tus ideas en realidad</h3>
              <p>Con Fandit puedes acceder a ayudas para renovar equipamiento, digitalizar tu negocio, apostar por la sostenibilidad o mejorar tu oferta gastronómica. Todo lo que necesitas para seguir creciendo.</p>
            </li>
          </ol>

          <a className="btn btn--navy fandit-cta" href="#">Descubrir</a>
        </section>

        <section className="fandit-block">
          <h2 className="fandit-block__title">¿Cómo funciona?</h2>
          <p className="fandit-paragraph">Fandit hace que encontrar subvenciones sea fácil y rápido. Solo tienes que acceder a la plataforma, filtrar según las necesidades de tu negocio y descubrir las ayudas que mejor encajan contigo. Además, te acompaña en cada paso del proceso, desde la búsqueda hasta la solicitud, para que no pierdas ninguna oportunidad de hacer crecer tu restaurante.</p>
        </section>

        <section className="fandit-cta-card">
          <img className="fandit-cta-card__bg" src="assets/footer-cta-cocineros.jpg" alt="" />
          <div className="fandit-cta-card__overlay">
            <h3>Con Fandit, transforma tu negocio</h3>
            <ul>
              <li>Filtra subvenciones en segundos y olvídate de buscar entre miles de opciones.</li>
              <li>Encuentra ayudas para modernizar, digitalizar o hacer más sostenible tu restaurante.</li>
              <li>Gestiona tus solicitudes con el apoyo de expertos que te acompañan en cada paso.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>);

};

window.FanditPage = FanditPage;