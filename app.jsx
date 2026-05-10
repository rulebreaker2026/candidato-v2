/* ============================================
   APP — Capitão Rodrigo Silva
   ============================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "name": "RODRIGO SILVA",
  "rank": "Capitão",
  "number": "22.222",
  "party": "Brasil 22",
  "tagline": "Ordem nas ruas. Coragem na tribuna.",
  "manifesto": "23 anos defendendo São Paulo de farda. Agora, levo o mesmo compromisso para a Assembleia Legislativa — com fé, família e disciplina.",
  "accentMode": "gold",
  "showIntro": true
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  gold:   { gold: "#b8935a", gold2: "#d4a96b", line: "rgba(184,147,90,0.32)", soft: "rgba(184,147,90,0.15)" },
  blue:   { gold: "#3568b8", gold2: "#5a8de0", line: "rgba(90,141,224,0.32)", soft: "rgba(90,141,224,0.15)" },
  red:    { gold: "#a8443a", gold2: "#c4574a", line: "rgba(196,87,74,0.32)",  soft: "rgba(196,87,74,0.15)" },
  green:  { gold: "#3d7a4a", gold2: "#52a567", line: "rgba(82,165,103,0.32)", soft: "rgba(82,165,103,0.15)" },
};

const PILLARS = [
  { num: "01", icon: "seguranca", title: "Segurança Pública", desc: "Mais policiamento ostensivo, valorização da PM e leis duras contra a reincidência." },
  { num: "02", icon: "familia",   title: "Família & Valores",  desc: "Defesa intransigente da família, da liberdade religiosa e do direito dos pais." },
  { num: "03", icon: "educacao",  title: "Educação Cívica",    desc: "Disciplina, civismo e meritocracia nas escolas estaduais. Sem doutrinação." },
  { num: "04", icon: "economia",  title: "Trabalho & Renda",   desc: "Menos imposto, menos burocracia. Apoio ao pequeno comerciante e ao MEI paulista." },
  { num: "05", icon: "fe",        title: "Fé & Comunidade",    desc: "Respeito ao cidadão de bem, parceria com igrejas, ONGs e associações de bairro." },
];

const MISSIONS = [
  { num: "01", loc: "Capão Redondo",  region: "Zona Sul / SP",     quote: "Ouvir quem mora onde o poder público não chega.", img: "mission-1" },
  { num: "02", loc: "Cracolândia",    region: "Centro / SP",        quote: "Recuperar vidas exige firmeza e acolhimento.",     img: "mission-2" },
  { num: "03", loc: "Brasilândia",    region: "Zona Norte / SP",    quote: "A mãe que perde o filho não pede estatística — pede justiça.", img: "mission-3" },
  { num: "04", loc: "Itaquera",       region: "Zona Leste / SP",    quote: "Comerciante trabalha duro. Tem que ser respeitado.", img: "mission-4" },
  { num: "05", loc: "Vale do Ribeira",region: "Interior / SP",      quote: "O Estado não termina na Marginal Tietê.",            img: "mission-5" },
];

const TIMELINE = [
  { year: "2001",      title: "Ingresso na PMESP",       desc: "Aos 19 anos, ingressa na Polícia Militar do Estado de São Paulo. Primeira lotação: Batalhão de Choque.",        tags: ["PM-SP", "Choque"] },
  { year: "2008",      title: "ROTA — Sargento",         desc: "Selecionado para a Ronda Ostensiva Tobias de Aguiar. Mais de 200 ocorrências de alta complexidade.",            tags: ["ROTA", "Operações"] },
  { year: "2014",      title: "Curso de Oficiais",       desc: "Aprovado no CFO da Academia do Barro Branco. Forma-se entre os primeiros da turma.",                           tags: ["Academia", "Oficial"] },
  { year: "2019",      title: "Capitão — Vila Maria",    desc: "Comanda a 1ª Companhia. Reduz índice de roubos em 31% no perímetro do batalhão.",                              tags: ["Comando", "−31% roubos"] },
  { year: "2023",      title: "Reserva remunerada",      desc: "Após 22 anos de serviço, passa para a reserva. Inicia trabalho voluntário em projetos sociais da Zona Leste.", tags: ["Reserva", "Voluntariado"] },
  { year: "2026",      title: "Candidato — Dep. Estadual", desc: "Aceita o convite para se candidatar pelo PL. Compromisso assinado em cartório com o eleitor.",                tags: ["Candidatura", "PL"] },
];

const MONTHS = { Jan: "Janeiro", Fev: "Fevereiro", Mar: "Março", Abr: "Abril", Mai: "Maio", Jun: "Junho", Jul: "Julho", Ago: "Agosto", Set: "Setembro", Out: "Outubro", Nov: "Novembro", Dez: "Dezembro" };

const AGENDA = [
  { day: "14", month: "Mai", weekday: "Quarta", title: "Caminhada — Centro de SP",         sub: "Praça da Sé até a Catedral",          where: "Sé / São Paulo",        time: "08:00 — 11:00", region: "Capital" },
  { day: "17", month: "Mai", weekday: "Sábado", title: "Carreata Zona Leste",              sub: "Itaquera • São Mateus • Cidade Tiradentes", where: "Largo do Itaquera",    time: "13:00 — 18:00", region: "Zona Leste" },
  { day: "22", month: "Mai", weekday: "Quinta", title: "Encontro com lideranças",          sub: "Reunião com pastores e comerciantes",  where: "Igreja Batista, V. Maria", time: "19:30 — 22:00", region: "Zona Norte" },
  { day: "25", month: "Mai", weekday: "Domingo", title: "Café com a Família",              sub: "Encontro aberto ao público",          where: "Parque Vila Lobos",     time: "09:00 — 12:00", region: "Zona Oeste" },
  { day: "31", month: "Mai", weekday: "Sábado", title: "Vale do Ribeira — Interior",       sub: "Visita a Eldorado, Iporanga e Sete Barras", where: "Eldorado / SP",        time: "Dia inteiro",   region: "Interior" },
];

/* =========== APP =========== */

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [introDone, setIntroDone] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const scrolled = useScrolled();
  useReveal();

  React.useEffect(() => {
    if (!t.showIntro) {
      setIntroDone(true);
      return;
    }
    const tm = setTimeout(() => setIntroDone(true), 2600);
    return () => clearTimeout(tm);
  }, []);

  // Apply accent palette to CSS variables
  React.useEffect(() => {
    const p = ACCENT_PRESETS[t.accentMode] || ACCENT_PRESETS.gold;
    const root = document.documentElement;
    root.style.setProperty("--gold", p.gold);
    root.style.setProperty("--gold-2", p.gold2);
    root.style.setProperty("--gold-line", p.line);
    root.style.setProperty("--gold-soft", p.soft);
  }, [t.accentMode]);

  return (
    <>
      <Intro done={introDone} t={t} />
      <Nav scrolled={scrolled} t={t} onBurger={() => setNavOpen(true)} />
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} t={t} />

      <main>
        <Hero t={t} />
        <Pillars />
        <Missions />
        <Timeline />
        <Agenda />
        <FinalCTA t={t} />
      </main>

      <Footer t={t} />

      <TweaksPanel title="Tweaks" defaultOpen={false}>
        <TweakSection label="Identidade">
          <TweakText label="Nome" value={t.name} onChange={(v) => setTweak("name", v)} />
          <TweakText label="Patente" value={t.rank} onChange={(v) => setTweak("rank", v)} />
          <TweakText label="Número" value={t.number} onChange={(v) => setTweak("number", v)} />
          <TweakText label="Partido / nº" value={t.party} onChange={(v) => setTweak("party", v)} />
        </TweakSection>
        <TweakSection label="Mensagem">
          <TweakText label="Slogan" value={t.tagline} onChange={(v) => setTweak("tagline", v)} />
          <TweakText label="Manifesto" value={t.manifesto} onChange={(v) => setTweak("manifesto", v)} />
        </TweakSection>
        <TweakSection label="Visual">
          <TweakRadio
            label="Cor"
            value={t.accentMode}
            onChange={(v) => setTweak("accentMode", v)}
            options={[
              { value: "gold",  label: "Ouro" },
              { value: "blue",  label: "Azul" },
              { value: "red",   label: "Vermelho" },
              { value: "green", label: "Verde" },
            ]}
          />
          <TweakToggle label="Intro animada" value={t.showIntro} onChange={(v) => setTweak("showIntro", v)} />
          <TweakButton label="Reproduzir intro" onClick={() => { setIntroDone(false); setTimeout(() => setIntroDone(true), 2600); }} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

