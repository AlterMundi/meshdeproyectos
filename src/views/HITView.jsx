import React from 'react';
import HeroCanvas from '../components/HeroCanvas';

export default function HITView() {
    return (
        <div className="view-transition" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <HeroCanvas className="fixed inset-0" style={{ zIndex: -1, opacity: 0.15 }} />

            <section className="section-content" style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1.5rem' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Marco Conceptual</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text)' }}>Harmonic Information Theory</h1>
                </div>

                <div className="phi-card reveal" style={{ padding: '3rem', background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(124,58,237,0.1)', marginBottom: '3rem' }}>
                    <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #5b21b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", color: '#fff', fontSize: '1.5rem' }}>Φ</span>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#7c3aed', marginBottom: '1.5rem' }}>La información como proporción</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(26,26,46,0.8)', marginBottom: '1.5rem' }}>
                        HIT no aparece para decorar técnicamente lo que ya sabíamos hacer. Aparece porque necesitamos un lenguaje capaz de atravesar dominios distintos sin perder estructura. Audio, MIDI, imágenes, bioseñales, vibraciones, espectros electromagnéticos, eventos de red: a primera vista parecen mundos separados.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(26,26,46,0.8)', marginBottom: '1.5rem' }}>
                        Pero si existe una gramática relacional más profunda, entonces tal vez sea posible leer lo común entre ellos no desde sus unidades humanas habituales, sino desde sus proporciones, sus relaciones internas y sus modos de propagación.
                    </p>
                    <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 300, color: 'rgba(26,26,46,0.7)', borderLeft: '4px solid #7c3aed', paddingLeft: '1.5rem', margin: '2rem 0' }}>
                        "Si existe una gramática relacional más profunda, es posible leer lo común entre dominios distintos no desde sus unidades humanas, sino desde sus proporciones."
                    </blockquote>
                </div>

                {/* Libro Download CTA */}
                <div className="phi-card reveal" style={{ padding: '2.5rem', textAlign: 'center', background: 'linear-gradient(160deg, rgba(217,119,6,0.1), rgba(0,168,107,0.05))', border: '1px solid rgba(217,119,6,0.2)' }}>
                    <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #d97706, #a85a0a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-warm)', marginBottom: '0.5rem' }}>El Libro</h3>
                    <p style={{ color: 'rgba(26,26,46,0.7)', marginBottom: '1.5rem' }}>Redes comunitarias: manual para la construcción de otro mundo posible</p>
                    <a href="https://altermundi.net/librerouter" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.8rem 2rem', background: 'var(--accent-warm)', color: '#fff', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }}>
                        Descargar PDF ↓
                    </a>
                </div>
            </section>
        </div>
    );
}
