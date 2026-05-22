/* global React */

const EventoPage = ({ ev, onBack }) => {
  // Fallback: use first event if none provided
  const data = ev || (typeof HC_DATA !== "undefined" ? HC_DATA.eventos[0] : null);
  if (!data) return null;

  const baseOthers = (typeof HC_DATA !== "undefined" ? HC_DATA.eventos : []).filter((e) => e.id !== data.id);
  const extraOthers = [
  { id: "x1", day: "18", month: "Dic", title: "Maridajes de invierno con La Tasquita", time: "19:00h — 22:00h", place: "Madrid", format: "Presencial", attendees: 18, photo: "assets/evento-la-tasquita.jpg", isFree: false },
  { id: "x2", day: "22", month: "Ene", title: "Pan, fermentaciones y obrador", time: "10:00h — 14:00h", place: "Bilbao", format: "Presencial", attendees: 24, photo: "assets/evento-3.png", isFree: true },
  { id: "x3", day: "08", month: "Feb", title: "Brasa y producto en sala", time: "17:00h — 20:00h", place: "Mercado de Vallehermoso", format: "Presencial", attendees: 21, photo: "assets/evento-1.png", isFree: false },
  { id: "x4", day: "21", month: "Feb", title: "Sostenibilidad en la cocina diaria", time: "11:00h — 13:00h", place: "Barcelona", format: "Presencial", attendees: 30, photo: "assets/evento-2.png", isFree: true }];

  const others = [...baseOthers, ...extraOthers];

  const monthFull = {
    "Ene": "ene", "Feb": "feb", "Mar": "mar", "Abr": "abr",
    "May": "may", "Jun": "jun", "Jul": "jul", "Ago": "ago",
    "Sep": "sep", "Oct": "oct", "Nov": "nov", "Dic": "dic"
  }[data.month] || data.month.toLowerCase();

  const dateStr = `${parseInt(data.day, 10)} ${monthFull} 2024`;

  // Hero override for Gorka Mota event — the listing card keeps its thumbnail
  const heroPhoto = data.id === "e1" ? "assets/evento-gorka-mota-hero.png" : data.photo;

  return (
    <div className="evento-page" style={{ fontWeight: "400" }}>
      <section className="evento-hero">
        <img className="evento-hero__img" src={heroPhoto} alt="" />
        <button type="button" className="evento-back" onClick={onBack} aria-label="Volver">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Volver</span>
        </button>
      </section>

      <div className="evento-page__wrap">
        <header className="evento-head">
          <span className="evento-head__overline">ENCUENTRO MERCADO VALLEHERMOSO</span>
          <button type="button" className="evento-share" aria-label="Compartir">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </header>

        <span className={"evento-badge " + (data.isFree ? "is-free" : "is-limited")}>
          {data.isFree ? "GRATIS" : "PLAZAS LIMITADAS"}
        </span>

        <h1 className="evento-title" style={{ fontWeight: "400" }}>{data.title}</h1>

        <div className="evento-info">
          <div className="evento-info__row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 3v4M16 3v4" />
            </svg>
            <span><strong>Fecha</strong> {dateStr}</span>
          </div>
          <div className="evento-info__row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 14" />
            </svg>
            <span><strong>Hora</strong> {data.time}</span>
          </div>
          <div className="evento-info__row">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s-7-7.5-7-13a7 7 0 0 1 14 0c0 5.5-7 13-7 13z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span>{data.place}</span>
          </div>
        </div>

        <div className="evento-body">
          <p>Vamos al puesto de Guía Repsol en el mercado de Vallehermoso, en Madrid, para aprender junto al chef Gorka Mota, hablar de cocina a baja temperatura y técnicas al vacío. Gorka nos mostrará cómo estas técnicas, bien aplicadas, pueden ser la clave para optimizar el trabajo en la cocina profesional.</p>
          <p>Hablaremos de adelantar producciones los días flojos, como lunes o martes, para que el fin de semana todo esté bajo control. Hablaremos de conservar alimentos hasta dos meses sin perder calidad. Y, sobre todo, hablamos de cómo esta técnica puede ayudarte a sacar el servicio adelante sin renunciar a lo que hace único a tu plato.</p>
        </div>

        <div className="evento-cta-card">
          <p className="evento-cta-card__msg">
            <strong>Las plazas son limitadas, por lo que se requiere reserva previa.</strong>
          </p>
          <a className="btn btn--navy evento-cta-card__btn" href="#">Apúntate</a>
        </div>

        {others.length > 0 &&
        <section className="evento-otros">
            <h2 className="evento-otros__title" style={{ fontWeight: "400" }}>Otros eventos</h2>
            <div className="evento-otros__carousel">
              {others.map((o) =>
            <div key={o.id} className="evento-otros__slide">
                  <EventCard ev={o} />
                </div>
            )}
            </div>
          </section>
        }
      </div>
    </div>);

};

window.EventoPage = EventoPage;