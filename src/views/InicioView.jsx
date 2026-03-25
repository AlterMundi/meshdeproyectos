import React from 'react';
import HeroCanvas from '../components/HeroCanvas';
import EcoMesh from '../components/EcoMesh';

const MESH_URL = 'https://altermundi.github.io/meshdeproyectos/';

function WaveDivider({ flip = false, fill = 'var(--surface)' }) {
    return (
        <div className="wave-divider" style={flip ? { transform: 'scaleY(-1)', marginTop: -1 } : {}}>
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" fill={fill} />
            </svg>
        </div>
    );
}

export default function InicioView({ showHint }) {

    return (
        <div className="view-transition">
            {/* HERO SECTION — full-screen dark mesh */}
            <section style={{
                height: '100vh', minHeight: 560,
                position: 'relative', overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg)',
            }}>
                {/* Bouncing mesh balls — sides only */}
                <HeroCanvas className="absolute inset-0" sidesOnly />

                {/* Subtle radial overlay so text is legible */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(6,13,31,0.55) 0%, transparent 80%)',
                    pointerEvents: 'none',
                }} />

                {/* Centered title content */}
                <div style={{
                    position: 'relative', zIndex: 2,
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    textAlign: 'center', padding: '0 1.5rem',
                }}>


                    <h1 className="font-sketch" style={{
                        fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                        lineHeight: 1, letterSpacing: '-0.02em',
                        marginBottom: '1.25rem',
                    }}>
                        <span style={{
                            background: 'linear-gradient(135deg, #00e5a0 0%, #a78bfa 50%, #fbbf24 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                        }}>Alter</span>
                        <span style={{ color: '#fff' }}>Mundi</span>
                    </h1>

                    <h2 style={{
                        fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
                        fontWeight: 400, color: 'rgba(226,232,248,0.7)',
                        lineHeight: 1.65, maxWidth: 560, marginBottom: '2.5rem',
                    }}>
                        No estamos construyendo solo redes, sensores o software.<br />
                        Estamos construyendo infraestructura abierta para percibir, organizar e interpretar información de manera distribuida y profunda.
                    </h2>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <a href={MESH_URL} target="_blank" rel="noopener noreferrer" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.85rem 2rem',
                            background: 'linear-gradient(135deg, #00e5a0, #00a86b)',
                            color: '#060d1f', borderRadius: 999, textDecoration: 'none',
                            fontWeight: 700, fontSize: '0.95rem', transition: 'all 0.3s',
                        }}>
                            🌌 Ver el ecosistema
                        </a>
                        <a href="mailto:info@altermundi.net" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.85rem 2rem',
                            border: '1.5px solid rgba(167,139,250,0.6)',
                            color: 'var(--secondary)', borderRadius: 999, textDecoration: 'none',
                            fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.3s',
                            backdropFilter: 'blur(8px)',
                        }}>
                            ✉️ Contacto
                        </a>
                    </div>

                    {/* Scroll hint */}
                    <div style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', opacity: 0.4 }}>
                        <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--primary))', animation: 'pulse 2s ease-in-out infinite' }} />
                    </div>
                </div>
            </section>

            <WaveDivider fill="var(--surface)" />

            {/* WHAT WE ARE TODAY */}
            <section style={{ background: 'var(--surface)', padding: '5rem 1.5rem' }}>
                <div className="section-content reveal" style={{ maxWidth: 820, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1.25rem' }}>
                            Lo que venimos construyendo
                        </h2>
                        <p style={{ fontSize: 'clamp(1rem, 2.2vw, 1.25rem)', fontWeight: 300, color: 'rgba(226,232,248,0.65)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
                            Hace más de una década elegimos ese nombre porque intuíamos una dirección. Hoy podemos nombrarla con mucha más precisión.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="phi-card" style={{ padding: '2.5rem 3rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(167,139,250,0.18)' }}>
                            <p style={{ lineHeight: 1.85, color: 'rgba(226,232,248,0.82)', fontSize: '1.05rem', marginBottom: '1.4rem' }}>
                                Nuestro recorrido empezó por la conectividad. Trabajamos durante años sobre redes mesh, ruteo distribuido, firmware libre, hardware abierto, monitoreo y telemetría. AlterMesh, LibreMesh, LibreRouter, 44mesh y todo el ecosistema asociado no fueron proyectos aislados: fueron distintas expresiones de una misma búsqueda. Aprendimos a construir redes sin centro, capaces de operar de manera robusta, abierta y replicable.
                            </p>
                            <p style={{ lineHeight: 1.85, color: 'rgba(226,232,248,0.82)', fontSize: '1.05rem', margin: 0 }}>
                                Ese trabajo no fue una etapa que quedó atrás. <strong style={{ color: 'var(--primary)' }}>Fue la base material de todo lo que vino después.</strong>
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                            <div style={{ padding: '2rem', background: 'rgba(0,229,160,0.05)', border: '1px solid rgba(0,229,160,0.15)', borderRadius: 20 }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🕸️</div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>De canal a arquitectura de percepción</h3>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(226,232,248,0.65)', margin: 0 }}>
                                    Cuando una red deja de verse solo como medio para transportar paquetes y empieza a pensarse como arquitectura de percepción, aparece otra posibilidad. La mesh deja de ser solo conectividad y se convierte en la base de una sensibilidad distribuida.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.15)', borderRadius: 20 }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🧠</div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.6rem' }}>Un sistema nervioso distribuido</h3>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(226,232,248,0.65)', margin: 0 }}>
                                    Perceptores que capturan señales del entorno. Integradores que las organizan y filtran localmente. Inteligencias —humanas o artificiales— que detectan patrones, sostienen atención y actúan cuando algo importante emerge.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', background: 'rgba(251,191,36,0.05)', border: '1px solid rgba(251,191,36,0.15)', borderRadius: 20 }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>〜</div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-warm)', marginBottom: '0.6rem' }}>Información como relación</h3>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(226,232,248,0.65)', margin: 0 }}>
                                    Una parte significativa de la información del mundo puede describirse mejor no como dato aislado, sino como relación. Como proporción, ritmo, acople, recurrencia, estructura armónica. Ahí se abre el horizonte de Harmonic Information Theory.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'linear-gradient(135deg, rgba(0,229,160,0.06), rgba(167,139,250,0.06))', padding: '2.25rem 2.75rem', borderRadius: 24, borderLeft: '4px solid var(--primary)' }}>
                            <p style={{ fontStyle: 'italic', color: 'rgba(226,232,248,0.92)', fontSize: '1.15rem', lineHeight: 1.75, margin: 0 }}>
                                "Empezamos construyendo redes abiertas. Hoy estamos construyendo una infraestructura distribuida para percibir, organizar e interpretar la información como relación."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WaveDivider flip fill="var(--surface)" />

            {/* ECOSISTEMA — Mesh interactiva de proyectos */}
            <section style={{ padding: '5rem 1.5rem 6rem', background: 'var(--bg)' }}>

                {/* Texto editorial */}
                <div className="section-content reveal" style={{ maxWidth: 760, margin: '0 auto 3rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>
                        El ecosistema
                    </h2>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8, color: 'rgba(226,232,248,0.72)', marginBottom: '1.1rem' }}>
                        AlterMundi no desarrolla proyectos aislados. Despliega una misma arquitectura en dominios distintos: conectividad mesh, producción agroecológica, monitoreo territorial, observación distribuida e inteligencia relacional.
                    </p>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.8, color: 'rgba(226,232,248,0.72)', marginBottom: '1.1rem' }}>
                        Cuando miramos todos estos proyectos juntos, lo que aparece no es una suma dispersa de iniciativas. Aparece un ecosistema donde cada línea de trabajo encarna una faceta distinta de la misma pregunta: cómo construir la tecnología necesaria para percibir mejor el mundo y entender mejor la información que lo atraviesa.
                    </p>
                    <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', lineHeight: 1.7, color: 'rgba(226,232,248,0.45)', fontStyle: 'italic' }}>
                        Hacé click en cada hexágono para explorar el proyecto y ver sus conexiones.
                    </p>
                </div>

                <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 0.5rem' }}>
                    <EcoMesh />
                </div>
            </section>

            <WaveDivider fill="var(--surface)" />

            {/* CIERRE — visión */}
            <section style={{ background: 'var(--surface)', padding: '5rem 1.5rem 6rem' }}>
                <div className="section-content reveal" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.85, color: 'rgba(226,232,248,0.72)', marginBottom: '2.5rem' }}>
                        AlterMundi trabaja para que una red abierta pueda volverse también una forma de atención. Una atención distribuida. Una atención que aprende. Una atención que escucha ratios, no solo datos. Una atención capaz de operar entre humanos, inteligencias artificiales, sensores y naturaleza sin reducir esa complejidad a un único lenguaje cerrado.
                    </p>
                    <div style={{ background: 'linear-gradient(135deg, rgba(0,229,160,0.08), rgba(167,139,250,0.08))', padding: '2.5rem 3rem', borderRadius: 32, border: '1px solid rgba(0,229,160,0.18)', marginBottom: '2.5rem' }}>
                        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 600, color: 'var(--primary)', lineHeight: 1.65, margin: 0 }}>
                            No estamos en el cierre de una historia, sino en el momento en que por fin podemos nombrar con más precisión la dirección que veníamos siguiendo desde el principio.
                        </p>
                    </div>
                    <a href="mailto:info@altermundi.net" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.9rem 2.25rem',
                        background: 'linear-gradient(135deg, #00e5a0, #00a86b)',
                        color: '#060d1f', borderRadius: 999, textDecoration: 'none',
                        fontWeight: 700, fontSize: '1rem',
                    }}>
                        ✉️ Escribinos
                    </a>
                </div>
            </section>
        </div>
    );
}
