"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PolaroidCardProps {
  image: string;
  name: string;
  role: string;
  className?: string;
}

export default function PolaroidCard({
  image,
  name,
  role,
  className,
}: PolaroidCardProps) {
  // Random rotation between -6 and 6 degrees
  const randomRotation = React.useMemo(
    () => Math.random() * 12 - 6,
    []
  );

  return (
    <motion.div
      className={cn(
        "relative bg-white p-4 pb-16 shadow-2xl cursor-pointer",
        className
      )}
      initial={{ rotate: randomRotation, scale: 1 }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        rotate: randomRotation,
      }}
    >
      {/* Image */}
      <div className="aspect-square w-full bg-zinc-200 mb-3 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Handwritten Name */}
      <div className="text-center space-y-1">
        <h3 className="font-handwriting text-2xl text-zinc-800">{name}</h3>
        <p className="font-sans text-sm text-zinc-600 uppercase tracking-wide">
          {role}
        </p>
      </div>

      {/* Tape effect at top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-100/60 shadow-sm rotate-0" />
    </motion.div>
  );
}
