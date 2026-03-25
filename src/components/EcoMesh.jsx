import { useState, useRef, useEffect } from 'react';
import {
  ECO_NODES, ECO_CONNECTIONS,
  HEX_W, HEX_H, GRID_W, GRID_H,
  getHexPos, getHexCenter,
} from '../ecoData';

// ─── Group color families ────────────────────────────────────────────────────
const GROUP_PALETTE = {
  conectividad: { bg: 'rgba(13,148,136,0.08)', border: 'rgba(13,148,136,0.3)' },
  agro:         { bg: 'rgba(22,163,74,0.08)',  border: 'rgba(22,163,74,0.3)' },
  percepcion:   { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.3)' },
  inteligencia: { bg: 'rgba(37,99,235,0.08)',  border: 'rgba(37,99,235,0.3)' },
  conceptual:   { bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.3)' },
  experimental: { bg: 'rgba(244,63,94,0.08)',  border: 'rgba(244,63,94,0.3)' },
};

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ display: 'inline', marginLeft: 4, opacity: 0.7 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function EcoMesh() {
  const [selectedId, setSelectedId] = useState(null);
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1);
  const panelRef = useRef(null);

  const selected = ECO_NODES.find(n => n.id === selectedId) || null;
  const palette = selected ? (GROUP_PALETTE[selected.group] || GROUP_PALETTE.conceptual) : null;

  // Connected node ids
  const connectedIds = selectedId
    ? ECO_CONNECTIONS
        .filter(([a, b]) => a === selectedId || b === selectedId)
        .flatMap(([a, b]) => [a, b])
        .filter(id => id !== selectedId)
    : [];

  // Scale grid to fit container on narrow screens
  useEffect(() => {
    function measure() {
      if (!wrapperRef.current) return;
      const available = wrapperRef.current.offsetWidth;
      setScale(available < GRID_W ? available / GRID_W : 1);
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  // Scroll to detail panel when node selected
  useEffect(() => {
    if (selectedId && panelRef.current) {
      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
    }
  }, [selectedId]);

  function handleHexClick(id) {
    setSelectedId(prev => prev === id ? null : id);
  }

  return (
    <div style={{ width: '100%' }}>
      {/* ── Hex grid ────────────────────────────────────────────────────────── */}
      <div ref={wrapperRef} style={{ width: '100%', overflowX: scale === 1 ? 'visible' : 'hidden' }}>
        <div style={{
          position: 'relative',
          width: GRID_W,
          height: GRID_H,
          transformOrigin: 'top center',
          transform: `scale(${scale})`,
          margin: scale < 1 ? `0 auto ${(GRID_H * scale - GRID_H)}px` : '0 auto',
        }}>
          {/* SVG connection lines */}
          <svg
            width={GRID_W} height={GRID_H}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible' }}
          >
            {ECO_CONNECTIONS.map(([aId, bId], i) => {
              const aNode = ECO_NODES.find(n => n.id === aId);
              const bNode = ECO_NODES.find(n => n.id === bId);
              const aC = getHexCenter(aNode.col, aNode.row);
              const bC = getHexCenter(bNode.col, bNode.row);
              const isActive = selectedId && (aId === selectedId || bId === selectedId);
              const activeColor = selected?.color || '#a78bfa';
              return (
                <line
                  key={i}
                  x1={aC.cx} y1={aC.cy} x2={bC.cx} y2={bC.cy}
                  stroke={isActive ? activeColor : 'rgba(167,139,250,0.18)'}
                  strokeWidth={isActive ? 2.5 : 1}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {/* Hexagons */}
          {ECO_NODES.map(node => {
            const { left, top } = getHexPos(node.col, node.row);
            const isSelected = node.id === selectedId;
            const isConnected = connectedIds.includes(node.id);
            const isDimmed = !!selectedId && !isSelected && !isConnected;
            const bgAlpha = isSelected ? 'ff' : isConnected ? 'bb' : '77';

            return (
              <button
                key={node.id}
                onClick={() => handleHexClick(node.id)}
                title={node.title}
                style={{
                  position: 'absolute',
                  left, top,
                  width: HEX_W, height: HEX_H,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  background: `${node.color}${bgAlpha}`,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  textAlign: 'center',
                  padding: '24px 14px 30px',
                  transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
                  opacity: isDimmed ? 0.28 : 1,
                  transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                  zIndex: isSelected ? 3 : 1,
                  outline: 'none',
                  gap: 0,
                }}
                onMouseEnter={e => { if (!isSelected) e.currentTarget.style.transform = 'scale(1.06)'; }}
                onMouseLeave={e => { if (!isSelected) e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <span style={{
                  display: 'block',
                  fontSize: 12, fontWeight: 800,
                  color: '#fff', lineHeight: 1.2,
                  marginBottom: 5,
                  letterSpacing: '-0.01em',
                  textShadow: '0 1px 4px rgba(0,0,0,0.4)',
                }}>
                  {node.shortLabel}
                </span>
                <span style={{
                  display: 'block',
                  fontSize: 9.5, fontWeight: 400,
                  color: 'rgba(255,255,255,0.82)',
                  lineHeight: 1.35,
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                  marginBottom: node.website ? 6 : 0,
                }}>
                  {node.tagline}
                </span>
                {node.website && (
                  <span style={{
                    display: 'block',
                    fontSize: 8, fontWeight: 600,
                    color: '#fff',
                    opacity: isSelected ? 1 : 0.55,
                    letterSpacing: '0.04em',
                    fontFamily: "'Space Mono', monospace",
                    background: 'rgba(0,0,0,0.25)',
                    borderRadius: 999,
                    padding: '1px 7px',
                    textShadow: 'none',
                    transition: 'opacity 0.2s',
                  }}>
                    {node.website.replace('https://', '')}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Detail panel ────────────────────────────────────────────────────── */}
      <div
        ref={panelRef}
        style={{
          marginTop: 32,
          background: selected ? palette.bg : 'transparent',
          border: selected ? `1px solid ${palette?.border}` : '1px solid transparent',
          borderRadius: 20,
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
          maxHeight: selected ? 2000 : 0,
          opacity: selected ? 1 : 0,
        }}
      >
        {selected && (
          <div style={{ padding: '2.5rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    width: 10, height: 10, borderRadius: '50%',
                    background: selected.color, flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: selected.color, opacity: 0.9,
                  }}>
                    {selected.group}
                  </span>
                  {selected.status && (
                    <span style={{
                      fontSize: '0.7rem', padding: '2px 10px',
                      border: `1px solid ${selected.color}50`,
                      borderRadius: 999, color: selected.color,
                    }}>
                      {selected.status}
                    </span>
                  )}
                </div>
                <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                  {selected.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'rgba(226,232,248,0.65)', margin: '0.35rem 0 0', fontWeight: 300 }}>
                  {selected.subtitle}
                </p>
                {selected.website && (
                  <a
                    href={selected.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      marginTop: '0.85rem',
                      padding: '0.45rem 1.1rem',
                      background: `${selected.color}22`,
                      border: `1.5px solid ${selected.color}70`,
                      borderRadius: 999,
                      fontSize: '0.82rem', fontWeight: 600,
                      color: selected.color,
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: '0.01em',
                    }}
                  >
                    🌐 {selected.website.replace('https://', '')}
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedId(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(226,232,248,0.4)', padding: '4px', flexShrink: 0 }}
                aria-label="Cerrar"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Two-column layout: description + features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              {/* Description */}
              <div>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'rgba(226,232,248,0.85)', margin: '0 0 1rem' }}>
                  {selected.description}
                </p>
                {selected.longDescription && (
                  <div>
                    {selected.longDescription.split('\n\n').map((para, i) => (
                      <p key={i} style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(226,232,248,0.65)', margin: '0 0 0.75rem' }}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Features */}
              {selected.features?.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.75rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', color: selected.color, marginBottom: '0.85rem', fontWeight: 700 }}>
                    Características
                  </h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {selected.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(226,232,248,0.75)' }}>
                        <span style={{ color: selected.color, flexShrink: 0, marginTop: 3 }}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actors, links, repos */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', borderTop: `1px solid ${selected.color}20`, paddingTop: '1.5rem' }}>

              {/* Actors */}
              {selected.actors?.length > 0 && (
                <div style={{ minWidth: 200 }}>
                  <h4 style={{ fontSize: '0.7rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(226,232,248,0.4)', marginBottom: '0.75rem', fontWeight: 700 }}>
                    Actores
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {selected.actors.map(a => (
                      <span key={a} style={{
                        padding: '3px 12px',
                        border: `1px solid ${selected.color}35`,
                        borderRadius: 999, fontSize: '0.78rem',
                        color: 'rgba(226,232,248,0.6)',
                        background: `${selected.color}08`,
                      }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {selected.links?.filter(l => l.url !== '#').length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.7rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(226,232,248,0.4)', marginBottom: '0.75rem', fontWeight: 700 }}>
                    Web
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {selected.links.filter(l => l.url !== '#').map(link => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.88rem', color: selected.color, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                        {link.label}<ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Repos */}
              {selected.repos?.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.7rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(226,232,248,0.4)', marginBottom: '0.75rem', fontWeight: 700 }}>
                    Repositorios
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {selected.repos.map(repo => (
                      <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.88rem', color: 'rgba(226,232,248,0.6)', textDecoration: 'none', fontFamily: "'Space Mono', monospace", display: 'inline-flex', alignItems: 'center' }}>
                        {repo.label}<ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Connected nodes */}
              {connectedIds.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.7rem', fontFamily: "'Space Mono', monospace", letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(226,232,248,0.4)', marginBottom: '0.75rem', fontWeight: 700 }}>
                    Conectado con
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {connectedIds.map(id => {
                      const n = ECO_NODES.find(x => x.id === id);
                      return (
                        <button
                          key={id}
                          onClick={() => setSelectedId(id)}
                          style={{
                            padding: '3px 12px',
                            border: `1px solid ${n.color}50`,
                            borderRadius: 999, fontSize: '0.78rem',
                            color: n.color,
                            background: `${n.color}10`,
                            cursor: 'pointer',
                          }}
                        >
                          {n.shortLabel}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
