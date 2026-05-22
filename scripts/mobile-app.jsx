/* global React, Hero, Eventos, Podcasts, Pildoras, Herramientas, Embajadores, Articulos, RegistrationModal, PrivateArea, Icon */

/* ============================================================
   useCarouselDots — finds matching grids on every render,
   appends a .m-dots row after them, and wires scroll listeners.
   ============================================================ */
const useCarouselDots = (selector) => {
  React.useEffect(() => {
    const grids = Array.from(document.querySelectorAll(selector));
    const cleanups = [];

    grids.forEach((grid) => {
      if (grid.dataset.mDotsBound) return;
      grid.dataset.mDotsBound = '1';

      const items = Array.from(grid.children).filter(
        (c) => !c.classList.contains('m-dots')
      );
      const count = items.length;
      if (count < 2) return;

      const dotsEl = document.createElement('div');
      dotsEl.className = 'm-dots';
      grid.parentNode.insertBefore(dotsEl, grid.nextSibling);

      const render = (a) => {
        dotsEl.innerHTML = '';
        for (let i = 0; i < count; i++) {
          const d = document.createElement('span');
          d.className = 'm-dot' + (i === a ? ' is-active' : '');
          dotsEl.appendChild(d);
        }
      };

      const update = () => {
        const cardW = grid.scrollWidth / count;
        const a = Math.min(
          count - 1,
          Math.max(0, Math.round(grid.scrollLeft / cardW))
        );
        render(a);
      };

      render(0);
      grid.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);

      cleanups.push(() => {
        grid.removeEventListener('scroll', update);
        window.removeEventListener('resize', update);
        delete grid.dataset.mDotsBound;
        if (dotsEl.parentNode) dotsEl.parentNode.removeChild(dotsEl);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  });
};

/* ============================================================
   MOBILE HEADER
   ============================================================ */
const MobileHeader = ({ user, onMenu, onLogo, onProfile }) => (
  <header className="m-header">
    <a className="m-header__logo" href="#" onClick={(e) => { e.preventDefault(); onLogo && onLogo(); }} aria-label="Hacemos cocina">
      <img src="assets/logo-hacemos-cocina.svg" alt="guía repsol | Hacemos cocina" />
    </a>
    <div className="m-header__actions">
      <button type="button" className="m-icon-btn" aria-label="Buscar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
        </svg>
      </button>
      {user && (
        <button type="button" className="m-pill-avatar" onClick={() => { window.__goPrivate && window.__goPrivate(); }} aria-label="Ir a tu área privada">
          <img src="assets/user-avatar.png" alt="" />
        </button>
      )}
      {onMenu && (
        <button type="button" className="m-icon-btn" onClick={onMenu} aria-label="Menú">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      )}
    </div>
  </header>
);

/* ============================================================
   DRAWER
   ============================================================ */
const MobileDrawer = ({ onClose, onRegister }) => {
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);
  const links = ['Encuentros', 'Podcast', 'Herramientas', 'Artículos'];
  return (
    <React.Fragment>
      <div className="m-drawer-backdrop" onClick={onClose}></div>
      <aside className="m-drawer" role="dialog" aria-label="Menú">
        <div className="m-drawer__head">
          <img src="assets/logo-hacemos-cocina-negativo.svg" alt="" />
          <button type="button" className="m-drawer__close" onClick={onClose} aria-label="Cerrar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <nav className="m-drawer__nav">
          {links.map((l) => (
            <a key={l} href="#" className="m-drawer__link" onClick={(e) => { e.preventDefault(); onClose(); }}>
              {l}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </a>
          ))}
        </nav>
        <div className="m-drawer__cta">
          <button type="button" className="btn btn--primary" onClick={() => { onClose(); onRegister(); }}>
            Regístrate gratis
          </button>
          <button type="button" className="btn btn--outline" onClick={() => { onClose(); onRegister(); }}>
            Inicia sesión
          </button>
        </div>
      </aside>
    </React.Fragment>
  );
};

/* ============================================================
   FOOTER CTA (mobile-only banner)
   ============================================================ */
const MobileFooterCta = ({ onCreate }) => (
  <section className="m-footer-cta">
    <div className="m-footer-cta__art">
      <img src="assets/footer-cta-cocineros.jpg" alt="" />
    </div>
    <h2 className="m-footer-cta__title">Tu cocina, tu negocio, tu casa</h2>
    <p className="m-footer-cta__lede">El espacio donde nos encontramos. Hacemos cocina de Guía Repsol.</p>
    <button type="button" className="btn btn--primary m-footer-cta__btn" onClick={onCreate}>
      Crear cuenta
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  </section>
);

/* ============================================================
   FOOTER (accordion)
   ============================================================ */
const MOBILE_FOOTER_GROUPS = [
  { id: 'plat', title: 'Plataforma', items: ['Eventos', 'Podcast', 'Formación', 'Herramientas', 'Artículos'] },
  { id: 'gr',   title: 'Guía Repsol', items: ['Restaurantes Soles', 'Soletes', 'Sol Sostenible', 'Recetas'] },
  { id: 'help', title: 'Ayuda',      items: ['Contacto', 'Preguntas frecuentes', 'Para profesionales'] },
  { id: 'leg',  title: 'Legal',      items: ['Política de privacidad', 'Política de cookies', 'Nota legal', 'Condiciones del servicio'] }
];

const MobileFooter = () => {
  const [open, setOpen] = React.useState(null);
  return (
    <footer className="m-footer">
      <a className="m-footer__logo" href="#" aria-label="Hacemos cocina">
        <img src="assets/logo-hacemos-cocina-negativo.svg" alt="guía repsol | Hacemos cocina" />
      </a>
      <p className="m-footer__desc">
        El espacio de todos los hosteleros. Hablamos como tú, desde el gremio, sin formalismos y sin rodeos.
      </p>
      <div className="m-footer__acc">
        {MOBILE_FOOTER_GROUPS.map((g) => (
          <div key={g.id} className={'m-footer__group' + (open === g.id ? ' is-open' : '')}>
            <button type="button" className="m-footer__group-head" onClick={() => setOpen(open === g.id ? null : g.id)}>
              {g.title}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul className="m-footer__group-list">
              {g.items.map((it) => (
                <li key={it}><a href="#">{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="m-footer__bottom">
        <span>© Repsol S.A. 2000 — 2026</span>
      </div>
    </footer>
  );
};

/* ============================================================
   FAB (chat) for home-logueada
   ============================================================ */
const MobileFab = ({ onClick }) => (
  <button type="button" className="m-fab" aria-label="Pregunta a Guía Repsol" onClick={onClick}>
    <img src="assets/chat-voice.svg" alt="" aria-hidden="true" />
    <span className="m-fab__badge" aria-hidden="true">
      <img src="assets/ai-sparkle.svg" alt="" />
    </span>
  </button>
);

/* ============================================================
   MOBILE HOME
   ============================================================ */
const MobileHome = ({ onRegister, onLogin, onChat, showFab }) => {
  // intercept hero CTA clicks via delegation
  const heroRef = React.useRef(null);
  React.useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onClick = (e) => {
      const link = e.target.closest && e.target.closest('a.btn, button.btn');
      if (!link) return;
      const t = (link.textContent || '').trim();
      if (/Inicia sesión/i.test(t)) {
        e.preventDefault();
        onLogin();
      } else if (/Regístrate/i.test(t)) {
        e.preventDefault();
        onRegister();
      }
    };
    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, [onRegister, onLogin]);

  // attach dots to all the carousels
  useCarouselDots('.m-app .eventos__grid, .m-app .articulos__grid, .m-app .embajadores__grid, .m-app .pildoras__carousel');

  // Inject "Ver todos" button at the end of each section that has a section__see-all
  React.useEffect(() => {
    const sections = document.querySelectorAll('.m-app .section');
    const added = [];
    sections.forEach((sec) => {
      const orig = sec.querySelector('.section__see-all');
      if (!orig) return;
      const wrap = sec.querySelector('.wrap');
      if (!wrap || wrap.querySelector(':scope > .m-see-all')) return;
      const label = (orig.textContent || 'Ver todos').replace(/\s+/g, ' ').trim();
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'm-see-all';
      btn.textContent = label;
      wrap.appendChild(btn);
      added.push(btn);
    });
    return () => added.forEach((n) => n.remove());
  });

  return (
    <React.Fragment>
      <main>
        <div ref={heroRef}><Hero /></div>
        <Eventos />
        <Podcasts />
        <Pildoras />
        <Herramientas />
        <Embajadores />
        <Articulos />
        <MobileFooterCta onCreate={onRegister} />
      </main>
      <MobileFooter />
      {showFab && <MobileFab onClick={onChat} />}
    </React.Fragment>
  );
};

/* ============================================================
   MOBILE AUTH — wraps RegistrationModal
   ============================================================ */
const MobileAuth = ({ onClose, onComplete, authMode = 'register', initialEmail = '', initialName = '' }) => (
  <RegistrationModal initialMode={authMode} initialEmail={initialEmail} initialName={initialName} onClose={onClose} onComplete={onComplete} />
);

/* ============================================================
   MOBILE PRIVATE — wraps PrivateArea and appends footnav block
   ============================================================ */
const MobilePrivate = ({ user, onLogout, onGoHome }) => {
  // Use a React portal so the footnav lives inside .pa-content but React
  // still owns the node — otherwise unmount throws a removeChild error.
  const [paContent, setPaContent] = React.useState(null);
  React.useEffect(() => {
    const find = () => {
      const el = document.querySelector('.m-app .pa-content');
      if (el) { setPaContent(el); return true; }
      return false;
    };
    if (!find()) {
      const id = setInterval(() => { if (find()) clearInterval(id); }, 50);
      return () => clearInterval(id);
    }
  }, []);

  // Intercept clicks on the desktop Nav logo (inside PrivateArea) to go home
  React.useEffect(() => {
    const onClick = (e) => {
      const brand = e.target.closest && e.target.closest('.m-app .nav__brand');
      if (brand) {
        e.preventDefault();
        onGoHome();
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [onGoHome]);

  const footnav = (
    <div className="m-pa-footnav" role="navigation" aria-label="Acciones de cuenta">
      <button type="button" className="m-pa-footnav__item" onClick={(e) => { e.preventDefault(); window.__editProfile && window.__editProfile(); }}>
        <span>Editar perfil</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
      <button type="button" className="m-pa-footnav__item" onClick={(e) => { e.preventDefault(); window.__viewEstablishments && window.__viewEstablishments(); }}>
        <span>Ver datos de los establecimientos</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
      <button type="button" className="m-pa-footnav__item m-pa-footnav__item--danger" onClick={onLogout}>
        <span>Cerrar sesión</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 17l5-5-5-5M20 12H9M12 19v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
        </svg>
      </button>
    </div>
  );

  return (
    <React.Fragment>
      <PrivateArea user={user} onLogout={onLogout} />
      {paContent && ReactDOM.createPortal(footnav, paContent)}
    </React.Fragment>
  );
};

/* ============================================================
   MOBILE APP ROOT
   ============================================================ */
const MobileApp = () => {
  const [view, setView] = React.useState('home');
  const [authMode, setAuthMode] = React.useState('register'); // 'register' | 'login'
  const [user, setUser] = React.useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [showWelcome, setShowWelcome] = React.useState(false);
  const [eventoData, setEventoData] = React.useState(null);
  const [chatRegData, setChatRegData] = React.useState(null);

  React.useEffect(() => {
    window.__openRegister = () => { setAuthMode('register'); setView('auth'); };
    window.__openLogin = () => { setAuthMode('login'); setView('auth'); };
    window.__goHome = () => { setView('home'); window.scrollTo(0, 0); };
    window.__goPrivate = () => { setView('private'); window.scrollTo(0, 0); };
    window.__viewEstablishments = () => { setView('establishments'); window.scrollTo(0, 0); };
    window.__editProfile = () => { setView('edit-profile'); window.scrollTo(0, 0); };
    window.__openFandit = () => { setView('fandit'); window.scrollTo(0, 0); };
    window.__openEvento = (ev) => { setEventoData(ev || null); setView('evento'); window.scrollTo(0, 0); };
    window.__openVerifyFromChat = (info) => { setChatRegData(info || {}); setAuthMode('verify'); setView('auth'); };
    return () => {
      delete window.__openRegister; delete window.__openLogin;
      delete window.__goHome; delete window.__goPrivate;
      delete window.__viewEstablishments; delete window.__editProfile;
      delete window.__openFandit;
      delete window.__openEvento;
      delete window.__openVerifyFromChat;
    };
  }, []);

  // Notify parent (device frame) when a chat overlay is present in the DOM,
  // so it can recolor the iOS status bar to match.
  React.useEffect(() => {
    const post = (color) => {
      try { window.parent.postMessage({ type: 'm-status-bg', color }, '*'); } catch (e) {}
    };
    const sync = () => {
      const present = !!document.querySelector('.chat-modal');
      post(present ? '#FCB300' : '#ffffff');
    };
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => { obs.disconnect(); post('#ffffff'); };
  }, []);

  // Esc closes overlays
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (chatOpen) setChatOpen(false);
      else if (drawer) setDrawer(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [chatOpen, drawer]);

  const handleComplete = (data) => {
    const { __welcome, ...userData } = data || {};
    setUser(userData);
    setChatRegData(null);
    setView('private');
    if (__welcome) setShowWelcome(true);
    window.scrollTo(0, 0);
  };

  const goHomeLogout = () => {
    setUser(null);
    setView('home');
    window.scrollTo(0, 0);
  };

  const goHomeKeepUser = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  const goPrivate = () => {
    if (!user) return;
    setView('private');
    window.scrollTo(0, 0);
  };

  // ---- Header config per view
  let header = null;
  if (view === 'home') {
    header = (
      <MobileHeader
        user={user}
        onMenu={() => setDrawer(true)}
        onLogo={user ? goHomeLogout : undefined}
        onProfile={goPrivate}
      />
    );
  } else if (view === 'private') {
    header = (
      <MobileHeader
        user={user}
        onMenu={() => setDrawer(true)}
        onLogo={goHomeKeepUser}
        onProfile={() => {}}
      />
    );
  } else if (view === 'establishments' || view === 'edit-profile') {
    header = (
      <MobileHeader
        user={user}
        onMenu={() => setDrawer(true)}
        onLogo={goHomeKeepUser}
        onProfile={() => { setView('private'); window.scrollTo(0, 0); }}
      />
    );
  } else if (view === 'evento' || view === 'fandit') {
    header = (
      <MobileHeader
        user={user}
        onMenu={() => setDrawer(true)}
        onLogo={goHomeKeepUser}
        onProfile={goPrivate}
      />
    );
  }

  return (
    <div className={'m-app' + (typeof window !== 'undefined' && /[?&]frame=ios/.test(window.location.search) ? ' m-app--framed' : '')}>
      {header}

      {view === 'home' && (
        <MobileHome
          onRegister={() => { setAuthMode('register'); setView('auth'); }}
          onLogin={() => { setAuthMode('login'); setView('auth'); }}
          onChat={() => setChatOpen(true)}
          showFab={true}
        />
      )}

      {chatOpen && view === 'home' && (
        <ChatModal
          user={user}
          onClose={() => setChatOpen(false)}
          onRegister={() => setView('auth')}
        />
      )}

      {view === 'auth' && (
        <MobileAuth
          authMode={authMode}
          initialEmail={(chatRegData && chatRegData.email) || ''}
          initialName={(chatRegData && chatRegData.nombre) || ''}
          onClose={() => { setChatRegData(null); setView(user ? 'private' : 'home'); }}
          onComplete={handleComplete}
        />
      )}

      {view === 'private' && user && (
        <MobilePrivate
          user={user}
          onLogout={goHomeLogout}
          onGoHome={goHomeKeepUser}
        />
      )}

      {view === 'establishments' && (
        <EstablishmentsPage
          embedded
          user={user || { nombre: 'Ane', apellido: 'G.' }}
          onBack={() => { setView('private'); window.scrollTo(0, 0); }}
        />
      )}

      {view === 'edit-profile' && (
        <EditProfilePage
          embedded
          user={user || { nombre: 'Ane', apellido: 'G.' }}
          onBack={() => { setView('private'); window.scrollTo(0, 0); }}
        />
      )}

      {view === 'fandit' && (
        <React.Fragment>
          <FanditPage onBack={() => { setView('home'); window.scrollTo(0, 0); }} />
          <MobileFooter />
        </React.Fragment>
      )}

      {view === 'evento' && (
        <React.Fragment>
          <EventoPage ev={eventoData} onBack={() => { setView('home'); window.scrollTo(0, 0); }} />
          <MobileFooter />
        </React.Fragment>
      )}

      {drawer && (
        <MobileDrawer
          onClose={() => setDrawer(false)}
          onRegister={() => setView('auth')}
        />
      )}

      {showWelcome && view === 'private' && (
        <WelcomeModal onClose={() => setShowWelcome(false)} />
      )}
    </div>
  );
};

Object.assign(window, {
  MobileApp,
  MobileHeader,
  MobileDrawer,
  MobileFooterCta,
  MobileFooter,
  MobileFab,
  MobileHome,
  MobileAuth,
  MobilePrivate,
  useCarouselDots
});
