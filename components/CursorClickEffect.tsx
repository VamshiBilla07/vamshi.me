"use client";
import React, { useEffect } from "react";

export default function CursorClickEffect() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const dot = document.createElement("div");
      dot.style.position = "fixed";
      dot.style.left = `${e.clientX - 10}px`;
      dot.style.top = `${e.clientY - 10}px`;
      dot.style.width = "20px";
      dot.style.height = "20px";
      dot.style.border = "2px solid #fff";
      dot.style.borderRadius = "50%";
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "9999";
      dot.style.background = "rgba(255,255,255,0.12)";
      dot.style.boxShadow = "0 0 8px 2px #fff8";
      dot.style.transition = "opacity 0.5s, transform 0.5s";
      document.body.appendChild(dot);
      setTimeout(() => {
        dot.style.opacity = "0";
        dot.style.transform = "scale(1.7)";
      }, 10);
      setTimeout(() => {
        dot.remove();
      }, 510);
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
  return null;
}