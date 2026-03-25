import React from 'react';
import HeroCanvas from '../components/HeroCanvas';

export default function BlogView() {
    const BLOG_POSTS = [
        {
            tag: 'Despliegues', tagColor: 'var(--primary)', bgColor: 'rgba(0,168,107,0.06)', borderColor: 'rgba(0,168,107,0.15)',
            title: 'AlterMundi y la primera red comunitaria de Internet cien por ciento LibreRouter',
            excerpt: 'Este Informe expone resultados del análisis de la intervención de AlterMundi en una comunidad rural organizada en Las Calles (Traslasierra, Córdoba) para promover la primera red comunitaria de Internet de Argentina con LibreRouter.',
            date: '04 May 2021',
        },
        {
            tag: 'Semilleros', tagColor: 'var(--secondary)', bgColor: 'rgba(91,75,168,0.06)', borderColor: 'rgba(91,75,168,0.15)',
            title: 'Semillero de Redes Comunitarias postulantes al Roberto Arias',
            excerpt: 'Para facilitar y promover el aprovechamiento del fondo estatal asignado al Programa Roberto Arias, hicimos posible el Semillero de Redes Comunitarias de internet, acompañando a 16 comunidades en el diseño inicial de su red.',
            date: '25 Mar 2022',
        },
        {
            tag: 'Financiamiento', tagColor: 'var(--accent-warm)', bgColor: 'rgba(217,119,6,0.06)', borderColor: 'rgba(217,119,6,0.15)',
            title: 'Programa Roberto Arias de ENACOM - Características y requisitos',
            excerpt: 'El Roberto Arias es un programa de ENACOM que tiene como objetivo financiar el desarrollo de Redes Comunitarias de internet, sustentado con el Fondo Fiduciario de Servicio Universal (FFSU), a través de Aportes No Reembolsables (ANR).',
            date: '17 Feb 2022',
        },
    ];

    return (
        <div className="view-transition" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <HeroCanvas className="fixed inset-0" style={{ zIndex: -1, opacity: 0.1 }} />

            <section className="section-content" style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Novedades</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text)' }}>Blog Institucional</h1>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                    {BLOG_POSTS.map((post, i) => (
                        <div key={i} className="blog-card reveal" style={{ flex: '1 1 300px', maxWidth: 400, background: post.bgColor, border: `1px solid ${post.borderColor}`, padding: '2.5rem', borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: post.tagColor, background: 'rgba(255,255,255,0.7)', padding: '0.3em 0.8em', borderRadius: 999 }}>{post.date} · {post.tag}</span>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '1rem 0', color: 'var(--text)', lineHeight: 1.4 }}>{post.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(26,26,46,0.7)', lineHeight: 1.6 }}>{post.excerpt}</p>
                            <button style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: post.tagColor, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', padding: 0 }}>
                                Leer Nota Completa →
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
