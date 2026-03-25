import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import InicioView from './views/InicioView';
import NosotrosView from './views/NosotrosView';
import DigitalView from './views/DigitalView';
import IAView from './views/IAView';
import HITView from './views/HITView';
import BlogView from './views/BlogView';
import ContactoView from './views/ContactoView';
import './index.css';

// Custom hook to trigger fade-in animations when tab changes
function useReveal(dependency) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, [dependency]);
}

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [showHint, setShowHint] = useState(true);

  useReveal(activeTab);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const renderView = () => {
    switch (activeTab) {
      case 'inicio': return <InicioView showHint={showHint} />;
      case 'nosotros': return <NosotrosView />;
      case 'tecnologia': return <DigitalView />;
      case 'ia': return <IAView />;
      case 'hit': return <HITView />;
      case 'blog': return <BlogView />;
      case 'contacto': return <ContactoView />;
      default: return <InicioView showHint={showHint} />;
    }
  };

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: "'Outfit', sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ flex: 1 }}>
        {renderView()}
      </main>

      <footer style={{ padding: '2rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(91,75,168,0.1)', background: 'var(--bg)' }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'rgba(26,26,46,0.4)' }}>
          © 2026 AlterMundi · Software Libre · Φ · Otro mundo es posible
        </p>
      </footer>
    </div>
  );
}
