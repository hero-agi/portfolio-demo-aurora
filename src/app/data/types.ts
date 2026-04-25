export interface PortfolioProfile {
  name: string;
  title: string;
  photo?: string;
  description: string;
  badges: string[];
  stats: { years: number; projects: number; companies: number };
  availableText?: string;
}

export interface PortfolioProject {
  id?: string;
  title: string;
  category: string;
  image?: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface PortfolioExperience {
  id?: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface PortfolioContact {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface PortfolioData {
  profile: PortfolioProfile;
  projects: PortfolioProject[];
  experience: PortfolioExperience[];
  contact: PortfolioContact;
  template_id?: string;
  slug?: string;
  language?: string;
}
