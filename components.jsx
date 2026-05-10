/* Icon set — minimal stroke icons */
const Icon = ({ name, className = "", size = 24, stroke = 1.5 }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", className };
  const paths = {
    arrow:        <><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>,
    arrowSmall:   <><path d="M4 12h16"/><path d="m14 6 6 6-6 6"/></>,
    pin:          <><path d="M12 22s8-7.6 8-13a8 8 0 0 0-16 0c0 5.4 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></>,
    calendar:     <><rect x="3" y="5" width="18" height="16" rx="1"/><path d="M8 3v4M16 3v4M3 11h18"/></>,
    clock:        <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    shield:       <><path d="M12 22c5-2 8-6.5 8-12V5l-8-3-8 3v5c0 5.5 3 10 8 12Z"/><path d="m9 12 2 2 4-4"/></>,
    flame:        <><path d="M12 22c4 0 7-3 7-7 0-4-4-6-4-10 0 0-3 1-5 5-2-2-3-3-3-3-1 3-2 5-2 8 0 4 3 7 7 7Z"/></>,
    family:       <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-3.5 3-6 6-6s6 2.5 6 6"/><path d="M15 20c0-2.5 2-4 4-4s2 1 2 1"/></>,
    book:         <><path d="M4 4h11a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z"/><path d="M4 16a4 4 0 0 1 4-4h11"/></>,
    chart:        <><path d="M3 21h18"/><path d="M5 21V10"/><path d="M11 21V5"/><path d="M17 21v-7"/></>,
    star:         <><path d="m12 2 3 6.5 7 1-5 5 1.2 7L12 18l-6.2 3.5L7 14.5l-5-5 7-1Z"/></>,
    flag:         <><path d="M4 22V4"/><path d="M4 5s2-2 6-2 6 2 10 2v10c-4 0-6-2-10-2s-6 2-6 2"/></>,
    cross:        <><path d="M12 3v18"/><path d="M3 12h18"/></>,
    menu:         <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close:        <><path d="m6 6 12 12"/><path d="M6 18 18 6"/></>,
    sparkle:      <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></>,
    instagram:    <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>,
    youtube:      <><rect x="2" y="5" width="20" height="14" rx="3"/><path d="m10 9 5 3-5 3V9Z" fill="currentColor"/></>,
    whatsapp:     <><path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.3-4.3A9 9 0 1 1 21 12Z"/><path d="M9 9c0 4 3 6 6 7l1.5-2.2-2.2-1L13 14a4 4 0 0 1-3-3l1.2-1.3-1-2.2L8 9Z"/></>,
    x:            <><path d="m4 4 16 16"/><path d="M20 4 4 20"/></>,
    tiktok:       <><path d="M14 4v9a4 4 0 1 1-4-4"/><path d="M14 4c0 2.5 2 4.5 5 4.5"/></>,
    soldier:      <><circle cx="12" cy="8" r="3"/><path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><path d="M9 5h6"/></>,
    heart:        <><path d="M12 21s-7-4.5-9-9.5C2 8 4 5 7 5c2 0 3.5 1.5 5 4 1.5-2.5 3-4 5-4 3 0 5 3 4 6.5-2 5-9 9.5-9 9.5Z"/></>,
    handshake:    <><path d="m11 17 2 2 5-5 3 3"/><path d="M21 14V8l-4-4h-4l-3 3"/><path d="M3 10v5l3 3 5-5-3-3"/><path d="m6 7 4-3"/></>,
  };
  return <svg {...props}>{paths[name] || null}</svg>;
};

