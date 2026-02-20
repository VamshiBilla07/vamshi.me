"use client";

import React from "react";
import NeuralNetworkBackground from "@/components/ui/neural-network-background";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

const EventCard = ({ title, tags, status, children, isGlitch = false, variant = "cyber" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`relative w-full max-w-4xl mx-auto p-8 mb-12 overflow-hidden ${
      variant === "cyber"
        ? "bg-black/80 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        : "bg-zinc-900/90 border border-zinc-700/50"
    }`}
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs font-mono uppercase tracking-widest border ${
                variant === "cyber"
                  ? "border-blue-500/30 text-blue-400 bg-blue-500/5"
                  : "border-zinc-500/30 text-zinc-400 bg-zinc-500/5"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className={`text-4xl md:text-6xl font-display font-bold uppercase leading-tight mb-2 ${variant === "cyber" ? "text-white" : "text-zinc-200"}`}>
          {isGlitch ? <span className="relative inline-block group"><span className="relative z-10">{title}</span><span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-70 animate-pulse group-hover:translate-x-[2px] overflow-hidden">{title}</span><span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-70 animate-pulse delay-75 group-hover:-translate-x-[2px] overflow-hidden">{title}</span></span> : title}
        </h2>
        {children && <div className="mt-4 text-zinc-400 max-w-xl">{children}</div>}
      </div>
      <div className="flex flex-col items-end">
        <span className={`text-sm font-mono tracking-widest uppercase mb-1 ${variant === "cyber" ? "text-blue-500" : "text-zinc-500"}`}>Status</span>
        <span className={`text-lg font-bold border-l-4 pl-3 ${variant === "cyber" ? "border-blue-500 text-white" : "border-zinc-600 text-zinc-400"}`}>{status}</span>
      </div>
    </div>
  </motion.div>
);

export default function Education() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Neural Background */}
      <NeuralNetworkBackground nodeCount={32} connectionChance={0.13} />

      {/* Navigation */}
      <div className="z-10 w-full">
        <Navigation />
      </div>

      {/* Education Section */}
      <section className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen z-10 relative">
        <motion.h1
          className="font-display text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-zinc-200 via-zinc-400 to-zinc-600 mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h1>
        <div className="w-32 h-1 bg-linear-to-r from-blue-500 to-transparent mb-8" />
        <div className="w-full bg-zinc-900 rounded-lg p-10 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">K.C. College of Engineering & Management Studies & Research</h2>
          <p className="text-zinc-400 mb-1">Bachelor of Technology in Electronics and Telecommunication Engineering</p>
          <p className="text-zinc-500 mb-4">Sep 2025 – May 2029</p>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>Relevant coursework: Signal Processing, Embedded Systems, Communication Networks</li>
            <li>Active member of the Robotics and Coding Club</li>
            <li>Participated in national-level hackathons and technical fests</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
