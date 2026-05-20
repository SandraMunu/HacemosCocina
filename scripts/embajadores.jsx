/* global React, Icon */

const EMBAJADORES = [
{
  id: "angel",
  photo: "assets/embajador-lara.png",
  name: "Ángel León",
  role: "de Aponiente",
  bio: "El chef del mar transforma el océano en pura creatividad. Desde plancton hasta embutidos marinos, su visión ha revolucionado lo posible en la cocina."
},
{
  id: "bonaga-malave",
  photo: "assets/embajador-cristina-yajaira.png",
  name: "Cristina Bonaga y Yahaira Malavé",
  role: "de la Gildería",
  bio: "Dos enfoques que se cruzan en la barra y la cocina. Un pequeño espacio donde el producto cuidado y el trato al cliente son el alma de la casa."
},
{
  id: "lara",
  photo: "assets/embajador-angel.png",
  name: "Lara Rodríguez",
  role: "de Abarike",
  bio: "Lara cocina con cabeza y corazón. En Abarike, su recetario propio es puro oficio: sin artificios, con técnica precisa y producto local como bandera."
}];


const Embajadores = () =>
<section className="section">
    <div className="wrap">
      <div className="section__header">
        <div className="section__heading">
          <h2 className="section__title">Nuestros embajadores</h2>
          <p className="section__subtitle">De sala, cocina y gestión: experiencias reales de quienes ya han estado ahí.</p>
        </div>
      </div>
      <div className="embajadores__grid">
        {EMBAJADORES.map((e) =>
      <article key={e.id} className="embajador">
            <div className="embajador__photo">
              <img src={e.photo} alt={e.name} />
            </div>
            <h3 className="embajador__name">{e.name}</h3>
            <p className="embajador__role">{e.role}</p>
            <p className="embajador__bio">{e.bio}</p>
          </article>
      )}
      </div>
    </div>
  </section>;

window.Embajadores = Embajadores;