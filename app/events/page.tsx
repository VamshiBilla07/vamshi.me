"use client";

import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Components ---

const GlitchText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={cn("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-70 animate-pulse group-hover:translate-x-[2px] overflow-hidden">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-70 animate-pulse delay-75 group-hover:-translate-x-[2px] overflow-hidden">
        {text}
      </span>
    </div>
  );
};

interface EventCardProps {
  title: string;
  tags: string[];
  status: string;
  isGlitch?: boolean;
  children?: React.ReactNode;
  variant?: "cyber" | "raw";
}

const EventCard = ({ title, tags, status, isGlitch = false, children, variant = "cyber" }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative w-full max-w-4xl mx-auto p-8 mb-12 overflow-hidden",
        variant === "cyber" 
          ? "bg-black/80 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]" 
          : "bg-zinc-900/90 border border-zinc-700/50"
      )}
    >
      {/* Industrial/Cyber Decor */}
      {variant === "cyber" && (
        <>
           {/* Screws */}
          <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-blue-500/50 bg-black" />
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full border border-blue-500/50 bg-black" />
          <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full border border-blue-500/50 bg-black" />
          <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-blue-500/50 bg-black" />
          
          {/* Corner Lines */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500" />
        </>
      )}

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-2 py-1 text-xs font-mono uppercase tracking-widest border",
                  variant === "cyber" 
                    ? "border-blue-500/30 text-blue-400 bg-blue-500/5"
                    : "border-zinc-500/30 text-zinc-400 bg-zinc-500/5"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className={cn(
            "text-4xl md:text-6xl font-display font-bold uppercase leading-tight mb-2",
            variant === "cyber" ? "text-white" : "text-zinc-200"
          )}>
            {isGlitch ? <GlitchText text={title} /> : title}
          </h2>
          
          {children && <div className="mt-4 text-zinc-400 max-w-xl">{children}</div>}
        </div>

        <div className="flex flex-col items-end">
          <span className={cn(
            "text-sm font-mono tracking-widest uppercase mb-1",
            variant === "cyber" ? "text-blue-500" : "text-zinc-500"
          )}>
            Status
          </span>
          <span className={cn(
            "text-lg font-bold border-l-4 pl-3",
             variant === "cyber" ? "border-blue-500 text-white" : "border-zinc-600 text-zinc-400"
          )}>
            {status}
          </span>
        </div>
      </div>

       {/* Scanline/Grid overlay for 'raw' or 'cyber' feel */}
       {variant === "raw" && (
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
       )}
    </motion.div>
  );
};

export default function EventsPage() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-950 text-white overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Navigation />
      {/* Background */}
      <div className="fixed inset-0 z-0">
         <NeuralBackground 
           color="#A3A3A3" 
           speed={0.8} 
           particleCount={500} 
           trailOpacity={0.2}
         />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 uppercase opacity-90">
            The Arena
          </h1>
          <p className="text-zinc-400 font-mono tracking-widest mt-4">
            /// ENGAGE_PROTOCOL: ACTIVE
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          
          {/* Card 1: Singularity Hack */}
          <EventCard
            title="Singularity Hack 2026"
            tags={["Agentic AI", "Open Innovation", "Jan 17-18"]}
            status="Completed"
            isGlitch={true}
            variant="cyber"
          >
             <p>A 48-hour extensive hackathon pushing the boundaries of autonomous agents.</p>
          </EventCard>

          {/* Card 2: Failures Cafe */}
          <EventCard
            title="Failures Cafe"
            tags={["Community", "Storytelling", "Networking"]}
            status="Scheduled"
            variant="raw"
          >
            <p className="italic opacity-80">
              "Celebrating the stumbles on the way to success."
            </p>
            <p className="text-sm mt-2">
              An intimate gathering to share lessons learned from building in public.
            </p>
          </EventCard>

        </div>
      </div>
    </div>
  );
}
