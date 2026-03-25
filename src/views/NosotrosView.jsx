import { useState } from 'react';

/* ─── Duotone overlay helper ─────────────────────────────────────────── */
function PhotoCard({ src, alt, keyword, keywordSub, tint = 'rgba(0,229,160,0.18)', size = 'normal', style = {} }) {
    const [hovered, setHovered] = useState(false);
    const heights = { normal: 320, tall: 480, short: 220, wide: 300 };
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative', overflow: 'hidden', borderRadius: 20,
                height: heights[size],
                cursor: 'default',
                ...style,
            }}
        >
            {/* Photo */}
            <img
                src={src} alt={alt}
                style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: hovered
                        ? 'saturate(1.15) contrast(1.05) brightness(0.78)'
                        : 'saturate(0.72) contrast(1.08) brightness(0.72)',
                    transform: hovered ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all 0.6s cubic-bezier(0.22,1,0.36,1)',
                    display: 'block',
                }}
            />
            {/* Color tint overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                background: tint,
                mixBlendMode: 'color',
                pointerEvents: 'none',
                opacity: hovered ? 0.6 : 1,
                transition: 'opacity 0.6s',
            }} />
            {/* Bottom gradient + keyword */}
            {keyword && (
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '3rem 1.5rem 1.25rem',
                    background: 'linear-gradient(to top, rgba(6,13,31,0.88) 0%, transparent 100%)',
                    pointerEvents: 'none',
                }}>
                    <div style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.1,
                        textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                    }}>{keyword}</div>
                    {keywordSub && (
                        <div style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '0.8rem', color: 'rgba(226,232,248,0.55)',
                            marginTop: '0.25rem', letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                        }}>{keywordSub}</div>
                    )}
                </div>
            )}
        </div>
    );
}

