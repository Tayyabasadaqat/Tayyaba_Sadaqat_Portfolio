"use client";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects"
import Expereince from "@/components/sections/Experience"
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
    </main>
  );
}