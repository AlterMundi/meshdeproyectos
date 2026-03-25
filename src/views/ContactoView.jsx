import React from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactoView() {
    const logos = [
        { src: '/images/logos/logo-inti.jpg', alt: 'INTI' },
        { src: '/images/logos/ARDC-Logo.jpg', alt: 'ARDC' },
        { src: '/images/logos/IEEE-Logo.png', alt: 'IEEE' },
        { src: '/images/logos/logo-enacom.png', alt: 'ENACOM' },
        { src: '/images/logos/Internet_Society_logo_and_wordmark-isoc.png', alt: 'ISOC' },
        { src: '/images/logos/logo-apc.png', alt: 'APC' },
    ];

    return (
        <div className="view-transition" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <section className="section-content" style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1.5rem' }}>
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", color: 'var(--secondary)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Conectá</p>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text)' }}>Contacto</h1>
                    <p style={{ color: 'rgba(26,26,46,0.6)', marginTop: '1rem', fontSize: '1.1rem' }}>
                        ¿Querés colaborar, sumarte o simplemente conversar sobre el universo AlterMundi? Escribinos.
                    </p>
                </div>

                <div className="reveal" style={{ marginBottom: '5rem' }}>
                    <ContactForm />
                </div>

                <div className="reveal" style={{ textAlign: 'center', paddingTop: '3rem', borderTop: '1px solid rgba(91,75,168,0.1)' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>Nuestras Alianzas y Trayectoria</h3>
                    <p style={{ color: 'rgba(26,26,46,0.7)', marginBottom: '3rem', maxWidth: 600, margin: '0 auto 3rem' }}>
                        Durante más de 15 años hemos articulado trabajo con organizaciones globales, universidades, gobiernos y comunidades para democratizar la tecnología.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
                        {logos.map((l, i) => (
                            <img key={i} src={l.src} alt={l.alt}
                                style={{ maxWidth: 120, maxHeight: 60, objectFit: 'contain', filter: 'grayscale(100%) opacity(0.6)', transition: 'all 0.3s' }}
                                onMouseOver={e => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'; e.currentTarget.style.transform = 'scale(1.05)'; }}
                                onMouseOut={e => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)'; e.currentTarget.style.transform = 'scale(1)'; }} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