/* Logo mark — Cross + star + chevrons (military / faith-coded) */
const LogoMark = ({ size = 38 }) => (
  <svg width={size} height={size * 1.16} viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d4a96b"/>
        <stop offset="100%" stopColor="#b8935a"/>
      </linearGradient>
    </defs>
    {/* Shield outline */}
    <path d="M19 1 3 6v15c0 11 16 21 16 21s16-10 16-21V6L19 1Z" stroke="url(#logoGold)" strokeWidth="1.2" fill="rgba(184,147,90,0.06)"/>
    {/* Inner ring */}
    <path d="M19 5 7 9v12c0 8 12 16 12 16s12-8 12-16V9L19 5Z" stroke="rgba(184,147,90,0.45)" strokeWidth="0.8" fill="none"/>
    {/* Star center */}
    <path d="m19 14 1.6 3.4 3.7.5-2.7 2.6.7 3.7L19 22.5l-3.3 1.7.7-3.7-2.7-2.6 3.7-.5L19 14Z" fill="url(#logoGold)"/>
    {/* Top chevron */}
    <path d="M14 11h10" stroke="#d4a96b" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M16 9h6" stroke="#d4a96b" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);

/* Hero portrait silhouette placeholder (visible if user doesn't drop image) */
const PortraitPlaceholder = () => (
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55 }}>
    <defs>
      <linearGradient id="silGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a2438"/>
        <stop offset="100%" stopColor="#0a0c12"/>
      </linearGradient>
      <radialGradient id="rim" cx="0.7" cy="0.3" r="0.6">
        <stop offset="0%" stopColor="rgba(184,147,90,0.4)"/>
        <stop offset="100%" stopColor="transparent"/>
      </radialGradient>
    </defs>
    <rect width="400" height="500" fill="url(#silGrad)"/>
    <rect width="400" height="500" fill="url(#rim)"/>
    {/* Shoulders + head silhouette */}
    <path d="M0 500 V380 C40 340 100 320 130 290 C140 280 145 270 148 258 C152 240 155 220 158 215 C158 210 145 195 142 175 C135 165 130 145 135 120 C140 90 165 70 200 70 C235 70 260 90 265 120 C270 145 265 165 258 175 C255 195 242 210 242 215 C245 220 248 240 252 258 C255 270 260 280 270 290 C300 320 360 340 400 380 V500 Z" fill="#06080d"/>
    {/* Subtle rim light on right shoulder */}
    <path d="M270 290 C300 320 360 340 400 380 V500 H320 C300 460 290 420 280 380 C275 350 272 320 270 290 Z" fill="rgba(184,147,90,0.06)"/>
  </svg>
);

/* Brazil + SP outline (decorative) */
const BrazilGlyph = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 30c-15 5-30 15-40 30-15 25-25 60-15 90 5 15 20 30 40 35 25 8 60 5 85-5 25-12 50-35 55-65 5-25-5-55-25-70-25-20-65-25-100-15Z"
          stroke="rgba(184,147,90,0.2)" strokeWidth="0.8" fill="rgba(184,147,90,0.03)"/>
    {/* SP marker */}
    <circle cx="105" cy="105" r="5" fill="#d4a96b"/>
    <circle cx="105" cy="105" r="14" stroke="rgba(212,169,107,0.3)" strokeWidth="0.6" fill="none"/>
    <circle cx="105" cy="105" r="26" stroke="rgba(212,169,107,0.15)" strokeWidth="0.6" fill="none"/>
  </svg>
);

/* Pillar (compromisso) icons */
const PillarIcon = ({ name, size = 36 }) => {
  const map = {
    seguranca: <><path d="M18 33c8-3 12-10 12-19V8L18 4 6 8v6c0 9 4 16 12 19Z" stroke="currentColor" strokeWidth="1.4" fill="rgba(184,147,90,0.06)"/>
      <path d="m13 18 4 4 7-8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
    familia: <><circle cx="13" cy="14" r="4" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="24" cy="16" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5 30c0-5 4-8 8-8s8 3 8 8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M21 30c0-3 2-5 4-5s2 1 2 1" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/></>,
    educacao: <><path d="M6 12 18 6l12 6-12 6L6 12Z" stroke="currentColor" strokeWidth="1.4" fill="rgba(184,147,90,0.06)" strokeLinejoin="round"/>
      <path d="M11 15v8c0 2 4 5 7 5s7-3 7-5v-8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M30 12v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></>,
    economia: <><path d="M5 30h26M9 30V18M17 30V10M25 30v-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="9" cy="15" r="1.6" fill="currentColor"/>
      <circle cx="17" cy="7" r="1.6" fill="currentColor"/>
      <circle cx="25" cy="19" r="1.6" fill="currentColor"/></>,
    fe: <><path d="M18 4v28M10 12h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      {map[name]}
    </svg>
  );
};

/* Reveal hook — IntersectionObserver */
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

/* Scroll-position hook for nav state */
const useScrolled = (threshold = 40) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
};

Object.assign(window, { Icon, LogoMark, PortraitPlaceholder, BrazilGlyph, PillarIcon, useReveal, useScrolled });
