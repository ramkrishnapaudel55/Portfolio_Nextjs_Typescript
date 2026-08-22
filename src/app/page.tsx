// src/app/page.tsx
import NavBar from '@/components/shared/NavBar';
import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ram Krishna Paudel',
    alternateName: ['Ram Krishna Poudel', 'Ramkrishna Paudel', 'Ramkrishna Poudel'],
    url: 'https://www.ramkrishnapaudel55.com.np',
    jobTitle: ['Software Engineer', 'Backend Developer', 'Backend Engineer', 'Software Developer'],
    knowsAbout: [
      'Backend Development',
      'Software Engineering',
      'Web Development',
      'Node.js',
      'Python',
      'APIs',
      'Scalable Systems'
    ],
    nationality: {
      '@type': 'Country',
      name: 'Nepal'
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}