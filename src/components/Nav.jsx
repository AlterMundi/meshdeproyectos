import { useState } from 'react';

export default function Nav({ activeTab, setActiveTab }) {
    const [open, setOpen] = useState(false);

    const links = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'nosotros', label: 'Nosotros' },
        { id: 'tecnologia', label: 'Tecnología' },
        { id: 'ia', label: 'IA' },
        { id: 'hit', label: 'HIT' },
        { id: 'blog', label: 'Blog' },
        { id: 'contacto', label: 'Contacto' },
    ];

    const handleMobileClick = (id) => {
        setActiveTab(id);
        setOpen(false);
    };

    return (
        <header style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            backdropFilter: 'blur(16px)',
            background: 'rgba(6,13,31,0.82)',
            borderBottom: '1px solid rgba(167,139,250,0.12)',
        }}>
            <nav className="section-content" style={{
                maxWidth: 1200, margin: '0 auto',
                padding: '0.9rem 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <button
                    onClick={() => setActiveTab('inicio')}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.7rem',
                        background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: '#fff'
                    }}
                >
                    <PhiSpiralLogo />
                    <span className="font-sketch" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', color: '#fff' }}>AlterMundi</span>
                </button>

                {/* Desktop links */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }} className="hidden md:flex">
                    {links.map(l => (
                        <button
                            key={l.id}
                            onClick={() => setActiveTab(l.id)}
                            className="nav-link"
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                fontSize: '0.95rem', fontWeight: activeTab === l.id ? 700 : 500,
                                color: activeTab === l.id ? 'var(--primary)' : 'var(--text)',
                                padding: '0.5rem 0.75rem',
                                transition: 'color 0.2s',
                            }}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    id="menuBtn"
                    className="md:hidden"
                    onClick={() => setOpen(o => !o)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: 'var(--text)' }}
                    aria-label="Menú"
                >
                    {open ? <XIcon /> : <MenuIcon />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div className={`mobile-menu md:hidden${open ? ' open' : ''}`}
                style={{ background: 'rgba(6,13,31,0.96)', padding: '0 1.5rem', display: open ? 'block' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '1rem 0' }}>
                    {links.map(l => (
                        <button
                            key={l.id}
                            onClick={() => handleMobileClick(l.id)}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                textAlign: 'left',
                                color: activeTab === l.id ? 'var(--primary)' : 'var(--text)',
                                fontWeight: activeTab === l.id ? 700 : 500,
                                padding: '0.75rem 0', fontSize: '1.05rem',
                                borderBottom: '1px solid rgba(91,75,168,0.06)'
                            }}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

function PhiSpiralLogo() {
    return (
        <svg width="38" height="38" viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
            <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00a86b" />
                    <stop offset="100%" stopColor="#5b4ba8" />
                </linearGradient>
            </defs>
            <path
                d="M50 10 C70 10, 90 30, 90 50 C90 70, 70 90, 50 90 C30 90, 10 70, 10 50 C10 35, 25 20, 40 20 C55 20, 65 35, 65 50 C65 65, 55 75, 45 75 C35 75, 28 65, 28 55 C28 47, 34 40, 42 40 C50 40, 55 47, 55 55"
                fill="none"
                stroke="url(#logoGrad)"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <circle cx="55" cy="55" r="4" fill="#00c878" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}
