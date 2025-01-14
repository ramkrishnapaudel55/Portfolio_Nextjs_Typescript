// src/app/page.tsx
import NavBar from '@/components/shared/NavBar';
import Hero from '@/components/sections/Hero';
import Contact from '@/components/sections/Contact';
import Skills from '@/components/sections/Skills';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Skills />
      <Contact />
    </main>
  );
}