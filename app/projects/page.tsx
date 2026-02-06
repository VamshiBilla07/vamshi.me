"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import NeuralBackground from "@/components/ui/flow-field-background";
import { cn } from "@/lib/utils";

// --- Components ---

const GridBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div 
      className="absolute inset-0 opacity-20" 
      style={{
        backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} 
    />
    <div className="absolute inset-0 bg-linear-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
  </div>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="border-b border-zinc-800 pb-4 mb-8 flex items-end justify-between">
    <h2 className="text-2xl font-mono text-zinc-100 uppercase tracking-widest flex items-center gap-2">
      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      {title}
    </h2>
    <span className="text-xs text-zinc-600 font-mono hidden md:block">{subtitle}</span>
  </div>
);

export default function CampusPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A] text-white overflow-x-hidden pt-24 pb-20">
      <NeuralBackground color="#fff" particleCount={800} trailOpacity={0.12} speed={0.8} />
      <Navigation />
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold text-zinc-100 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>
        <div className="space-y-12">
          <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">QuickCart: E-commerce Platform <span className="text-sm text-zinc-400">| React js, Javascript, Tailwind CSS</span></h2>
            <p className="text-blue-300 mb-2">Demo</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>Developed Frontend e-commerce platform with user authentication, product catalog, and shopping cart</li>
              <li>Implemented responsive design ensuring compatibility across mobile and desktop devices</li>
            </ul>
          </div>
          <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Project Management Tool <span className="text-sm text-zinc-400">| MERN Stack</span></h2>
            <p className="text-blue-300 mb-2">Demo</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>Built a full-stack project management tool using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline task tracking and team collaboration</li>
              <li>Implemented RESTful APIs for real-time data synchronization and user authentication</li>
              <li>Designed a responsive frontend interface with React components for efficient project workflow management</li>
            </ul>
          </div>
          <div className="bg-zinc-900 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Community Issue Reporter <span className="text-sm text-zinc-400">| TypeScript, React, Node.js, MongoDB</span></h2>
            <p className="text-blue-300 mb-2">Demo</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>Built full-stack MERN application for community issue reporting with TypeScript, React, Node.js, and MongoDB, deployed on Vercel</li>
              <li>Designed responsive React interface enabling citizens to submit, track, and manage community issues with real-time updates</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
