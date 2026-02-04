"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import NeuralBackground from "@/components/ui/flow-field-background";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Project Alpha",
      description: "Next-gen infrastructure",
      icon: Zap,
      span: "col-span-2 row-span-2",
    },
    {
      title: "Project Beta",
      description: "AI-driven solutions",
      icon: Target,
      span: "col-span-1 row-span-1",
    },
    {
      title: "Project Gamma",
      description: "Market disruption",
      icon: Rocket,
      span: "col-span-1 row-span-1",
    },
  ];

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
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8">
        <motion.div
          className="text-center space-y-8 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo */}
          <motion.div
            className="relative inline-block"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-display text-2xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-600">
              Hey there, I'm Vamshi Billa.
            </h1>
            <div className="absolute inset-0 border-4 border-zinc-700/30 -skew-y-1" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-4xl text-zinc-400 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            As a fervent coder, I transform intricate problems into elegant, intuitive solutions. I'm a highly motivated individual who thrives on challenges and values continuous growth..
          </motion.p>
          <motion.p
            className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building the Future.
          </motion.p>

          {/* CTA */}
          <motion.button
            className="group inline-flex items-center gap-3 bg-blue-600/10 backdrop-blur-sm border border-blue-500/30 px-8 py-4 rounded-sm text-blue-400 font-medium tracking-wide hover:bg-blue-600/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>ENTER THE SYSTEM</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative z-10 px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-display text-5xl font-bold text-zinc-300 mb-4">
              EDUCATION
            </h2>
            <div className="h-1 w-32 bg-linear-to-r from-blue-500 to-transparent" />
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-3 gap-6 auto-rows-[300px]">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`${project.span} group relative overflow-hidden rounded-sm border border-zinc-800/50 bg-zinc-950/40 backdrop-blur-md hover:border-blue-500/50 transition-all cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <project.icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="font-display text-3xl font-bold text-zinc-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 tracking-wide">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center text-blue-400 text-sm font-medium">
                    <span>VIEW PROJECT</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)`,
                      backgroundSize: "50px 50px",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
          }}
        />
      </div>
    </main>
  );
}
