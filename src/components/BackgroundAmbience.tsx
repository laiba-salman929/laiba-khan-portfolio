"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundAmbience() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 25, mass: 0.5 });

  useEffect(() => {
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute h-[36rem] w-[36rem] rounded-full opacity-[0.35] blur-[100px] will-change-transform"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, var(--accent) 0%, var(--accent-2) 45%, transparent 70%)",
        }}
      />
      <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] animate-blob rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] animate-blob rounded-full bg-accent-2/25 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] animate-blob rounded-full bg-accent/10 blur-[120px] [animation-delay:-11s]" />
      <div className="noise absolute inset-0" />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #15100f0a 1px, transparent 1px), linear-gradient(to bottom, #15100f0a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