/* ─── Alliance pill ─────────────────────────────────────────────────── */
function AllyPill({ name, logo, url }) {
    return (
        <a
            href={url || '#'}
            target={url ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.55rem 1.1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(167,139,250,0.18)',
                borderRadius: 999,
                textDecoration: 'none',
                color: 'rgba(226,232,248,0.75)',
                fontSize: '0.88rem', fontWeight: 500,
                transition: 'all 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,229,160,0.08)'; e.currentTarget.style.borderColor = 'rgba(0,229,160,0.35)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(167,139,250,0.18)'; e.currentTarget.style.color = 'rgba(226,232,248,0.75)'; }}
        >
            {logo && <img src={logo} alt={name} style={{ height: 18, objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />}
            {name}
        </a>
    );
}

export default function NosotrosView() {
    return (
        <div className="view-transition">

            {/* ── HERO ─────────────────────────────────────────────────────────── */}
            <section style={{
                position: 'relative', height: '92vh', minHeight: 560,
                overflow: 'hidden', display: 'flex', alignItems: 'flex-end',
            }}>
                <img
                    src="/images/IMG_3167.jpg" alt="AlterMundi en territorio"
                    style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center 30%',
                        filter: 'saturate(0.6) contrast(1.1) brightness(0.55)',
                    }}
                />
                {/* duotone wash */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,168,107,0.14)', mixBlendMode: 'color', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,13,31,0.95) 0%, rgba(6,13,31,0.2) 60%, transparent 100%)', pointerEvents: 'none' }} />

                <div style={{ position: 'relative', zIndex: 2, padding: '0 2rem 4rem', maxWidth: 860 }}>
                    <p style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
                        color: 'var(--primary)', marginBottom: '1rem', opacity: 0.9,
                    }}>AlterMundi · Quiénes somos</p>
                    <h1 className="font-sketch" style={{
                        fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                        lineHeight: 0.95, color: '#fff', marginBottom: '1.75rem',
                        letterSpacing: '-0.03em',
                    }}>
                        Nos<br />
                        <span style={{ background: 'linear-gradient(90deg, #00e5a0, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>otros</span>
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1rem, 2.2vw, 1.3rem)', color: 'rgba(226,232,248,0.82)',
                        lineHeight: 1.7, maxWidth: 640, fontWeight: 300,
                    }}>
                        Cada vez que salimos de nuestro propio terreno y trabajamos de verdad con otros, aprendimos algo que no hubiéramos aprendido solos. Eso es AlterMundi.
                    </p>
                </div>
            </section>

            {/* ── APERTURA ──────────────────────────────────────────────────────── */}
            <section style={{ background: 'var(--bg)', padding: '5rem 1.5rem' }}>
                <div className="section-content reveal" style={{ maxWidth: 780, margin: '0 auto' }}>
                    <p style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', lineHeight: 1.8, color: 'rgba(226,232,248,0.88)', fontWeight: 300, marginBottom: '1.5rem' }}>
                        AlterMundi es lo que es, en gran parte, porque nos cruzamos con las personas correctas en el momento correcto.
                    </p>
                    <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(226,232,248,0.62)', marginBottom: 0 }}>
                        No lo decimos como frase de autoayuda. Lo decimos como descripción precisa de cómo funciona esto. Cada alianza concreta se tradujo en software mejor, hardware más robusto, herramientas más útiles, proyectos más sólidos. <strong style={{ color: 'var(--primary)', fontWeight: 600 }}>Estas alianzas no son ornamentales. Son parte de cómo hacemos lo que hacemos.</strong>
                    </p>
                </div>
            </section>

            {/* ── COLLAGE 1: CONECTIVIDAD ────────────────────────────────────────── */}
            <section style={{ padding: '0 1.5rem 4rem', background: 'var(--bg)' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>

                    {/* Label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: 32, height: 2, background: 'var(--primary)', borderRadius: 99 }} />
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--primary)' }}>Conectividad comunitaria</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0.75rem' }}>
                        <div style={{ gridColumn: 'span 7' }}>
                            <PhotoCard
                                src="/images/instalacion.jpg" alt="Instalación de red mesh"
                                keyword="Redes sin centro" keywordSub="LibreMesh · LibreRouter · 44mesh"
                                tint="rgba(0,229,160,0.22)" size="tall"
                            />
                        </div>
                        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <PhotoCard
                                src="/images/hero-librerouter-cerca-01.JPG" alt="LibreRouter"
                                keyword="Hardware libre" keywordSub="Co-creado, replicable"
                                tint="rgba(0,168,107,0.25)" size="normal"
                                style={{ height: 230 }}
                            />
                            <PhotoCard
                                src="/images/IMG_0587.jpg" alt="Trabajo de campo"
                                keyword="Campo abierto"
                                tint="rgba(91,75,168,0.22)" size="normal"
                                style={{ height: 230 }}
                            />
                        </div>
                    </div>

                    {/* Text blurb */}
                    <div style={{ maxWidth: 680, marginTop: '2.5rem' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(226,232,248,0.72)' }}>
                            AlterMesh, LibreMesh, LibreRouter, 44mesh. Años de trabajo sobre redes mesh, ruteo distribuido, firmware libre y hardware abierto. Ese recorrido nos conectó con <strong style={{ color: '#fff', fontWeight: 600 }}>APC</strong>, <strong style={{ color: '#fff', fontWeight: 600 }}>Internet Society</strong> y <strong style={{ color: '#fff', fontWeight: 600 }}>ARDC</strong> —alianzas que siguen siendo activas hoy. En <strong style={{ color: '#fff', fontWeight: 600 }}>BattleMesh</strong> encontramos una comunidad técnica internacional que trabaja el mismo problema con la misma seriedad. En 2022 el Semillero de Redes Comunitarias de AlterMundi recibió el primer premio <strong style={{ color: '#fff', fontWeight: 600 }}>IEEE</strong> en Community Enablement Proof of Concept.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DIVIDER QUOTE ──────────────────────────────────────────────────── */}
            <section style={{ background: 'var(--surface)', padding: '4rem 1.5rem' }}>
                <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
                    <p style={{
                        fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                        fontWeight: 700, color: 'var(--primary)',
                        lineHeight: 1.5, letterSpacing: '-0.01em',
                    }}>
                        "Cada vez que nos tomamos el tiempo de entender el problema de otra organización antes de proponer soluciones, el resultado fue mejor."
                    </p>
                </div>
            </section>

            {/* ── COLLAGE 2: AGRO ──────────────────────────────────────────────── */}
            <section style={{ padding: '4rem 1.5rem', background: 'var(--bg)' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: 32, height: 2, background: '#84cc16', borderRadius: 99 }} />
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#84cc16' }}>Producción y territorio</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0.75rem' }}>
                        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <PhotoCard
                                src="/images/IMG_2542.jpg" alt="Producción agroecológica"
                                keyword="Semilla abierta"
                                tint="rgba(132,204,22,0.25)" size="normal" style={{ height: 220 }}
                            />
                            <PhotoCard
                                src="/images/DSCN1663.JPG" alt="Trabajo en campo"
                                keyword="18 orgs" keywordSub="LibreAgro en territorio"
                                tint="rgba(0,229,160,0.2)" size="normal" style={{ height: 220 }}
                            />
                        </div>
                        <div style={{ gridColumn: 'span 5' }}>
                            <PhotoCard
                                src="/images/IMG_3706.jpg" alt="Encuentro comunitario"
                                keyword="Escucha real" keywordSub="Antes de proponer"
                                tint="rgba(132,204,22,0.22)" size="tall"
                            />
                        </div>
                        <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <PhotoCard
                                src="/images/DSC_2208.JPG" alt="Reunión de trabajo"
                                keyword="CTO"
                                tint="rgba(0,168,107,0.28)" style={{ height: 220 }}
                            />
                            <PhotoCard
                                src="/images/DSC_2211.JPG" alt="Colaboración"
                                keyword="Cooperativa"
                                tint="rgba(132,204,22,0.22)" style={{ height: 220 }}
                            />
                        </div>
                    </div>

                    <div style={{ maxWidth: 680, marginTop: '2.5rem' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(226,232,248,0.72)' }}>
                            LibreIncu nació de escuchar a <strong style={{ color: '#fff', fontWeight: 600 }}>CTO — Comunidad, Trabajo y Organización</strong>. De ese vínculo real salió una herramienta concreta. LibreAgro sumó a la <strong style={{ color: '#fff', fontWeight: 600 }}>Cooperativa de Trabajo El Espinillo</strong>, al <strong style={{ color: '#fff', fontWeight: 600 }}>Agroecology Fund</strong>, al <strong style={{ color: '#fff', fontWeight: 600 }}>INTA</strong>, al <strong style={{ color: '#fff', fontWeight: 600 }}>INTI</strong>, a <strong style={{ color: '#fff', fontWeight: 600 }}>Gen Nativo</strong>, a la <strong style={{ color: '#fff', fontWeight: 600 }}>Escuela de Agroecología La Ramona</strong> y a organizaciones de la Agricultura Familiar, Campesina e Indígena. Dieciocho organizaciones productivas estuvieron involucradas en el despliegue.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── COLLAGE 3: SAI / BOMBEROS ─────────────────────────────────────── */}
            <section style={{ padding: '4rem 1.5rem', background: 'var(--surface)' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: 32, height: 2, background: '#f97316', borderRadius: 99 }} />
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f97316' }}>Cuidado territorial · SAI</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0.75rem' }}>
                        <div style={{ gridColumn: 'span 5' }}>
                            <PhotoCard
                                src="/images/bombero.jpg" alt="Bomberos voluntarios"
                                keyword="Los que cuidan" keywordSub="Antes de que llegue SAI"
                                tint="rgba(249,115,22,0.28)" size="tall"
                            />
                        </div>
                        <div style={{ gridColumn: 'span 4' }}>
                            <PhotoCard
                                src="/images/IMG_6836.jpg" alt="Territorio serrano"
                                keyword="Alerta temprana"
                                tint="rgba(220,38,38,0.22)" size="tall"
                            />
                        </div>
                        <div style={{ gridColumn: 'span 3', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <PhotoCard
                                src="/images/sanmartin.jpg" alt="San Martín"
                                keyword="Municipios"
                                tint="rgba(249,115,22,0.25)" style={{ height: 220 }}
                            />
                            <PhotoCard
                                src="/images/IMG_6842.jpg" alt="Campo serrano"
                                keyword="Comunas"
                                tint="rgba(249,115,22,0.22)" style={{ height: 220 }}
                            />
                        </div>
                    </div>

                    <div style={{ maxWidth: 680, marginTop: '2.5rem' }}>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(226,232,248,0.72)' }}>
                            Trabajar con <strong style={{ color: '#fff', fontWeight: 600 }}>bomberos voluntarios de Alta Gracia y Villa Ciudad de América</strong>, con los municipios de <strong style={{ color: '#fff', fontWeight: 600 }}>La Rancherita y La Serranita</strong>, nos obligó a entender cómo operan, qué flujos de alerta ya tienen, dónde una herramienta nueva puede encajar sin friccionar. SAI funciona en el territorio porque adaptamos la tecnología al mundo real, y no al revés.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── COLLAGE 4: ENCUENTROS / EVENTOS ─────────────────────────────── */}
            <section style={{ padding: '4rem 1.5rem', background: 'var(--bg)' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: 32, height: 2, background: 'var(--secondary)', borderRadius: 99 }} />
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--secondary)' }}>Encuentros y comunidad técnica</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                        <PhotoCard
                            src="/images/devconnect.jpg" alt="DevConnect"
                            keyword="DevConnect" keywordSub="Comunidad global"
                            tint="rgba(167,139,250,0.28)" size="normal"
                        />
                        <PhotoCard
                            src="/images/devconnect1.jpg" alt="DevConnect 2"
                            keyword="Intercambio real"
                            tint="rgba(91,75,168,0.3)" size="normal"
                        />
                        <PhotoCard
                            src="/images/edgeCity (2).jpg" alt="Edge City"
                            keyword="Edge City"
                            tint="rgba(167,139,250,0.25)" size="normal"
                        />
                    </div>
                </div>
            </section>

            {/* ── ALIADOS ────────────────────────────────────────────────────────── */}
            <section style={{ background: 'var(--surface)', padding: '5rem 1.5rem' }}>
                <div className="section-content reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.75rem' }}>
                            Con quiénes crecimos
                        </h2>
                        <p style={{ fontSize: '1rem', color: 'rgba(226,232,248,0.5)', lineHeight: 1.7 }}>
                            Organizaciones e instituciones que fueron parte de lo que AlterMundi es hoy.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Conectividad */}
                        <div>
                            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.75rem' }}>Conectividad y redes</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <AllyPill name="APC" logo="/images/logos/logo-apc.png" />
                                <AllyPill name="Internet Society" logo="/images/logos/Internet_Society_logo_and_wordmark-isoc.png" />
                                <AllyPill name="ARDC" logo="/images/logos/ARDC-Logo.jpg" />
                                <AllyPill name="IEEE · Premio 2022" logo="/images/logos/IEEE-Logo.png" />
                                <AllyPill name="BattleMesh" />
                                <AllyPill name="LibreMesh" logo="/images/logos/logo-libremesh.png" />
                                <AllyPill name="ENACOM" logo="/images/logos/logo-enacom.png" />
                                <AllyPill name="CARC" logo="/images/logos/logo-carc.png" />
                            </div>
                        </div>

                        {/* Agro */}
                        <div>
                            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#84cc16', marginBottom: '0.75rem' }}>Producción y agroecología</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <AllyPill name="CTO" />
                                <AllyPill name="Cooperativa El Espinillo" />
                                <AllyPill name="Agroecology Fund" />
                                <AllyPill name="INTA" />
                                <AllyPill name="INTI" logo="/images/logos/logo-inti.jpg" />
                                <AllyPill name="Gen Nativo" />
                                <AllyPill name="Escuela La Ramona" />
                                <AllyPill name="Ministerio Bioagroindustria Córdoba" />
                                <AllyPill name="Municipio San Marcos Sierras" />
                                <AllyPill name="Agri. Familiar, Campesina e Indígena" />
                            </div>
                        </div>

                        {/* SAI */}
                        <div>
                            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f97316', marginBottom: '0.75rem' }}>Cuidado territorial · SAI</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <AllyPill name="Bomberos Voluntarios Alta Gracia" />
                                <AllyPill name="Bomberos Voluntarios Villa Cdad. de América" />
                                <AllyPill name="Municipio La Rancherita" />
                                <AllyPill name="La Serranita" />
                                <AllyPill name="Municipios y comunas serranos" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── CIERRE ─────────────────────────────────────────────────────────── */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 1.5rem' }}>
                <img
                    src="/images/IMG_7109.jpg" alt="Comunidad AlterMundi"
                    style={{
                        position: 'absolute', inset: 0, width: '100%', height: '100%',
                        objectFit: 'cover',
                        filter: 'saturate(0.5) brightness(0.35) contrast(1.1)',
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,229,160,0.08)', mixBlendMode: 'color', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(6,13,31,0.55)', pointerEvents: 'none' }} />

                <div className="section-content reveal" style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.55, marginBottom: '2rem' }}>
                        AlterMundi creció porque se cruzó con personas e instituciones que tenían problemas reales y ganas de resolverlos juntos.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'rgba(226,232,248,0.6)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
                        Eso no es retórica. Es la descripción más precisa de lo que somos.
                    </p>
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
