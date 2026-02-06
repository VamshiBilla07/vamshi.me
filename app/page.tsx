"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import NeuralBackground from "@/components/ui/flow-field-background";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";

export default function Home() {
  // Scroll state for showing RouteInfo
  const [showRoutes, setShowRoutes] = React.useState(false);
  const RouteInfo = dynamic(() => import("@/components/RouteInfo"), { ssr: false });

  React.useEffect(() => {
    const handleScroll = () => {
      // Show RouteInfo when scrolled more than 50px vertically
      if (window.scrollY > 50) {
        setShowRoutes(true);
        console.log("RouteInfo overlay shown (scrollY > 50)");
      } else {
        setShowRoutes(false);
        console.log("RouteInfo overlay hidden (scrollY <= 50)");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              Vamshi's Portfolio
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
            Vamshi's Portfolio
          </motion.p>

          {/* CTA */}
          <motion.a
            href="https://docs.google.com/document/d/1bI_R7QOuprXSEAHQOBEu0N9JMJNCSGLP/edit?usp=sharing&ouid=107726572104961922713&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-blue-600/10 backdrop-blur-sm border border-blue-500/30 px-8 py-4 rounded-sm text-blue-400 font-medium tracking-wide hover:bg-blue-600/20 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Resume</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* Projects and education section removed for simplicity */}

      {/* RouteInfo overlay */}
      {showRoutes && (
        <div style={{ zIndex: 1001 }}>
          <RouteInfo />
        </div>
      )}

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
