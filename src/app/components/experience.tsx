import type { PortfolioExperience } from '../data/types';

interface Props { experience: PortfolioExperience[]; }

const accentColors = [
  'linear-gradient(180deg, #8B5CF6, #EC4899)',
  'linear-gradient(180deg, #EC4899, #06B6D4)',
  'linear-gradient(180deg, #06B6D4, #8B5CF6)',
];

export function Experience({ experience }: Props) {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="relative px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="text-white/40 mb-3" style={{ fontSize: '13px', letterSpacing: '0.2em' }}>
            JOURNEY
          </div>
          <h2
            className="text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Where I've built.
          </h2>
        </div>

        <div className="relative space-y-6">
          {experience.map((e, i) => {
            const logo = e.company.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
            return (
              <div
                key={`${e.company}-${e.role}`}
                className="relative rounded-3xl p-7 md:p-8 backdrop-blur-xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                <div
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
                  style={{ background: accentColors[i % accentColors.length] }}
                />
                <div className="pl-6 grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4 flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-xl text-white"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        fontWeight: 700,
                      }}
                    >
                      {logo}
                    </div>
                    <div>
                      <div className="text-white" style={{ fontWeight: 700, fontSize: '18px' }}>{e.company}</div>
                      <div className="text-white/50" style={{ fontSize: '12px' }}>{e.period}</div>
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <div className="text-white mb-2" style={{ fontWeight: 600 }}>{e.role}</div>
                    {e.description && (
                      <p className="text-white/60" style={{ fontSize: '14px', lineHeight: 1.6 }}>{e.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
