import React from 'react';
import HeroCanvas from '../components/HeroCanvas';

export default function DigitalView() {
    return (
        <div className="view-transition" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <HeroCanvas className="fixed inset-0" style={{ zIndex: -1, opacity: 0.15 }} />

            <section className="section-content" style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem 1.5rem' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: 'var(--primary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Tecnología Abierta</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text)' }}>Nuestros Nodos Digitales</h1>
                </div>

                <div className="phi-card reveal" style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(0,168,107,0.04))', borderLeft: '4px solid #14b8a6', padding: '3rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#14b8a6', marginBottom: '1rem' }}>LibreIncu (Agro)</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(26,26,46,0.8)', marginBottom: '1.5rem' }}>
                        LibreIncu es una incubadora avícola con tecnología de monitoreo y control en línea. Es un desarrollo de Hardware Libre y Software Libre enfocado en romper la triple dependencia estructural que enfrentan los productores: la genética (el oligopolio del pollito bebé híbrido), la alimentaria (dietas dependientes de insumos foráneos), y la tecnológica (acceso propietario).
                    </p>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', color: '#14b8a6', background: 'rgba(20,184,166,0.1)', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: 999 }}>
                        Stack Tecnológico: Next.js, React, TailwindCSS, IoT
                    </p>
                </div>

                <div className="phi-card reveal" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(234,88,12,0.04))', borderLeft: '4px solid #f59e0b', padding: '3rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#f59e0b', marginBottom: '1rem' }}>SAI (Sistema de Alerta de Incendios)</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(26,26,46,0.8)', marginBottom: '1.5rem' }}>
                        Detección temprana de focos de incendio utilizando Inteligencia Artificial computada directamente en el borde (edge). Los nodos autónomos ofrecen vigilancia 24/7 procesando imágenes in-situ. Trabajamos para proteger el ecosistema de incendios descontrolados, articulando redes y algoritmos de bajo consumo que detectan y notifican instantáneamente perfiles de humo.
                    </p>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', color: '#ea580c', background: 'rgba(245,158,11,0.1)', display: 'inline-block', padding: '0.5rem 1rem', borderRadius: 999 }}>
                        Tecnología: SAINet, Visión Computacional en el Borde
                    </p>
                </div>

                <div className="phi-card reveal" style={{ background: 'linear-gradient(135deg, rgba(13,148,136,0.08), rgba(8,145,178,0.04))', borderLeft: '4px solid #0d9488', padding: '3rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0d9488', marginBottom: '1rem' }}>GEAS & Redes Mesh</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(26,26,46,0.8)', marginBottom: '1.5rem' }}>
                        La espina dorsal de la infraestructura física del universo AlterMundi. Un sistema nervioso distribuido que interconecta todos los nodos y dispositivos libres (como el LibreRouter), facilitando el intercambio de información entre inteligencias y perceptores a nivel global.
                    </p>
                </div>
            </section>
        </div>
    );
}
