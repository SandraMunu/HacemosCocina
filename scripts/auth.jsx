/* global React, Icon, HC_DATA */

// ---------------- REGISTRATION (full screen, 3 steps + login) ----------------
const RegistrationModal = ({ onClose, onComplete, initialMode = "register" }) => {
  const [step, setStep] = React.useState(initialMode === "login" ? "login-email" : 1);
  const [showPwd, setShowPwd] = React.useState(false);
  const [showLoginPwd, setShowLoginPwd] = React.useState(false);
  const [loginError, setLoginError] = React.useState(false);
  const [d, setD] = React.useState({
    nombre: "", apellido: "", telefono: "", email: "", password: "",
    establecimiento: "", tipo: "Bar / Cafetería", direccion: ""
  });
  const set = (k) => (e) => setD({ ...d, [k]: e.target.value });
  const pwd = d.password || "";
  const rules = {
    len: pwd.length >= 8,
    letter: /[a-zA-Záéíóúñ]/.test(pwd),
    numSym: /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)
  };
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email || "");
  const step1Valid = emailValid;
  const step2Valid = d.nombre && rules.len && rules.letter && rules.numSym;
  const step3Valid = d.establecimiento && d.direccion;

  const Eye = ({ open }) => open ?
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.86 19.86 0 0 1 4.24-5.94M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.86 19.86 0 0 1-3.17 4.42M1 1l22 22M9.88 9.88a3 3 0 1 0 4.24 4.24" /></svg> :
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>;

  const Check = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17 19 7" /></svg>;

  return (
    <div className="auth-page">
      <header className="auth-page__nav">
        <a className="auth-page__brand" href="#" onClick={(e) => {e.preventDefault(); if (window.__goHome) window.__goHome(); else if (onClose) onClose();}} aria-label="guía repsol — Hacemos cocina">
          <img src="assets/logo-hacemos-cocina.svg" alt="guía repsol | Hacemos cocina" />
        </a>
        <button className="auth-page__close" aria-label="Cerrar" onClick={onClose}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>
      </header>

      <div className="auth-page__main">
        <div className="auth-page__form">
          {(step === 2 || step === 3) &&
          <div className="auth-page__steps">
            <div className={"auth-step " + (step >= 1 ? "is-active" : "")}>
              <span className="auth-step__num">1</span><span className="auth-step__label">Empieza</span>
            </div>
            <span className="auth-step__sep"></span>
            <div className={"auth-step " + (step >= 2 ? "is-active" : "")}>
              <span className="auth-step__num">2</span><span className="auth-step__label">Tus datos</span>
            </div>
            <span className="auth-step__sep"></span>
            <div className={"auth-step " + (step >= 3 ? "is-active" : "")}>
              <span className="auth-step__num">3</span><span className="auth-step__label">Tu establecimiento</span>
            </div>
          </div>
          }

          {step === "login-email" &&
          <div className="auth-page__body">
            <h1 className="auth-page__title">Inicia sesión</h1>
            <div className="auth-social">
              <button className="auth-social__btn" type="button"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.5c0-2.85 2.32-4.21 2.42-4.27-1.32-1.93-3.38-2.19-4.11-2.22-1.75-.18-3.41 1.03-4.3 1.03-.9 0-2.26-1.01-3.71-.98-1.91.03-3.67 1.11-4.65 2.82-1.98 3.43-.51 8.5 1.42 11.3.94 1.36 2.07 2.89 3.55 2.83 1.43-.06 1.97-.92 3.7-.92s2.21.92 3.72.89c1.54-.03 2.51-1.39 3.45-2.75 1.08-1.58 1.53-3.12 1.55-3.2-.03-.02-2.98-1.14-3.04-4.53zm-2.83-8.32c.78-.95 1.31-2.27 1.17-3.58-1.13.05-2.5.75-3.31 1.69-.72.83-1.36 2.18-1.19 3.46 1.26.1 2.55-.64 3.33-1.57z" /></svg>Apple</button>
              <button className="auth-social__btn" type="button"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.2-1 2.3-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6C4.7 19.7 8.1 22 12 22z" /><path fill="#FBBC04" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1c-.7 1.4-1.1 3-1.1 4.6 0 1.6.4 3.2 1.1 4.6L6.4 14z" /><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 3 14.7 2 12 2 8.1 2 4.7 4.3 3.1 7.4L6.4 10c.8-2.4 3-4.1 5.6-4.1z" /></svg>Google</button>
              <button className="auth-social__btn" type="button"><svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9V15.5H7.1V12h3v-2.6c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z" /></svg>Facebook</button>
            </div>
            <div className="auth-divider"><span>o con tu correo</span></div>
            <div className="auth-grid">
              <div className="field field--float field--full"><input id="f-email-login" type="email" placeholder=" " value={d.email} onChange={set("email")} /><label htmlFor="f-email-login">Correo electrónico*</label></div>
            </div>
            <p className="auth-terms">Al continuar, aceptas las <a href="#">Condiciones del servicio</a> del Servicio Online de Guía Repsol y confirmas que has leído la <a href="#">Política de privacidad</a>.</p>
            <div className="auth-actions">
              <button className="btn btn--primary" onClick={() => setStep("login-pass")}>Continuar <Icon name="arrow" size={16} /></button>
            </div>
          </div>
          }

          {step === "login-pass" &&
          <div className="auth-page__body">
            <h1 className="auth-page__title">Ya estás dentro de Guía Repsol Hacemos Cocina</h1>
            <p className="auth-page__lede">Introduce tu contraseña para acceder con <strong>{d.email}</strong>.</p>
            <div className="auth-grid">
              <div className="field field--float field--full field--pwd">
                <input id="f-loginpass" type={showLoginPwd ? "text" : "password"} placeholder=" " value={d.password} onChange={(e) => { setLoginError(false); set("password")(e); }} />
                <label htmlFor="f-loginpass">Contraseña</label>
                <button type="button" className="field__eye" aria-label={showLoginPwd ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={() => setShowLoginPwd(!showLoginPwd)}>
                  <Eye open={showLoginPwd} />
                </button>
              </div>
              {loginError && <p className="auth-error">La contraseña no es correcta. Inténtalo de nuevo.</p>}
              <a href="#" className="auth-forgot">¿Has olvidado tu contraseña?</a>
            </div>
            <div className="auth-actions">
              <button className="btn btn--ghost" onClick={() => setStep("login-email")}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M11 18l-6-6 6-6" /></svg> Atrás</button>
              <button className="btn btn--primary" onClick={() => {
                onComplete({ ...d, nombre: d.nombre || "Ane", apellido: d.apellido || "G." });
              }}>Entrar <Icon name="arrow" size={16} /></button>
            </div>
          </div>
          }

          {step === 1 &&
          <div className="auth-page__body">
            <h1 className="auth-page__title">Entra o crea tu cuenta</h1>
            <div className="auth-social">
              <button className="auth-social__btn" type="button"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.5c0-2.85 2.32-4.21 2.42-4.27-1.32-1.93-3.38-2.19-4.11-2.22-1.75-.18-3.41 1.03-4.3 1.03-.9 0-2.26-1.01-3.71-.98-1.91.03-3.67 1.11-4.65 2.82-1.98 3.43-.51 8.5 1.42 11.3.94 1.36 2.07 2.89 3.55 2.83 1.43-.06 1.97-.92 3.7-.92s2.21.92 3.72.89c1.54-.03 2.51-1.39 3.45-2.75 1.08-1.58 1.53-3.12 1.55-3.2-.03-.02-2.98-1.14-3.04-4.53zm-2.83-8.32c.78-.95 1.31-2.27 1.17-3.58-1.13.05-2.5.75-3.31 1.69-.72.83-1.36 2.18-1.19 3.46 1.26.1 2.55-.64 3.33-1.57z" /></svg>Apple</button>
              <button className="auth-social__btn" type="button"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.2-1 2.3-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6C4.7 19.7 8.1 22 12 22z" /><path fill="#FBBC04" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1c-.7 1.4-1.1 3-1.1 4.6 0 1.6.4 3.2 1.1 4.6L6.4 14z" /><path fill="#EA4335" d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 3 14.7 2 12 2 8.1 2 4.7 4.3 3.1 7.4L6.4 10c.8-2.4 3-4.1 5.6-4.1z" /></svg>Google</button>
              <button className="auth-social__btn" type="button"><svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9V15.5H7.1V12h3v-2.6c0-3 1.8-4.6 4.5-4.6 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z" /></svg>Facebook</button>
            </div>
            <div className="auth-divider"><span>o con tu correo</span></div>
            <div className="auth-grid">
              <div className="field field--float field--full"><input id="f-email" type="email" placeholder=" " value={d.email} onChange={set("email")} /><label htmlFor="f-email">Correo electrónico*</label></div>
            </div>
            <p className="auth-terms">Al continuar, aceptas las <a href="#">Condiciones del servicio</a> del Servicio Online de Guía Repsol y confirmas que has leído la <a href="#">Política de privacidad</a>.</p>
            <div className="auth-actions">
              <button className="btn btn--primary" onClick={() => setStep(2)}>Continuar <Icon name="arrow" size={16} /></button>
            </div>
          </div>
          }

          {step === 2 &&
          <div className="auth-page__body">
            <h1 className="auth-page__title">Cuéntanos quién eres</h1>
            <p className="auth-page__lede">Un paso más y ya estás dentro <strong>{d.email}</strong>.</p>
            <div className="auth-grid">
              <div className="field field--float field--full"><input id="f-nombre" type="text" placeholder=" " value={d.nombre} onChange={set("nombre")} /><label htmlFor="f-nombre">Nombre</label></div>
              <div className="field field--float field--full"><input id="f-tel" type="tel" placeholder=" " value={d.telefono} onChange={set("telefono")} /><label htmlFor="f-tel">Teléfono móvil</label></div>
              <div className="field field--float field--full field--pwd">
                <input id="f-pass" type={showPwd ? "text" : "password"} placeholder=" " value={d.password} onChange={set("password")} />
                <label htmlFor="f-pass">Contraseña</label>
                <button type="button" className="field__eye" aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"} onClick={() => setShowPwd(!showPwd)}>
                  <Eye open={showPwd} />
                </button>
              </div>
              <ul className="field-rules" aria-live="polite">
                <li className={rules.len ? "is-met" : ""}><Check />8 caracteres como mínimo</li>
                <li className={rules.letter ? "is-met" : ""}><Check />Una letra</li>
                <li className={rules.numSym ? "is-met" : ""}><Check />Un número o símbolo</li>
              </ul>
            </div>
            <label className="auth-checkbox">
              <input type="checkbox" />
              <span className="auth-checkbox__mark" aria-hidden="true"></span>
              <span className="auth-checkbox__text">Quiero beneficiarme de descuentos, ofertas y ventajas exclusivas, por lo que acepto todos los tratamientos siguientes (esta marca acepta todos los tratamientos).</span>
            </label>
            <p className="auth-terms">Al continuar, aceptas las <a href="#">Condiciones del servicio</a> del Servicio Online de Guía Repsol.</p>
            <div className="auth-actions">
              <button className="btn btn--ghost" onClick={() => setStep(1)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M11 18l-6-6 6-6" /></svg> Atrás</button>
              <button className="btn btn--primary" onClick={() => setStep(3)}>Siguiente <Icon name="arrow" size={16} /></button>
            </div>
          </div>
          }

          {step === 3 &&
          <div className="auth-page__body">
            <h1 className="auth-page__title">Añade tu establecimiento</h1>
            <p className="auth-page__lede">Pon tu negocio en el radar.</p>
            <div className="auth-grid auth-grid--two">
              <div className="field field--float field--full"><input id="f-estab" type="text" placeholder=" " value={d.establecimiento} onChange={set("establecimiento")} /><label htmlFor="f-estab">Nombre del establecimiento</label></div>
              <div className="field field--float"><input id="f-cif" type="text" placeholder=" " value={d.cif || ""} onChange={set("cif")} /><label htmlFor="f-cif">CIF</label></div>
              <div className="field field--float field--full"><input id="f-dir" type="text" placeholder=" " value={d.direccion} onChange={set("direccion")} /><label htmlFor="f-dir">Dirección</label></div>
              <div className="field field--float"><input id="f-cp" type="text" inputMode="numeric" placeholder=" " value={d.cp || ""} onChange={set("cp")} /><label htmlFor="f-cp">Código postal</label></div>
              <div className="field field--float"><input id="f-mun" type="text" placeholder=" " value={d.municipio || ""} onChange={set("municipio")} /><label htmlFor="f-mun">Municipio y provincia</label></div>
              <div className="field field--float field--full">
                <select id="f-ccaa" className={d.ccaa ? "is-filled" : ""} value={d.ccaa || ""} onChange={set("ccaa")}>
                  <option value="" disabled hidden></option>
                  {["Andalucía","Aragón","Asturias","Baleares","Canarias","Cantabria","Castilla-La Mancha","Castilla y León","Cataluña","Ceuta","Comunidad Valenciana","Extremadura","Galicia","La Rioja","Madrid","Melilla","Murcia","Navarra","País Vasco"].map((c) =>
                  <option key={c} value={c}>{c}</option>
                  )}
                </select>
                <label htmlFor="f-ccaa">Comunidad Autónoma</label>
              </div>
              <div className="field field--float field--full">
                <select id="f-cargo" className={d.cargo ? "is-filled" : ""} value={d.cargo || ""} onChange={set("cargo")}>
                  <option value="" disabled hidden></option>
                  {["Administración","Agencia comunicación","Asesor gastronómico","Director de sala","Gerente","Jefe/a de cocina","Pastelero/a","Propietario/a","Sumiller"].map((c) =>
                  <option key={c} value={c}>{c}</option>
                  )}
                </select>
                <label htmlFor="f-cargo">Función</label>
              </div>
              <div className="field field--full field--gestor">
                <span className="field-label">¿Eres el gestor del establecimiento?</span>
                <div className="auth-radio-row">
                  {["Sí", "No"].map((opt) =>
                  <label key={opt} className={"auth-radio " + (d.gestor === opt ? "is-active" : "")}>
                    <input type="radio" name="gestor" value={opt} checked={d.gestor === opt} onChange={() => setD({ ...d, gestor: opt })} />
                    <span className="auth-radio__mark" aria-hidden="true"></span>
                    <span className="auth-radio__label">{opt}</span>
                  </label>
                  )}
                </div>
              </div>
            </div>
            <div className="auth-actions">
              <button className="btn btn--ghost" onClick={() => setStep(2)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M11 18l-6-6 6-6" /></svg> Atrás</button>
              <button className="btn btn--primary" onClick={() => onComplete(d)}>Crear cuenta <Icon name="arrow" size={16} /></button>
            </div>
          </div>
          }
        </div>
        <aside className="auth-page__aside" aria-label="Sobre Hacemos cocina">
          <div className="auth-aside__inner">
            <span className="auth-aside__overline">Hacemos cocina</span>
            <h2 className="auth-aside__title">Tu día a día, tu Guía Repsol</h2>
            <p className="auth-aside__lede">El lugar donde conectas con otros hosteleros, compartes experiencias y resuelves tu día a día con las herramientas que necesitas.

            </p>
            <ul className="auth-aside__list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17 19 7" /></svg>
                <span>Gestiona tu ficha y las reseñas que dejan tus clientes.</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17 19 7" /></svg>
                <span>Participa en encuentros y aprende con nuestro podcast.</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17 19 7" /></svg>
                <span>Accede a herramientas prácticas que facilitan tu trabajo.</span>
              </li>
            </ul>
            <div className="auth-aside__stats">
              <div><strong>+1.000</strong><span>Hosteleros activos</span></div>
              <div><strong>+1.200</strong><span>Localidades</span></div>
              <div><strong>+25</strong><span>Eventos al año</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>);};

window.RegistrationModal = RegistrationModal;