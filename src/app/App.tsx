import { AuroraBg } from './components/aurora-bg';
import { Nav } from './components/nav';
import { Hero } from './components/hero';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Experience } from './components/experience';
import { Contact } from './components/contact';
import { usePortfolioData } from './data/usePortfolioData';

export default function App() {
  const { data, loading } = usePortfolioData();

  if (loading) {
    return (
      <div className="relative min-h-screen w-full overflow-x-hidden flex items-center justify-center">
        <AuroraBg />
        <div
          className="relative w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: 'rgba(139,92,246,0.8) transparent transparent transparent' }}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <AuroraBg />
      <Nav name={data.profile.name} />
      <main className="relative">
        <Hero profile={data.profile} contact={data.contact} />
        <Projects projects={data.projects} />
        <Skills profile={data.profile} />
        <Experience experience={data.experience} />
        <Contact profile={data.profile} contact={data.contact} />
      </main>
    </div>
  );
}
