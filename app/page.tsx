import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";


export default function Home() {
  return (
    <main className="min-h-screen bg-background"> 
      <Hero/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      
    </main>
  );
}
