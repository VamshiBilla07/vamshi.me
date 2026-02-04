"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
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
    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
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
      <Navigation />
      <GridBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 gap-16">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-l-2 border-zinc-800 pl-6 py-2"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-zinc-100 uppercase tracking-tight">
            The Base
          </h1>
          <p className="text-zinc-500 font-mono mt-2 uppercase tracking-widest text-sm">
            Operational Headquarters // Sector 01
          </p>
        </motion.div>

        {/* Location 1: KC College */}
        <section>
          <SectionHeader title="Base of Operations: Alpha" subtitle="COORDINATES: 19.18° N, 72.97° E" />
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full h-[400px] bg-zinc-900 border border-zinc-800 rounded-sm relative overflow-hidden group"
          >
            {/* Placeholder Image Area */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black opacity-50" />
            
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-zinc-700 font-display text-4xl font-bold uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  Visual Feed Offline
               </span>
            </div>

            {/* Overlay UI */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col md:flex-row justify-between items-end">
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-1">KC College of Engineering</h3>
                <p className="text-zinc-400 font-mono text-sm">Thane, Mumbai</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-4">
                 <div className="px-3 py-1 border border-zinc-700 bg-black/50 text-xs font-mono text-zinc-300">
                   CAPACITY: 2000+
                 </div>
                 <div className="px-3 py-1 border border-zinc-700 bg-black/50 text-xs font-mono text-zinc-300">
                   STATUS: ACTIVE
                 </div>
              </div>
            </div>
            
            {/* Technical Lines */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600 text-right leading-relaxed">
              SYS.CHK... OK<br/>
              NET.BW... 1GBPS<br/>
              SEC.LVL... 4
            </div>
          </motion.div>
        </section>

        {/* Location 2: The Hub / E-Cell Lab */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
           <div className="md:col-span-4">
             <SectionHeader title="The Hub" subtitle="INCUBATION CENTER" />
             <div className="space-y-6">
                <div className="p-6 border border-zinc-800 bg-zinc-900/40">
                   <h4 className="text-xl font-display font-bold text-zinc-200 mb-2">E-Cell Lab</h4>
                   <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                     The central nervous system of our operations. A dedicated space for ideation, hacking, and deployment.
                   </p>
                   <ul className="space-y-2 text-sm font-mono text-zinc-500">
                     <li className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-blue-500 rounded-full" /> Headquarters for Web Dev Team
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-purple-500 rounded-full" /> Incubation Center
                     </li>
                   </ul>
                </div>
             </div>
           </div>

           <div className="md:col-span-8">
              <motion.div 
                className="group relative h-full min-h-[300px] bg-zinc-900 border border-zinc-800 p-8 flex items-center justify-center overflow-hidden cursor-crosshair transition-colors hover:border-zinc-600"
                whileHover={{ scale: 1.01 }}
              >
                  {/* Grid Lines in card */}
                  <div className="absolute inset-0 opacity-10" 
                      style={{
                        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }} 
                  />
                  
                  {/* Blueprint Graphic Placeholder */}
                  <div className="relative z-10 w-48 h-32 border-2 border-dashed border-zinc-700 rounded flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                      <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400">SCHEMATIC.SVG</span>
                  </div>

                  {/* Interaction Reveal */}
                  <div className="absolute bottom-6 right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-2 text-white font-mono text-sm">
                    <span>Join the Team</span>
                    <span>→</span>
                  </div>
              </motion.div>
           </div>
        </section>

      </main>
    </div>
  );
}
