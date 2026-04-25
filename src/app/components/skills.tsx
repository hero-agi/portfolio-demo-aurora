import type { PortfolioProfile } from '../data/types';

interface Props { profile: PortfolioProfile; }

export function Skills({ profile }: Props) {
  if (profile.badges.length === 0) return null;

  return (
    <section id="skills" className="relative px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-white/40 mb-3" style={{ fontSize: '13px', letterSpacing: '0.2em' }}>
            TOOLKIT
          </div>
          <h2
            className="text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Skills & expertise.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {profile.badges.map((skill, i) => (
            <div
              key={skill}
              className="rounded-2xl px-6 py-4 backdrop-blur-xl transition-transform hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
            >
              <div
                className="text-white text-center"
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  background: i % 3 === 0
                    ? 'linear-gradient(90deg, #8B5CF6, #06B6D4)'
                    : i % 3 === 1
                    ? 'linear-gradient(90deg, #EC4899, #8B5CF6)'
                    : 'linear-gradient(90deg, #06B6D4, #EC4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
