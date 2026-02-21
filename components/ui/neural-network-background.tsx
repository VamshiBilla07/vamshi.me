/* components/ui/neural-network-background.tsx */
"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeuralNetworkBackgroundProps {
  className?: string;
  nodeCount?: number;
  
}

// Black and white neural network: nodes and connecting lines
export default function NeuralNetworkBackground({
  className,
  nodeCount = 32,
  connectionChance = 0.13,
}: NeuralNetworkBackgroundProps) {
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
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    let animationId: number;

    // Generate random nodes with velocity
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    }

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;


    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      // Draw connections (lines)
      ctx.strokeStyle = "rgba(255,255,255,0.32)"; // more visible lines
      ctx.lineWidth = 1.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) { // increase threshold for more connections
            ctx.globalAlpha = 0.45 - dist / 500;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Draw nodes (circles)
      ctx.fillStyle = "#fff";
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4.2, 0, 2 * Math.PI);
        ctx.fill();
      }
    }


    function animate() {
      if (!ctx) return;
      // Move nodes gently
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }
      draw();
      animationId = requestAnimationFrame(animate);
    }

    draw();
    animate();

    // Redraw and reset nodes on resize
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
        });
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      draw();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [nodeCount, connectionChance]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 z-0", className)}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
