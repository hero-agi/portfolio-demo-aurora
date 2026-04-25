import { useRef, useState, MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { PortfolioProject } from '../data/types';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800';

interface Props { projects: PortfolioProject[]; }

function ProjectCard({ p }: { p: PortfolioProject }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -y * 8, y: x * 8 });
  };

  const summary = [p.problem, p.solution, p.result].filter(Boolean).join(' · ');

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setTilt({ x: 0, y: 0 }); }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer transition-transform duration-300"
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hover ? -8 : 0}px)`,
        transformStyle: 'preserve-3d',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 30px 60px -15px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(24px)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src={p.image || PLACEHOLDER_IMG}
          alt={p.title}
          className="w-full h-full object-cover transition-all duration-500"
          style={{
            filter: hover ? 'blur(0px) brightness(0.45)' : 'blur(20px) brightness(0.35)',
            transform: hover ? 'scale(1.05)' : 'scale(1.15)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(15,15,26,0.3) 0%, rgba(15,15,26,0.85) 100%)' }}
        />
      </div>

      <div className="relative p-7 md:p-8 flex flex-col min-h-[380px]">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-block px-3 py-1.5 rounded-full text-white"
            style={{
              background: 'linear-gradient(90deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: '12px',
              fontWeight: 600,
            }}
          >
            {p.category}
          </span>
          <div
            className="h-10 w-10 rounded-full backdrop-blur-xl flex items-center justify-center group-hover:rotate-45 transition-transform"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>

        <div className="mt-auto pt-12">
          <h3 className="text-white" style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.15 }}>
            {p.title}
          </h3>
          <p className="mt-3 text-white/60" style={{ fontSize: '14px', lineHeight: 1.6 }}>
            {summary}
          </p>
          {p.result && (
            <div
              className="mt-4 inline-block"
              style={{
                background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: '18px',
              }}
            >
              {p.result}
            </div>
          )}
          {p.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-white/80 backdrop-blur-xl"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontSize: '11px',
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects({ projects }: Props) {
  if (projects.length === 0) return null;

  const left = projects.filter((_, i) => i % 2 === 0);
  const right = projects.filter((_, i) => i % 2 === 1);

  return (
    <section id="work" className="relative px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-white/40 mb-3" style={{ fontSize: '13px', letterSpacing: '0.2em' }}>
              SELECTED WORK
            </div>
            <h2
              className="text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Projects I've shipped.
            </h2>
          </div>
          <p className="text-white/60 max-w-md" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
            Work that went from idea to production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            {left.map(p => <ProjectCard key={p.title} p={p} />)}
          </div>
          <div className="flex flex-col gap-6 md:mt-16">
            {right.map(p => <ProjectCard key={p.title} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
