// Reusable inline SVG icons. All 24x24, 1.5 stroke, currentColor.
const Icon = ({ name, size = 24 }) => {
  const s = size;
  const common = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "clock": return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
    case "pin": return (<svg {...common}><path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>);
    case "arrow": return (<svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrow-up-right": return (<svg {...common}><path d="M7 17 17 7M9 7h8v8"/></svg>);
    case "play": return (<svg {...common} fill="currentColor" stroke="none"><path d="M8 5v14l11-7-11-7Z"/></svg>);
    case "play-line": return (<svg {...common}><path d="M8 5v14l11-7-11-7Z"/></svg>);
    case "spotify": return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.7 14.4a.7.7 0 0 1-1 .2c-2.6-1.6-5.9-2-9.8-1.1a.7.7 0 1 1-.3-1.4c4.2-.9 7.9-.5 10.8 1.3.3.2.4.6.3 1Zm1.2-2.7a.9.9 0 0 1-1.2.3c-3-1.8-7.5-2.4-11-1.3a.9.9 0 1 1-.5-1.7c4-1.2 9-.6 12.4 1.5.4.3.5.8.3 1.2Zm.1-2.8c-3.5-2.1-9.4-2.3-12.8-1.3a1 1 0 1 1-.6-2c3.9-1.2 10.4-1 14.4 1.4a1 1 0 1 1-1 1.8Z"/>
      </svg>
    );
    case "globe": return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>);
    case "chart": return (<svg {...common}><path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3"/></svg>);
    case "sparkle": return (<svg {...common}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/></svg>);
    case "people": return (<svg {...common}><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c.6-3 3.2-5 6-5s5.4 2 6 5M14 19c.4-2 2-3.5 4-3.5s3.6 1.5 4 3.5"/></svg>);
    case "mic": return (<svg {...common}><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>);
    case "lock": return (<svg {...common}><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>);
    case "check": return (<svg {...common}><path d="M5 12.5 10 17 19 7"/></svg>);
    case "calendar": return (<svg {...common}><rect x="4" y="5" width="16" height="16" rx="2"/><path d="M4 9h16M9 3v4M15 3v4"/></svg>);
    case "monitor": return (<svg {...common}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>);
    case "dot": return (<svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"/></svg>);
    case "home": return (<svg {...common}><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9Z"/></svg>);
    case "image": return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="m3 17 6-4 5 4 7-5"/></svg>);
    case "qr": return (<svg {...common}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v3M14 21h3M21 17v4"/></svg>);
    case "coins": return (<svg {...common}><circle cx="9" cy="9" r="5"/><path d="M14 9a5 5 0 1 0-3.4 4.74M19 13a5 5 0 1 1-8.46 3.61"/></svg>);
    case "cap": return (<svg {...common}><path d="M2 9l10-5 10 5-10 5-10-5Z"/><path d="M6 11v5c0 1 3 3 6 3s6-2 6-3v-5M20 10v6"/></svg>);
    case "star": return (<svg {...common} fill="currentColor" stroke="none"><path d="m12 3 2.6 5.6 6 .7-4.5 4.2 1.2 6L12 16.7 6.7 19.5 8 13.5 3.4 9.3l6-.7L12 3Z"/></svg>);
    default: return null;
  }
};

window.Icon = Icon;
