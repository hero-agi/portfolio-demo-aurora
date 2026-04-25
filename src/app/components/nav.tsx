import { Sparkles } from 'lucide-react';

interface Props { name: string; }

export function Nav({ name }: Props) {
  const initials = name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  const items = ['Work', 'Skills', 'Experience', 'Contact'];

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full backdrop-blur-xl flex items-center gap-1"
      style={{
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
      }}
    >
      <div className="flex items-center gap-2 px-4 py-2">
        <Sparkles size={16} style={{ color: '#8B5CF6' }} />
        <span className="text-white" style={{ fontWeight: 700, letterSpacing: '0.02em' }}>
          {initials}
        </span>
      </div>
      <div className="hidden md:flex items-center gap-1">
        {items.map(it => (
          <a
            key={it}
            href={`#${it.toLowerCase()}`}
            className="px-4 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition"
          >
            {it}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="ml-1 px-5 py-2 rounded-full text-white transition hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
        style={{ background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)', fontWeight: 600 }}
      >
        Hire me
      </a>
    </nav>
  );
}
