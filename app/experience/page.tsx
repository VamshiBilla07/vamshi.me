
"use client";
import NeuralBackground from "@/components/ui/flow-field-background";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Neural Background */}
      <NeuralBackground
        color="#3b82f6"
        particleCount={800}
        trailOpacity={0.12}
        speed={0.8}
      />

      {/* Navigation */}
      <div className="z-10 w-full">
        <Navigation />
      </div>

      {/* Experience Section */}
      <section className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen z-10 relative">
        <motion.h1
          className="font-display text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-600 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h1>
        <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-transparent mb-8" />
        <div className="w-full bg-zinc-900 rounded-lg p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Web Developer Intern</h2>
          <p className="text-zinc-400 mb-1">SkillCraft Technology</p>
          <p className="text-zinc-500 mb-4">Dec 2025 – Feb 2025</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>Developed and maintained web applications using React and Node.js, improving user experience by 25%</li>
            <li>Collaborated with cross-functional teams to design and implement RESTful APIs serving 10,000+ daily users</li>
            <li>Optimized database queries reducing response time by 40% and improving application performance</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
