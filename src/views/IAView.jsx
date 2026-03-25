import React from 'react';
import HeroCanvas from '../components/HeroCanvas';

export default function IAView() {
    return (
        <div className="view-transition" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <HeroCanvas className="fixed inset-0" style={{ zIndex: -1, opacity: 0.15 }} />

            <section className="section-content" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Programa de Investigación</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text)' }}>PhiDeus — Organic Intelligence</h1>
                </div>

                <div className="phi-card reveal" style={{ padding: '3rem', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(37,99,235,0.1)', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#2563eb', marginBottom: '1.5rem' }}>Una forma de leer</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(26,26,46,0.8)', marginBottom: '1.5rem' }}>
                        En lugar de preguntarnos solamente qué dice una señal, nos preguntamos cómo está organizada, qué relaciones conserva, qué regularidades la atraviesan.
                        Phideus nace como una tentativa de construir representaciones proporcionales que permitan detectar estructuras compartidas entre dominios heterogéneos.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(26,26,46,0.8)', marginBottom: '1.5rem' }}>
                        No es un modelo convencional de Inteligencia Artificial enfocado en extraer datos para humanos, ni una plataforma de automatización en la nube. Investiga si existe un lenguaje agnóstico a la modalidad basado en histogramas de proporciones derivados de señales en bruto.
                    </p>

                    <div style={{ padding: '1.5rem', background: 'rgba(37,99,235,0.05)', borderRadius: 16, borderLeft: '4px solid #2563eb', marginTop: '2rem' }}>
                        <h3 style={{ fontWeight: 700, color: '#2563eb', marginBottom: '0.5rem' }}>El campo experimental</h3>
                        <p style={{ fontSize: '1rem', color: 'rgba(26,26,46,0.75)', lineHeight: 1.6 }}>
                            Su laboratorio activo está hoy en el aprendizaje profundo transmodal. La transferencia entre diferentes modalidades funciona como banco de prueba. La lógica apunta a construir modelos que no partan exclusivamente de conocimiento humano ya simbolizado.
                        </p>
                    </div>
                </div>

                <div className="reveal" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://altermundi.github.io/Phideus/" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2rem', background: '#2563eb', color: '#fff', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }}>Ver Phideus Lab</a>
                    <a href="https://altermundi.github.io/Phideus/crossath" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2rem', border: '1px solid #2563eb', color: '#2563eb', borderRadius: 999, fontWeight: 700, textDecoration: 'none', background: 'rgba(255,255,255,0.5)' }}>CrossATH</a>
                </div>
            </section>
        </div>
    );
}
