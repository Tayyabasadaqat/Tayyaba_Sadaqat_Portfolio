"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import CreativeWork from "@/components/sections/CreativeWork";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <About />
      <Education />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <CreativeWork />
      <Contact />
    </main>
  );
}