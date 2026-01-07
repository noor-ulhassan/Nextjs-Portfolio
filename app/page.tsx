"use client"
import GithubStats from "@/components/github-stats";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import {motion} from 'framer-motion'
import Contact from "@/components/sections/Contact";
import { Footer } from "@/components/layout/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-background"> 
      <Hero/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      {/* GitHub Stats Section */}

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Github <span className="text-yellow-300">Activity</span></h2>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}>
              <GithubStats username="noor-ulhassan"/>
            </motion.div>
      </section>
      <Contact/>
      <Footer/>
      
    </main>
  );
}
