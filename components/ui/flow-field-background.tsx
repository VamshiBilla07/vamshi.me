/* components/ui/flow-field-background.tsx */
"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  className?: string;
  color?: string;
  trailOpacity?: number;
  particleCount?: number;
  speed?: number;
}

export default function NeuralBackground({
  className,
  color = "#fff", // white bands
  trailOpacity = 0.12, // slightly lighter trails for minimal look
  particleCount = 180, // fewer particles for minimal bands
  speed = 0.5, // slower movement for subtle effect
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: any[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      update() {
        // Minimal neural bands: use a simple, slow, smooth field
        const angle =
          (Math.sin(this.x * 0.002) + Math.cos(this.y * 0.002)) * Math.PI * 0.5;
        this.vx += Math.cos(angle) * 0.08 * speed;
        this.vy += Math.sin(angle) * 0.08 * speed;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx -= dx * force * 0.05;
          this.vy -= dy * force * 0.05;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.age++;

        if (this.age > this.life) this.reset();

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = color;
        // Minimal: thinner, longer bands
        const alpha = 0.7 - Math.abs(this.age / this.life - 0.5) * 0.7;
        context.globalAlpha = alpha;
        context.fillRect(this.x, this.y, 0.8, 4.5);
      }
    }

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particles = [];
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };

    const animate = () => {
      // Black background
      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      init();
    };

    // Disable mouse interaction: keep particles fixed, no hover effect
    // const handleMouseMove = (e: MouseEvent) => {
    //   const rect = canvas.getBoundingClientRect();
    //   mouse.x = e.clientX - rect.left;
    //   mouse.y = e.clientY - rect.top;
    // };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    // container.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      // container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, trailOpacity, particleCount, speed]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 z-0", className)}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
