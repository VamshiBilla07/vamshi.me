"use client";

import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import NeuralNetworkBackground from "@/components/ui/neural-network-background";

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen bg-black mb-6 text-center flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Neural Background */}
      <NeuralNetworkBackground nodeCount={32} connectionChance={0.13} />
      <Navigation />
      <motion.h1 className="text-4xl font-bold mb-8 mt-24 z-10 bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          >
            Technologies & Tools</motion.h1>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-8 mx-auto sticky" />
      <div className="flex flex-row gap-70 justify-center items-start z-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <img src="https://skillicons.dev/icons?i=html" alt="HTML" className="h-8" />
          <img src="https://skillicons.dev/icons?i=css" alt="CSS" className="h-8" />
          <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" className="h-8" />
          <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" className="h-8" />
          <img src="https://skillicons.dev/icons?i=react" alt="React" className="h-8" />
          <img src="https://skillicons.dev/icons?i=next" alt="Next.js" className="h-8" />
          <img src="https://skillicons.dev/icons?i=python" alt="Python" className="h-8" />
          <img src="https://skillicons.dev/icons?i=java" alt="Java" className="h-8" />
          <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="h-8" />
          <img src="https://skillicons.dev/icons?i=git" alt="Git" className="h-8" />
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="h-8" />
          <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" className="h-8" />
          <img src="https://skillicons.dev/icons?i=flutter" alt="Flutter" className="h-8" />
          <img src="https://skillicons.dev/icons?i=kubernetes" alt="Kubernetes" className="h-8" />
          <img src="https://skillicons.dev/icons?i=npm" alt="NPM" className="h-8" />
          <img src="https://skillicons.dev/icons?i=aws" alt="AWS" className="h-8" />
          <img src="https://skillicons.dev/icons?i=googlecloud" alt="Google Cloud" className="h-8" />
          <img src="https://skillicons.dev/icons?i=firebase" alt="Firebase" className="h-8" />
          <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="h-8" />
          <img src="https://skillicons.dev/icons?i=postman" alt="Postman" className="h-8" />
        </div>
        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" className="h-8" />
          <img src="https://skillicons.dev/icons?i=expressjs" alt="Express.js" className="h-8" />
          <img src="https://skillicons.dev/icons?i=bootstrap" alt="Bootstrap" className="h-8" />
          <img src="https://skillicons.dev/icons?i=vite" alt="Vite" className="h-8" />
          <img src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" className="h-8" />
          <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="h-8" />
          <img src="https://skillicons.dev/icons?i=docker" alt="Docker" className="h-8" />
          <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" className="h-8" />
          <img src="https://skillicons.dev/icons?i=vue" alt="Vue.js" className="h-8" />
          <img src="https://skillicons.dev/icons?i=php" alt="PHP" className="h-8" />
        </div>
      </div>
    </main>
  );
}
