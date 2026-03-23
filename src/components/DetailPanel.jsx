import React, { useState } from 'react';
import { X, ExternalLink, Github, Layers, Lightbulb, Star, Users } from 'lucide-react';

const TABS = [
    { id: 'desc', label: 'Descripción', icon: Layers },
    { id: 'ideas', label: 'Ideas clave', icon: Lightbulb },
    { id: 'features', label: 'Características', icon: Star },
    { id: 'recursos', label: 'Recursos', icon: Users },
];

export default function DetailPanel({ node, onClose }) {
    const [activeTab, setActiveTab] = useState('desc');

    // Reset tab when node changes
    React.useEffect(() => { setActiveTab('desc'); }, [node?.id]);

    if (!node) return null;

    const hasResources = (node.links?.length > 0) || (node.repos?.length > 0);

    return (
        <div
            className="fixed bottom-0 left-0 w-full z-50 text-white"
            style={{
                maxHeight: '65vh',
                background: 'linear-gradient(to top, rgba(6,8,16,0.99) 0%, rgba(10,12,22,0.96) 100%)',
                backdropFilter: 'blur(24px)',
                borderTop: `1px solid ${node.color}40`,
                boxShadow: `0 -20px 80px -20px ${node.glowColor || node.color + '40'}`,
            }}
        >
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full transition"
                style={{ background: 'rgba(255,255,255,0.07)' }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            >
                <X size={18} />
            </button>

            <div className="overflow-y-auto" style={{ maxHeight: '65vh' }}>
                <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8 pb-10">

                    {/* Header row */}
                    <div className="flex items-start gap-5 mb-6">
                        {/* Color disc */}
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-full mt-1"
                            style={{
                                background: `radial-gradient(circle at 30% 30%, ${lighten(node.color, 0.35)}, ${node.color})`,
                                boxShadow: `0 0 24px ${node.glowColor || node.color}`,
                            }}
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: node.color }}>
                                {node.subtitle}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                                {node.title}
                            </h2>
                            {node.status && (
                                <span
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mt-3"
                                    style={{ background: (node.statusColor || node.color) + '25', color: node.statusColor || node.color, border: `1px solid ${node.statusColor || node.color}40` }}
                                >
                                    {node.status}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Quote */}
                    {node.quote && (
                        <blockquote
                            className="text-base md:text-lg font-light italic mb-6 pl-4"
                            style={{ borderLeft: `3px solid ${node.color}`, color: 'rgba(255,255,255,0.75)' }}
                        >
                            "{node.quote}"
                        </blockquote>
                    )}

                    {/* Tabs */}
                    <div className="flex gap-1 mb-6 flex-wrap" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                        {TABS.filter(t => {
                            if (t.id === 'recursos' && !hasResources) return false;
                            if (t.id === 'ideas' && (!node.keyIdeas || node.keyIdeas.length === 0)) return false;
                            return true;
                        }).map(tab => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all"
                                    style={{
                                        color: isActive ? node.color : 'rgba(255,255,255,0.5)',
                                        borderBottom: isActive ? `2px solid ${node.color}` : '2px solid transparent',
                                        marginBottom: '-1px',
                                    }}
                                >
                                    <Icon size={14} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[6rem]">
                        {activeTab === 'desc' && (
                            <div className="max-w-3xl">
                                <p className="text-base text-white/90 font-light leading-relaxed mb-4">
                                    {node.shortDescription}
                                </p>
                                {node.longDescription && (
                                    <div className="text-sm text-white/65 leading-relaxed space-y-3">
                                        {node.longDescription.split('\n\n').map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'ideas' && node.keyIdeas && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {node.keyIdeas.map((idea, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 p-4 rounded-xl"
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                                    >
                                        <span
                                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                                            style={{ background: node.color + '30', color: node.color }}
                                        >
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-white/80 leading-relaxed">{idea}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {activeTab === 'features' && (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                {node.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-white/75">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: node.color }} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {activeTab === 'recursos' && (
                            <div className="flex flex-wrap gap-3">
                                {node.links?.map((l, i) => (
                                    <a
                                        key={`link-${i}`}
                                        href={l.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm transition"
                                        style={{
                                            background: node.color + '20',
                                            border: `1px solid ${node.color}40`,
                                            color: node.color,
                                        }}
                                        onMouseOver={e => e.currentTarget.style.background = node.color + '35'}
                                        onMouseOut={e => e.currentTarget.style.background = node.color + '20'}
                                    >
                                        <ExternalLink size={14} />
                                        {l.label}
                                    </a>
                                ))}
                                {node.repos?.map((r, i) => (
                                    <a
                                        key={`repo-${i}`}
                                        href={r.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm transition"
                                        style={{
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            color: 'rgba(255,255,255,0.8)',
                                        }}
                                        onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                                    >
                                        <Github size={14} />
                                        {r.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Related nodes pill row */}
                    {node.relatedNodes?.length > 0 && (
                        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                            <p className="text-xs uppercase tracking-widest text-white/35 mb-3">Conectado con</p>
                            <div className="flex flex-wrap gap-2">
                                {node.relatedNodes.map(rn => (
                                    <span
                                        key={rn}
                                        className="px-3 py-1 rounded-full text-xs text-white/50"
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        {rn.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function lighten(hex, amount) {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.min(255, (num >> 16) + Math.round(255 * amount));
    const g = Math.min(255, ((num >> 8) & 0xff) + Math.round(255 * amount));
    const b = Math.min(255, (num & 0xff) + Math.round(255 * amount));
    return `rgb(${r},${g},${b})`;
}
