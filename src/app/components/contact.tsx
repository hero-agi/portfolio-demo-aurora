import { Mail, Linkedin, Github, Twitter, ArrowUpRight } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; }

export function Contact({ profile, contact }: Props) {
  const socials = [
    { Icon: Mail,     label: 'Email',    href: `mailto:${contact.email}` },
    { Icon: Linkedin, label: 'LinkedIn', href: contact.linkedin || '' },
    { Icon: Twitter,  label: 'Twitter',  href: contact.twitter  || '' },
    { Icon: Github,   label: 'GitHub',   href: contact.github   || '' },
  ].filter(s => s.href);

  return (
    <section id="contact" className="relative px-6 md:px-16 py-24">
      <div className="max-w-3xl mx-auto">
        <div
          className="relative rounded-[2rem] p-10 md:p-14 text-center backdrop-blur-xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 40px 80px -20px rgba(139,92,246,0.35)',
          }}
        >
          <div className="text-white/40 mb-4" style={{ fontSize: '13px', letterSpacing: '0.2em' }}>
            GET IN TOUCH
          </div>
          <h2
            className="text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05 }}
          >
            Let's{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              connect.
            </span>
          </h2>
          <p className="mt-6 text-white/60 max-w-xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
            {profile.description}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-10 px-8 py-4 rounded-full text-white inline-flex items-center gap-2 transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] hover:scale-[1.03]"
            style={{ background: 'linear-gradient(90deg, #8B5CF6 0%, #06B6D4 100%)', fontWeight: 600 }}
          >
            {contact.email}
            <ArrowUpRight size={18} />
          </a>

          {socials.length > 0 && (
            <div className="mt-12 flex items-center justify-center gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full backdrop-blur-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                  }}
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 text-center text-white/40" style={{ fontSize: '13px' }}>
          © {new Date().getFullYear()} {profile.name}
        </div>
      </div>
    </section>
  );
}
