import React, { useState, useEffect } from 'react';
import MeshGraph from './components/MeshGraph';
import DetailPanel from './components/DetailPanel';
import { initialData, CATEGORIES } from './data';
import './index.css';

function Starfield() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 120 }).map((_, i) => {
        const size = Math.random() * 2 + 0.5;
        const delay = Math.random() * 8;
        const duration = 4 + Math.random() * 8;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(255,255,255,${0.1 + Math.random() * 0.4})`,
              animation: `twinkle ${duration}s ${delay}s ease-in-out infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function CategoryLegend() {
  return (
    <div
      className="absolute bottom-6 left-6 z-20 rounded-2xl p-4 hidden md:block"
      style={{ background: 'rgba(10,12,22,0.85)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Áreas</p>
      <div className="space-y-2">
        {Object.entries(CATEGORIES).map(([key, cat]) => (
          <div key={key} className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}` }} />
            <span className="text-xs text-white/55">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HintBadge({ visible }) {
  return (
    <div
      className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full transition-opacity duration-700"
      style={{
        background: 'rgba(10,12,22,0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)',
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="w-2 h-2 rounded-full animate-pulse bg-violet-400" />
      <span className="text-xs text-white/50">Hacé click en un nodo para explorar</span>
    </div>
  );
}

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
    if (node) setShowHint(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans text-white select-none" style={{ background: '#060810' }}>

      {/* Stars */}
      <Starfield />

      {/* Mesh */}
      <MeshGraph
        graphData={initialData}
        onNodeClick={handleNodeClick}
        selectedNodeId={selectedNode?.id}
      />

      {/* Floating header — shown only when no panel */}
      <div
        className="absolute top-0 left-0 w-full p-6 md:p-10 pointer-events-none z-10 transition-opacity duration-500"
        style={{ opacity: selectedNode ? 0 : 1 }}
      >
        <div className="max-w-2xl">
          <h1
            className="text-5xl md:text-6xl font-black tracking-tight mb-3"
            style={{
              background: 'linear-gradient(135deg, #fff 30%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AlterMundi
          </h1>
          <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
            Empezamos construyendo redes abiertas.<br />
            Hoy estamos construyendo una infraestructura distribuida<br className="hidden md:block" />
            para percibir, organizar e interpretar la información como relación.
          </p>
          <p className="text-xs text-white/25 mt-4 tracking-wider">
            De la mesh a los ratios · De conectar dispositivos a interpretar relaciones
          </p>
        </div>
      </div>

      {/* Minimal brand when panel is open */}
      {selectedNode && (
        <div className="absolute top-4 left-6 z-20 pointer-events-none">
          <span
            className="text-lg font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #fff 30%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AlterMundi
          </span>
        </div>
      )}

      {/* Legend */}
      <CategoryLegend />

      {/* Hint */}
      {!selectedNode && <HintBadge visible={showHint} />}

      {/* Detail panel */}
      <DetailPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
    </div>
  );
}
