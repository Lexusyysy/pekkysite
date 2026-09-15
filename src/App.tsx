const A = "https://ext.same-assets.com/219373587/";
const socials = [
  ["X", `${A}2084113127.svg`, "https://x.com/pekky_sol"],
  ["Telegram", `${A}2210492992.svg`, "https://pekkysol.t.me"],
  ["Instagram", `${A}3880583053.svg`, "https://www.instagram.com/pekkytoken"],
];
const phases = [
  ["Launch the telegram", "Publish the website", "Build a strong community"],
  ["Launch on pump.fun", "Airdrop for early members", "Launch Pekky the Duck game"],
  ["CoinGecko and CMC Listing", "Hire crypto influencers"],
  ["Establish DAO's for token's future", "Insure long-term sustainability"],
];

function ScrollLink({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return <a className={`nav-link ${className}`} href={`#${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }}><span>{children}</span></a>;
}
function Socials() {
  return <div className="socials">{socials.map(([label, icon, href]) => <a className="social-button" href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}><img src={icon} alt="" /></a>)}</div>;
}
function Ticker() {
  const text = Array.from({ length: 8 }, (_, i) => <span key={i}>$PEKKY To The Moon!</span>);
  return <div className="ticker" aria-hidden="true"><div className="ticker-track"><div className="ticker-group">{text}</div><div className="ticker-group">{text}</div></div></div>;
}
function Burst({ className = "" }: { className?: string }) {
  return <div className={`burst ${className}`} aria-hidden="true"><i /><i /><i /><i /><b /></div>;
}

function App() {
  return <main>
    <header className="site-header">
      <ScrollLink id="home" className="brand">$PEKKY</ScrollLink>
      <nav aria-label="Main navigation"><ScrollLink id="home">Home</ScrollLink><ScrollLink id="tokenomics">Tokenomics</ScrollLink><ScrollLink id="roadmap">Roadmap</ScrollLink></nav>
      <div className="header-actions"><Socials /><a className="join-button small" href="https://pekkysol.t.me" target="_blank" rel="noreferrer"><span>Join now</span></a></div>
    </header>
    <Ticker />
    <section className="hero section" id="home">
      <div className="hero-copy reveal"><p className="eyebrow">The cutest duck on Solana</p><h1>$PEKKY<br /><em>to the Moon</em></h1><p className="intro">$PEKKY is a funny cartoon duck mascot. Join the community now and dive into the meme magic!</p><a className="join-button large" href="https://pekkysol.t.me" target="_blank" rel="noreferrer"><span>Join now</span><b>↗</b></a></div>
      <div className="hero-art reveal-late"><div className="sun" /><div className="orbit one" /><div className="orbit two" /><Burst className="burst-left" /><Burst className="burst-right" /><img className="duck" src={`${A}2216882536.svg`} alt="Pekky, a cheerful yellow cartoon duck" /><div className="moon-pill">TO THE MOON!</div></div>
    </section>
    <Ticker />
    <section className="tokenomics section" id="tokenomics">
      <div className="section-heading"><p className="eyebrow">How the pond is shared</p><h2>TOKENOMICS</h2></div>
      <div className="token-grid"><div className="chart-wrap"><div className="chart-halo" /><img src={`${A}2188419433.png`} alt="$PEKKY token allocation chart" /><Burst className="chart-burst" /></div>
      <div className="token-card"><h3>$PEKKY Tokenomics</h3><ul><li><span>01</span><p>Total Supply: <strong>1 Billion $PEKKY</strong></p></li><li><span>02</span><p>Liquidity Pool <strong>(Pump.fun)</strong></p></li><li><span>03</span><p>Community <strong>Airdrop</strong></p></li><li><span>04</span><p>Dev Holdings <strong>(Locked)</strong></p></li></ul></div></div>
    </section>
    <Ticker />
    <section className="roadmap section" id="roadmap">
      <div className="roadmap-intro"><p className="eyebrow">From the pond to the stars</p><h2>OUR<br />ROADMAP</h2><p>This roadmap outlines our journey to exciting milestones, including listings on major exchanges. Let's pave the way for innovative developments.</p></div><div className="road-line" />
      <div className="phase-grid">{phases.map((items, phase) => <article className="phase-card" key={items[0]}><div className="phase-top"><span>Phase</span><strong>#{phase + 1}</strong></div><ul>{items.map(item => <li key={item}>{item}</li>)}</ul><div className="phase-dot" /></article>)}</div><Burst className="road-burst" />
    </section>
    <footer><a className="footer-brand" href="#home">$PEKKY</a><p>Dive into the meme magic.</p><Socials /></footer>
  </main>;
}
export default App;
