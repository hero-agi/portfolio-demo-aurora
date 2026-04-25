import { useState, useEffect } from 'react';
import type { PortfolioData } from './types';

const FALLBACK: PortfolioData = {
  profile: {
    name: 'Your Name',
    title: 'Full-Stack Developer',
    description: 'Building products people love. Open to new opportunities.',
    badges: ['React', 'TypeScript', 'Node.js', 'Python', 'Figma'],
    stats: { years: 3, projects: 12, companies: 4 },
    availableText: 'Available for new opportunities',
  },
  projects: [],
  experience: [],
  contact: { email: 'hello@example.com' },
};

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}portfolio-data/data.json`)
      .then(r => { if (!r.ok) throw new Error('No data.json'); return r.json(); })
      .then((d: PortfolioData) => setData(d))
      .catch(() => setData(FALLBACK))
      .finally(() => setLoading(false));
  }, []);

  return { data: data ?? FALLBACK, loading };
}