/* =========== INTRO =========== */
const Intro = ({ done, t }) => {
  // Decorative particles
  const particles = React.useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 6,
    dur: 4 + Math.random() * 5,
    size: Math.random() < 0.7 ? 2 : 3,
  })), []);
  return (
    <div className={`intro ${done ? "is-done" : ""}`} aria-hidden={done}>
      <div className="intro-bg" />
      <div className="intro-particles">
        {particles.map((p, i) => (
          <span key={i} className="intro-particle" style={{
            left: `${p.left}%`, bottom: 0,
            width: p.size, height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }} />
        ))}
      </div>
      <div className="intro-content">
        <div className="intro-logo"><LogoMark size={56} /></div>
        <span className="intro-line" />
        <div className="intro-name">{t.name || "RODRIGO SILVA"}</div>
        <div className="intro-sub">{t.rank || "Capitão"} · {t.party || "Brasil 22"}</div>
      </div>
    </div>
  );
};

/* =========== NAV =========== */
const Nav = ({ scrolled, t, onBurger }) => (
  <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
    <a href="#top" className="nav-logo">
      <span className="nav-logo-mark"><LogoMark size={36} /></span>
      <span className="nav-logo-text">
        <span className="nav-logo-name">{t.rank}</span>
        <span className="nav-logo-name-big">{t.name}</span>
        <span className="nav-logo-meta">SP · {t.party}</span>
      </span>
    </a>
    <nav className="nav-links">
      <a href="#compromissos" className="nav-link">Compromissos</a>
      <a href="#missao" className="nav-link">Missão nas Ruas</a>
      <a href="#trajetoria" className="nav-link">Trajetória</a>
      <a href="#agenda" className="nav-link">Agenda</a>
    </nav>
    <a href="#somar" className="btn btn-primary nav-cta">
      <span>Quero somar</span>
      <Icon name="arrow" size={14} />
    </a>
    <button className="nav-burger" onClick={onBurger} aria-label="Abrir menu">
      <Icon name="menu" size={20} />
    </button>
  </header>
);

