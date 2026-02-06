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
        particleCount={700}
        trailOpacity={0.12}
        speed={0.8}
      />
      <Navigation />
      <h1 className="text-4xl font-bold mb-8 mt-24 z-10">Technologies & Tools</h1>
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
          <img src="https://skillicons.dev/icons?i=vscode" alt="VSCode" className="h-8" />
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
          <img src="https://skillicons.dev/icons?i=sublime" alt="Sublime" className="h-8" />
          <img src="https://skillicons.dev/icons?i=php" alt="PHP" className="h-8" />
        </div>
      </div>
    </main>
  );
}
