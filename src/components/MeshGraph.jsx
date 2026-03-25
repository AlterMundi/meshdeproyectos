import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

export default function MeshGraph({ graphData, onNodeClick, selectedNodeId, heroMode = false }) {
    const fgRef = useRef();
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [hoveredNodeId, setHoveredNodeId] = useState(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (heroMode && containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setDimensions({ width: rect.width, height: rect.height });
            } else {
                setDimensions({ width: window.innerWidth, height: window.innerHeight });
            }
        };
        updateDimensions();
        const handleResize = () => updateDimensions();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [heroMode]);

    // Tune forces after graph mounts — no d3 import needed, use fg.d3Force()
    const handleEngineStop = useCallback(() => {
        // only run once
    }, []);

    const handleRef = useCallback((el) => {
        if (!el) return;
        fgRef.current = el;
        // Give the graph a moment to expose d3Force
        setTimeout(() => {
            const fg = fgRef.current;
            if (!fg) return;
            try {
                fg.d3Force('charge').strength(-500);
                fg.d3Force('link').distance(link => {
                    const s = link.strength || 0.5;
                    return 110 + (1 - s) * 160;
                });
                // add collision via simulation
                const sim = fg.d3ReheatSimulation ? fg.d3ReheatSimulation : null;
                if (fg.d3Force('collide')) {
                    fg.d3Force('collide').radius(node => (node.radius || 10) + 18);
                }
            } catch (e) { /* ignore */ }
        }, 100);
    }, []);

    const links = useMemo(() => graphData.links.map(l => ({ ...l })), [graphData.links]);

    const activeId = selectedNodeId || hoveredNodeId;

    const highlightNodes = useMemo(() => {
        const set = new Set();
        if (activeId) {
            set.add(activeId);
            const node = graphData.nodes.find(n => n.id === activeId);
            node?.relatedNodes?.forEach(rn => set.add(rn));
        }
        return set;
    }, [activeId, graphData.nodes]);

    const highlightLinks = useMemo(() => {
        const set = new Set();
        if (activeId) {
            graphData.links.forEach(l => {
                const src = typeof l.source === 'object' ? l.source.id : l.source;
                const tgt = typeof l.target === 'object' ? l.target.id : l.target;
                if (src === activeId || tgt === activeId) set.add(l);
            });
        }
        return set;
    }, [activeId, graphData.links]);

    const paintNode = useCallback((node, ctx, globalScale) => {
        // nodes start with undefined x/y — skip until simulation places them
        if (!Number.isFinite(node.x) || !Number.isFinite(node.y)) return;

        const isSelected = selectedNodeId === node.id;
        const isHighlighted = highlightNodes.has(node.id);
        const isFaded = !!activeId && !isHighlighted;
        const r = node.radius || 10;
        const baseAlpha = isFaded ? 0.12 : 1;

        ctx.globalAlpha = baseAlpha;

        // Ambient glow for selected / HIT
        if (!isFaded && (isSelected || node.id === 'hit')) {
            const glowR = r + (isSelected ? 18 : 22);
            const grad = ctx.createRadialGradient(node.x, node.y, r * 0.5, node.x, node.y, glowR);
            grad.addColorStop(0, hexToRgba(node.color, 0.35));
            grad.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(node.x, node.y, glowR, 0, 2 * Math.PI);
            ctx.fillStyle = grad;
            ctx.fill();
        }

        // Hover ring
        if (hoveredNodeId === node.id && !isFaded) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, r + 6, 0, 2 * Math.PI);
            ctx.strokeStyle = hexToRgba(node.color, 0.6);
            ctx.lineWidth = 1.5;
            ctx.stroke();
        }

        // Main node body — radial gradient
        const fillGrad = ctx.createRadialGradient(node.x - r * 0.3, node.y - r * 0.35, 0, node.x, node.y, r);
        const col = isFaded ? '#333' : node.color;
        fillGrad.addColorStop(0, lighten(col, 0.32));
        fillGrad.addColorStop(1, col);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, 2 * Math.PI);
        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Border
        ctx.strokeStyle = isSelected
            ? 'rgba(255,255,255,0.9)'
            : isHighlighted
                ? 'rgba(255,255,255,0.45)'
                : 'rgba(255,255,255,0.12)';
        ctx.lineWidth = isSelected ? 2 : 0.8;
        ctx.stroke();

        // Label pill
        ctx.globalAlpha = isFaded ? 0.25 : 1;
        const fontSize = Math.max(8, Math.min(13, r * 0.65)) / globalScale;
        ctx.font = `${isSelected ? '700 ' : '400 '}${fontSize}px Inter,sans-serif`;
        const label = node.shortLabel;
        const tw = ctx.measureText(label).width;
        const pH = fontSize * 1.7;
        const pW = tw + fontSize * 1.0;
        const py = node.y + r + 5;

        ctx.fillStyle = 'rgba(5,7,16,0.75)';
        roundRect(ctx, node.x - pW / 2, py, pW, pH, 4);
        ctx.fill();

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isFaded ? 'rgba(255,255,255,0.25)' : '#fff';
        ctx.fillText(label, node.x, py + pH / 2);

        ctx.globalAlpha = 1;
    }, [selectedNodeId, hoveredNodeId, highlightNodes, activeId]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0"
            style={{
                background: heroMode
                    ? 'radial-gradient(ellipse 120% 80% at 50% 40%, #06080f 0%, #020305 100%)'
                    : 'radial-gradient(ellipse 120% 80% at 50% 40%, #0a0d1a 0%, #050709 100%)'
            }}
        >
            <ForceGraph2D
                ref={handleRef}
                width={dimensions.width}
                height={dimensions.height}
                graphData={{ nodes: graphData.nodes, links }}
                nodeLabel=""
                nodeRelSize={1}
                nodeVal={node => (node.radius || 10) ** 2}
                linkColor={link => {
                    if (!activeId) return 'rgba(255,255,255,0.1)';
                    return highlightLinks.has(link) ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.02)';
                }}
                linkWidth={link => {
                    if (!activeId) return 0.8;
                    return highlightLinks.has(link) ? 2.5 : 0.4;
                }}
                linkDirectionalParticles={link => highlightLinks.has(link) ? 4 : 1}
                linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 3 : 0.8}
                linkDirectionalParticleColor={link =>
                    highlightLinks.has(link) ? '#fff' : 'rgba(255,255,255,0.18)'
                }
                onNodeClick={node => {
                    if (heroMode) return;
                    fgRef.current?.centerAt(node.x, node.y, 800);
                    fgRef.current?.zoom(selectedNodeId === node.id ? 1.5 : 2.2, 800);
                    onNodeClick(node);
                }}
                onNodeHover={node => heroMode ? null : setHoveredNodeId(node?.id ?? null)}
                onBackgroundClick={() => {
                    if (heroMode) return;
                    onNodeClick(null);
                    fgRef.current?.zoom(1.2, 600);
                }}
                nodeCanvasObject={paintNode}
                nodePointerAreaPaint={(node, color, ctx) => {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, (node.radius || 10) + 10, 0, 2 * Math.PI);
                    ctx.fillStyle = color;
                    ctx.fill();
                }}
                cooldownTicks={180}
                d3VelocityDecay={0.3}
                d3AlphaDecay={0.02}
                onEngineStop={handleEngineStop}
            />
        </div>
    );
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function hexToRgba(hex, alpha) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = (num >> 16) & 0xff;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;
    return `rgba(${r},${g},${b},${alpha})`;
}

function lighten(hex, amount) {
    if (!hex.startsWith('#')) return hex;
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, ((num >> 16) & 0xff) + Math.round(255 * amount));
    const g = Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * amount));
    const b = Math.min(255, (num & 0xff) + Math.round(255 * amount));
    return `rgb(${r},${g},${b})`;
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}