const MobileNav = ({ open, onClose, t }) => (
  <div className={`mnav ${open ? "is-open" : ""}`}>
    <div className="mnav-header">
      <span className="nav-logo-mark"><LogoMark size={32} /></span>
      <button className="nav-burger" onClick={onClose} aria-label="Fechar"><Icon name="close" size={20}/></button>
    </div>
    <ul className="mnav-list">
      {["Compromissos", "Missão nas Ruas", "Trajetória", "Agenda"].map((label, i) => (
        <li key={i}>
          <a href={"#" + label.toLowerCase().replace(/\s/g, "-")} onClick={onClose}>
            <span>{label}</span>
            <span className="num">0{i + 1}</span>
          </a>
        </li>
      ))}
    </ul>
    <div className="mnav-footer">
      <span className="caption">{t.rank} · {t.party}</span>
      <a href="#somar" className="btn btn-primary" onClick={onClose}><span>Quero somar</span><Icon name="arrow" size={14}/></a>
    </div>
  </div>
);

/* =========== HERO =========== */
const Hero = ({ t }) => (
  <section className="hero" id="top">
    <div className="hero-bg" />
    <div className="container hero-grid">
      <div className="hero-left">
        <span className="eyebrow eyebrow-line hero-eyebrow">Candidato a Deputado Estadual · São Paulo</span>

        <h1 className="h-display hero-name">
          <span className="hero-name-row">{t.rank}</span>
          <span className="hero-name-row accent">{(t.name || "").split(" ")[0] || "Rodrigo"}</span>
          <span className="hero-name-row">{(t.name || "").split(" ").slice(1).join(" ") || "Silva"}</span>
        </h1>

        <div className="hero-role">
          <span className="hero-role-label">Patente</span>
          <span className="hero-role-text">Polícia Militar · Reserva</span>
          <span className="hero-number">
            <span className="hero-number-label">Vote</span>
            <span className="hero-number-value">{t.number}</span>
          </span>
        </div>

        <p className="hero-manifesto">{t.manifesto} <strong>{t.tagline}</strong></p>

        <div className="hero-ctas">
          <a href="#somar" className="btn btn-primary">
            <span>Quero somar</span>
            <Icon name="arrow" size={14} />
          </a>
          <a href="#compromissos" className="btn btn-ghost">
            <span>Conhecer propostas</span>
            <Icon name="arrowSmall" size={14} />
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="caption">Origem</span>
            <span className="hero-meta-item-value">São Paulo · SP</span>
          </div>
          <div className="hero-meta-item">
            <span className="caption">Serviço</span>
            <span className="hero-meta-item-value">23 anos · PMESP</span>
          </div>
          <div className="hero-meta-item">
            <span className="caption">Eleição</span>
            <span className="hero-meta-item-value">04 · Out · 2026</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-portrait">
          <PortraitPlaceholder />
          <image-slot id="hero-portrait" placeholder="Arraste retrato (vertical, 4:5)" shape="rect"></image-slot>
          <div className="hero-portrait-overlay">
            <span className="hero-portrait-tag">
              <span className="hero-portrait-tag-dot"></span>
              <span>Live · campanha 2026</span>
            </span>
            <div className="hero-portrait-caption">
              <span className="hero-portrait-caption-label">{t.rank} {(t.name || "").split(" ")[0]}</span>
              <span className="hero-portrait-caption-text">{t.tagline}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-stats">
      {[
        { v: "23", suf: " anos", l: "PM-SP / Reserva" },
        { v: "645", l: "Cidades de SP" },
        { v: "5", l: "Pilares de governo" },
        { v: "22", l: "Partido — número" },
      ].map((s, i) => (
        <div key={i} className="hero-stat">
          <span className="hero-stat-value"><span className="accent">{s.v}</span>{s.suf || ""}</span>
          <span className="hero-stat-label">{s.l}</span>
        </div>
      ))}
    </div>
  </section>
);

