"use client";

import Navigation from "@/components/navigation";
import NeuralBackground from "@/components/ui/flow-field-background";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <NeuralBackground color="#fff" particleCount={700} trailOpacity={0.12} speed={0.8} />

      {/* Navigation */}
      <Navigation />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <motion.h1 className="text-4xl font-bold mb-8 mt-24 z-10 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent" 
           initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          >Contact Me</motion.h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-8 mx-auto" />
          <p className="text-xl text-zinc-400 leading-relaxed">
            Feel free to explore my work and connect with me through my GitHub, LinkedIn, and Linktree profiles below!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <a
              href="https://github.com/VamshiBilla07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-zinc-700 text-white p-4 rounded-full transition-colors shadow-md flex items-center justify-center"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/vamshi-billa-122794371/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 text-white p-4 rounded-full transition-colors shadow-md flex items-center justify-center"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://linktr.ee/vamshi_billa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 text-white p-4 rounded-full transition-colors shadow-md flex items-center justify-center"
            >
              <SiLinktree size={30} />
            </a>
          </div>
          <div className="mt-10">
            <a
              href="https://docs.google.com/document/d/1bI_R7QOuprXSEAHQOBEu0N9JMJNCSGLP/edit?usp=sharing&ouid=107726572104961922713&rtpof=true&sd=true"
              download
              className="border-blue-500/30 px-8 py-4 rounded-sm text-blue-400 font-medium tracking-wide hover:bg-blue-600/20 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Paper Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </main>
  );
}
