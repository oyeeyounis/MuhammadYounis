import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { RealEstateSkills } from './sections/RealEstateSkills';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Certifications } from './sections/Certifications';
import { Languages } from './sections/Languages';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <RealEstateSkills />
        <Experience />
        <Education />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