/* =========== PILLARS =========== */
const Pillars = () => (
  <section className="section" id="compromissos">
    <div className="container">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow eyebrow-line section-head-eyebrow">01 · Compromissos</span>
          <h2 className="h-section">Cinco frentes.<br/>Um compromisso só:<br/><span style={{ color: "var(--gold-2)" }}>São Paulo.</span></h2>
        </div>
        <div>
          <p className="section-head-sub">Cada compromisso é assinado em cartório e auditável publicamente. Sem promessa vazia. Sem palavra ao vento.</p>
          <a href="#somar" className="btn btn-link section-head-link">Ver carta completa <Icon name="arrowSmall" size={12}/></a>
        </div>
      </div>

      <div className="pillars reveal">
        {PILLARS.map((p) => (
          <div key={p.num} className="pillar">
            <span className="pillar-num">{p.num}</span>
            <span className="pillar-icon"><PillarIcon name={p.icon} /></span>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-desc">{p.desc}</p>
            <span className="pillar-arrow"><span>Saiba mais</span> <Icon name="arrowSmall" size={12}/></span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =========== MISSIONS =========== */
const Missions = () => (
  <section className="section" id="missão-nas-ruas">
    <div className="container">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow eyebrow-line section-head-eyebrow">02 · Missão nas Ruas</span>
          <h2 className="h-section">Onde o asfalto<br/>encontra a <span style={{ color: "var(--gold-2)" }}>realidade</span>.</h2>
        </div>
        <div>
          <p className="section-head-sub">Cinco regiões. Cinco encontros. O candidato vai até quem o gabinete esquece. Sem palanque, sem comício pirotécnico — escuta de campo.</p>
          <a href="#agenda" className="btn btn-link section-head-link">Ver agenda completa <Icon name="arrowSmall" size={12}/></a>
        </div>
      </div>

      <div className="missions reveal">
        {MISSIONS.map((m, idx) => (
          <article key={m.num} className="mission">
            <div className="mission-img">
              <div className="mission-img-bg" style={{
                background: `linear-gradient(135deg, ${["#1a2438","#2a1f1a","#1f2820","#2a261a","#1a1f28"][idx]} 0%, #0a0c12 100%)`,
              }} />
              <image-slot id={`mission-${m.num}`} placeholder={`Foto: ${m.loc}`}></image-slot>
              <div className="mission-overlay" />
            </div>
            <div className="mission-content">
              <span className="mission-num">{m.num} · {m.region}</span>
              <h3 className="mission-loc">{m.loc}</h3>
              <p className="mission-quote">"{m.quote}"</p>
              <span className="mission-cta"><span>Ver registro</span> <Icon name="arrowSmall" size={12}/></span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* =========== TIMELINE =========== */
const Timeline = () => (
  <section className="section" id="trajetoria">
    <div className="container">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow eyebrow-line section-head-eyebrow">03 · Trajetória</span>
          <h2 className="h-section">23 anos de farda.<br/><span style={{ color: "var(--gold-2)" }}>Uma só</span> palavra.</h2>
        </div>
        <div>
          <p className="section-head-sub">Da praça d'armas à tribuna da Alesp. Quem serviu na rua sabe o que falta na lei.</p>
        </div>
      </div>

      <div className="timeline-wrap">
        <div className="timeline-side reveal">
          <div className="timeline-side-num">23<br/><span className="timeline-side-num-sub">anos</span></div>
          <p className="timeline-side-quote">"Não troquei a farda pela política. Trouxe a farda para a política."</p>
          <BrazilGlyph className="timeline-glyph" />
        </div>
        <ol className="timeline">
          {TIMELINE.map((t, i) => (
            <li key={i} className="timeline-item reveal">
              <div className="timeline-year">{t.year}</div>
              <h3 className="timeline-title">{t.title}</h3>
              <p className="timeline-desc">{t.desc}</p>
              <div className="timeline-tags">
                {t.tags.map((tag) => <span key={tag} className="timeline-tag">{tag}</span>)}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

/* =========== AGENDA =========== */
const Agenda = () => (
  <section className="section" id="agenda">
    <div className="container">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow eyebrow-line section-head-eyebrow">04 · Agenda</span>
          <h2 className="h-section">Próximos<br/>encontros.</h2>
        </div>
        <div>
          <p className="section-head-sub">Caminhadas, visitas técnicas e conversas abertas. Toda agenda é pública e gratuita — basta aparecer.</p>
          <a href="#" className="btn btn-link section-head-link">Receber agenda no WhatsApp <Icon name="arrowSmall" size={12}/></a>
        </div>
      </div>

      <div className="agenda reveal">
        {AGENDA.map((a, i) => (
          <a key={i} href="#" className="agenda-row">
            <div>
              <div className="agenda-date-day">{a.day}</div>
              <div className="agenda-date-month">{a.month} · {a.weekday}</div>
            </div>
            <div>
              <h3 className="agenda-title">{a.title}</h3>
              <div className="agenda-title-sub">{a.sub}</div>
            </div>
            <div className="agenda-where">
              <span className="agenda-where-icon"><Icon name="pin" size={12}/> {a.region}</span>
              <div>{a.where}</div>
            </div>
            <div className="agenda-time">{a.time}</div>
            <span className="agenda-arrow"><span>Confirmar</span> <Icon name="arrowSmall" size={12}/></span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* =========== FINAL CTA =========== */
const FinalCTA = ({ t }) => (
  <section className="final-cta" id="somar">
    <div className="container" style={{ position: "relative", zIndex: 2 }}>
      <span className="eyebrow eyebrow-line final-cta-eyebrow">05 · Junte-se</span>
      <h2 className="final-cta-title">
        São Paulo<br/>
        <span className="accent">precisa de</span><br/>
        coragem.
      </h2>
      <p className="final-cta-sub">Sua assinatura. Seu adesivo. Sua boca. Cada gesto vale uma vaga na Alesp para quem nunca se vendeu.</p>
      <div className="final-cta-actions">
        <a href="#" className="btn btn-primary"><span>Quero somar</span> <Icon name="arrow" size={14}/></a>
        <a href="#" className="btn btn-ghost"><Icon name="whatsapp" size={14}/> <span>Receber no WhatsApp</span></a>
      </div>
    </div>
  </section>
);

/* =========== FOOTER =========== */
const Footer = ({ t }) => (
  <footer className="footer">
    <div className="footer-grid">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <LogoMark size={40} />
          <div>
            <div style={{ fontFamily: "var(--display)", fontSize: 16, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>{t.rank} {t.name}</div>
            <div className="caption" style={{ marginTop: 4 }}>Deputado Estadual · {t.number}</div>
          </div>
        </div>
        <p className="body-sm" style={{ maxWidth: 360 }}>Comitê oficial de campanha. São Paulo, SP. Aberto à imprensa, militância e apoiadores de todo o estado.</p>
        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          {["instagram", "youtube", "tiktok", "whatsapp", "x"].map((s) => (
            <a key={s} href="#" aria-label={s} style={{
              width: 40, height: 40, display: "grid", placeItems: "center",
              border: "1px solid var(--line-2)", borderRadius: 2,
              color: "var(--ink-2)", transition: "all 200ms",
            }} onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-2)"; e.currentTarget.style.borderColor = "var(--gold-line)"; }}
               onMouseLeave={(e) => { e.currentTarget.style.color = "var(--ink-2)"; e.currentTarget.style.borderColor = "var(--line-2)"; }}>
              <Icon name={s} size={16} />
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="footer-col-title">Campanha</div>
        <ul className="footer-list">
          <li><a href="#compromissos">Compromissos</a></li>
          <li><a href="#missão-nas-ruas">Missão nas Ruas</a></li>
          <li><a href="#trajetoria">Trajetória</a></li>
          <li><a href="#agenda">Agenda</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Apoie</div>
        <ul className="footer-list">
          <li><a href="#">Doação PIX</a></li>
          <li><a href="#">Voluntariar</a></li>
          <li><a href="#">Adesivo no carro</a></li>
          <li><a href="#">Comitê regional</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Imprensa</div>
        <ul className="footer-list">
          <li><a href="#">Press kit</a></li>
          <li><a href="#">Fotos oficiais</a></li>
          <li><a href="#">Agenda do candidato</a></li>
          <li><a href="#">imprensa@silva22.com.br</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-meta">
      <span>Comitê {t.rank} {t.name} — © 2026</span>
      <span>{t.party} · CNPJ 00.000.000/0001-00</span>
    </div>
    <p className="footer-disclaimer">Mockup de design — peça fictícia, não vinculada a nenhum candidato real. Conteúdo, números e citações são ilustrativos e servem apenas para fins de demonstração visual.</p>
  </footer>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
