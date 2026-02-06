"use client";

import React from "react";
import Navigation from "@/components/navigation";
import NeuralBackground from "@/components/ui/flow-field-background";

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Neural Background */}
      <NeuralBackground
        color="#fff"
        particleCount={800}
        trailOpacity={0.12}
        speed={0.8}
      />
      <Navigation />
      <h1 className="text-4xl font-bold mb-8 mt-24 z-10">Technologies & Tools</h1>
      <div className="flex flex-row flex-wrap gap-6 justify-center items-center z-10">
        <img src="https://skillicons.dev/icons?i=html,css,js,ts,react,next,python,cpp,git,github,tailwind,vscode,figma,aws,googlecloud,firebase,mongodb,postman,nodejs,expressjs,bootstrap,github,vite,postgresql,mysql,docker,vercel,sublime" alt="Skills" className="w-full max-w-3xl" />
      </div>
    </main>
  );
}
