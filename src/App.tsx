import { motion } from 'framer-motion';
import { Globe, ExternalLink, MapPin } from 'lucide-react';
import './App.css';

// --- Background Pattern Component ---
const GeometricBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.4 }}>
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
          borderColor: [
            "rgba(255, 0, 0, 0.15)",
            "rgba(255, 165, 0, 0.15)",
            "rgba(255, 255, 0, 0.15)",
            "rgba(0, 128, 0, 0.15)",
            "rgba(0, 0, 255, 0.15)",
            "rgba(75, 0, 130, 0.15)",
            "rgba(238, 130, 238, 0.15)",
            "rgba(255, 0, 0, 0.15)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', top: '-20%', left: '-10%', width: '70vw', height: '70vw',
          border: '1px solid transparent',
          borderRadius: '40%',
        }}
      />
      <motion.div
        animate={{
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 1.2, 1],
          borderColor: [
            "rgba(238, 130, 238, 0.1)",
            "rgba(75, 0, 130, 0.1)",
            "rgba(0, 0, 255, 0.1)",
            "rgba(0, 128, 0, 0.1)",
            "rgba(255, 255, 0, 0.1)",
            "rgba(255, 165, 0, 0.1)",
            "rgba(255, 0, 0, 0.1)",
            "rgba(238, 130, 238, 0.1)"
          ]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', bottom: '-30%', right: '-10%', width: '80vw', height: '80vw',
          border: '1px solid transparent',
          borderRadius: '30%',
        }}
      />
      
      {/* Grid Overlay */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        opacity: 0.3
      }} />
    </div>
  );
};

// --- Hero Section ---
const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title" style={{ whiteSpace: 'nowrap', width: '100%' }}>
            YAMARIU<span className="text-accent">.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 700, marginTop: '2rem', maxWidth: '600px', lineHeight: 1.4 }}>
            都市環境×デジタル知能の融合。
            <br /> <span style={{ color: 'var(--text-muted)' }}>Sentinel Protocolによる、ビットとアトムの完全同期。</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          MISSION
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
          <motion.div 
            className="glass-panel" 
            style={{ padding: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Sentinel Protocol</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              都市という物理的レイヤー（Atom）と、環境データという情報レイヤー（Bit）を同期する。
              Arduino によるセンシング、GIS によるモデリング、そして Web による可視化。
              すべての事象を観測し、最適化する司令搭となる。
            </p>
          </motion.div>

          <motion.div 
            className="glass-panel" 
            style={{ padding: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Tech Arsenal (技術スタック)</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
              <li><strong>UI/UX:</strong> React, Vite, Framer Motion</li>
              <li><strong>Hardware:</strong> Arduino, IoT/各種センサー</li>
              <li><strong>Spatial Data:</strong> QGIS, Geolocation API</li>
              <li><strong>Knowledge:</strong> Obsidian (Yamasidian)</li>
            </ul>
          </motion.div>

          {/* Added Profile section */}
          <motion.div 
            className="glass-panel" 
            style={{ padding: '3rem', gridColumn: '1 / -1' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Personal identity (自己紹介)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', color: 'var(--text-muted)' }}>
              <div>
                <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>経歴・活動</h4>
                <p>
                  大阪市を拠点に活動するエンジニア／リサーチャー。
                  環境データのセンシング（Arduino）から、地図空間情報へのマッピング（GIS）、そしてWebによるインターフェース構築（React）まで、一貫したシステム構築を得意とする。
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>趣味・嗜好</h4>
                <p>
                  Obsidianによる知の探究とネットワーク構築。「怠慢・短気・傲慢」の理念を愛し、PowerShellによる徹底した自動化を日常とする。街歩きや都市構造の観察もライフワークの一部。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Projects Section ---
const Projects = () => {
  const projects = [
    {
      title: 'Osaka Environmental Dashboard (大阪環境ダッシュボード)',
      description: 'GSIの洪水リスク、ERDB環境放射線データ、iNaturalistの観測記録を統合したリアルタイム環境監視コマンドセンター。',
      link: '#',
      tag: 'Web / GIS'
    },
    {
      title: 'Arduino Chimera (電子工作キメラ)',
      description: 'フィールドサーベイ用モバイルセンサーデバイスの実装。現場の真実（Ground Truth）をデジタル化する。',
      link: '#',
      tag: 'IoT / Hardware'
    },
    {
      title: 'Yamasidian Frontier (知識のネットワーク)',
      description: 'Obsidianをベースとした個人知識ベース「Yamasidian」のWebダッシュボード化。思考のネットワークを可視化。',
      link: '#',
      tag: 'Knowledge / 3D'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ARCHIVE
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              className="glass-panel"
              style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>
                {p.tag}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', flexGrow: 1, marginBottom: '2rem' }}>
                {p.description}
              </p>
              <a href={p.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto', alignSelf: 'flex-start' }}>
                プロジェクト詳細 <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>YAMARIU.</h2>
          <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <a href="https://www.google.com/maps/search/大阪の名所/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} /> Osaka, Japan
            </a>
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/yamariu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://x.com/RyutaroYam29184" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="https://wappa88jp.sakura.ne.jp/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)' }}>
            <Globe size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      <GeometricBackground />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
