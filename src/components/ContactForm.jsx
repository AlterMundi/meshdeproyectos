import React, { useState } from 'react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        e.target.reset();
    };

    const inputStyle = {
        width: '100%',
        padding: '0.85rem 1.1rem',
        background: 'rgba(91,75,168,0.05)',
        border: '1px solid rgba(91,75,168,0.2)',
        borderRadius: 16,
        color: 'var(--text)',
        fontFamily: 'inherit',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s',
    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                    <label htmlFor="cf-name" style={{ fontSize: '0.82rem', color: 'rgba(26,26,46,0.6)', display: 'block', marginBottom: '0.35rem' }}>Nombre</label>
                    <input
                        type="text" id="cf-name" name="name" placeholder="Tu nombre"
                        required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(91,75,168,0.2)'}
                    />
                </div>
                <div>
                    <label htmlFor="cf-email" style={{ fontSize: '0.82rem', color: 'rgba(26,26,46,0.6)', display: 'block', marginBottom: '0.35rem' }}>Email</label>
                    <input
                        type="email" id="cf-email" name="email" placeholder="tu@email.com"
                        required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(91,75,168,0.2)'}
                    />
                </div>
                <div>
                    <label htmlFor="cf-message" style={{ fontSize: '0.82rem', color: 'rgba(26,26,46,0.6)', display: 'block', marginBottom: '0.35rem' }}>Mensaje</label>
                    <textarea
                        id="cf-message" name="message" rows={4} placeholder="¿En qué podemos colaborar?"
                        required
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(91,75,168,0.2)'}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: '0.95rem 2rem',
                        background: 'linear-gradient(135deg, #5b4ba8, #3f2d78)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 999,
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    }}
                    onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(91,75,168,0.3)'; }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                    <SendIcon /> Enviar Mensaje
                </button>

                {submitted && (
                    <div style={{
                        textAlign: 'center', padding: '1rem', borderRadius: 16,
                        background: 'rgba(0,168,107,0.1)', color: 'var(--primary)',
                        fontWeight: 500,
                    }}>
                        ¡Gracias por escribirnos! Te responderemos pronto.
                    </div>
                )}
            </form>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                <SocialLink href="https://github.com/AlterMundi" label="GitHub" color="var(--primary)">
                    <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://t.me/altermundi" label="Telegram" color="var(--secondary)">
                    <TelegramIcon />
                </SocialLink>
                <SocialLink href="mailto:info@altermundi.net" label="Email" color="var(--accent-warm)">
                    <MailIcon />
                </SocialLink>
            </div>
        </div>
    );
}

function SocialLink({ href, label, color, children }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank" rel="noopener noreferrer"
            style={{
                width: 48, height: 48, borderRadius: '50%',
                border: '1px solid rgba(91,75,168,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text)', textDecoration: 'none',
                transition: 'all 0.3s',
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(91,75,168,0.15)'; e.currentTarget.style.color = 'var(--text)'; }}
        >
            {children}
        </a>
    );
}

const SendIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);
const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);
const TelegramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);
const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
);
