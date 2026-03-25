import React, { useRef, useEffect } from 'react';

/**
 * HeroCanvas — bouncing mesh balls on the sides only.
 * `sidesOnly` keeps balls in the outer 32% of each edge, center stays clear.
 */
export default function HeroCanvas({ className = '', sidesOnly = false }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const nodesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const COLORS = [
            '#00e5a0', '#7b5cff', '#38bdf8', '#f472b6',
            '#fbbf24', '#34d399', '#818cf8', '#fb7185',
        ];
        const CONNECT_DIST = 150;
        // Center zone to avoid when sidesOnly (fraction of total width)
        const CENTER_START = 0.32;
        const CENTER_END = 0.68;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initNodes();
        }

        function spawnX(r) {
            if (!sidesOnly) return Math.random() * (canvas.width - r * 2) + r;
            // Spawn in left or right side
            return Math.random() < 0.5
                ? Math.random() * (canvas.width * CENTER_START - r * 2) + r
                : canvas.width * CENTER_END + Math.random() * (canvas.width * (1 - CENTER_END) - r * 2) + r;
        }

        function initNodes() {
            const area = canvas.width * canvas.height;
            const count = Math.min(40, Math.max(18, Math.floor(area / 28000)));
            const speed = 0.5;
            nodesRef.current = Array.from({ length: count }, () => {
                const r = Math.random() * 4 + 2.5; // smaller: 2.5–6.5px
                const angle = Math.random() * Math.PI * 2;
                return {
                    x: spawnX(r),
                    y: Math.random() * (canvas.height - r * 2) + r,
                    vx: Math.cos(angle) * (Math.random() * speed + 0.3),
                    vy: Math.sin(angle) * (Math.random() * speed + 0.3),
                    r,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                };
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const nodes = nodesRef.current;
            const cLeft = canvas.width * CENTER_START;
            const cRight = canvas.width * CENTER_END;

            // Connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i], b = nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECT_DIST) {
                        const alpha = (1 - dist / CONNECT_DIST) * 0.22;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(167,139,250,${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                    }
                }
            }

            // Balls
            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                n.x += n.vx;
                n.y += n.vy;

                // Wall bounce
                if (n.x - n.r < 0) { n.x = n.r; n.vx = Math.abs(n.vx); }
                if (n.x + n.r > canvas.width) { n.x = canvas.width - n.r; n.vx = -Math.abs(n.vx); }
                if (n.y - n.r < 0) { n.y = n.r; n.vy = Math.abs(n.vy); }
                if (n.y + n.r > canvas.height) { n.y = canvas.height - n.r; n.vy = -Math.abs(n.vy); }

                // Center boundary bounce (sides-only mode)
                if (sidesOnly) {
                    if (n.x > cLeft - n.r && n.x < cLeft + n.r && n.vx > 0) {
                        n.x = cLeft - n.r; n.vx = -Math.abs(n.vx);
                    }
                    if (n.x > cRight - n.r && n.x < cRight + n.r && n.vx < 0) {
                        n.x = cRight + n.r; n.vx = Math.abs(n.vx);
                    }
                }

                // Subtle glow only
                const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2);
                grd.addColorStop(0, n.color + '55');
                grd.addColorStop(1, n.color + '00');
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * 2, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Ball
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = n.color;
                ctx.globalAlpha = 0.6;
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            animRef.current = requestAnimationFrame(draw);
        }

        resize();
        draw();

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        return () => {
            cancelAnimationFrame(animRef.current);
            ro.disconnect();
        };
    }, [sidesOnly]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        />
    );
}
