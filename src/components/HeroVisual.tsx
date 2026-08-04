"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Eye } from "lucide-react";
import { profile } from "@/lib/data";

const badges = [
  { label: "Python", icon: Cpu, className: "-top-4 -left-6 sm:-left-14" },
  { label: "Computer Vision", icon: Eye, className: "top-10 -right-6 sm:-right-16" },
  { label: "Random Forest", icon: Brain, className: "bottom-20 -left-8 sm:-left-20" },
  { label: "SQL", icon: Database, className: "-bottom-4 right-2 sm:right-6" },
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center lg:flex"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, var(--accent) 0deg, transparent 100deg, transparent 260deg, var(--accent-2) 360deg)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
        }}
      />

      <div className="relative flex h-[76%] w-[76%] flex-col items-center justify-center rounded-full border border-border bg-surface/90 text-center shadow-[0_0_70px_-20px_var(--accent)] backdrop-blur-sm">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
          BS · Artificial Intelligence
        </span>
        <span className="mt-3 text-5xl font-semibold tracking-tight text-foreground">
          LK
        </span>
        <span className="mt-2 text-sm text-muted">{profile.location}</span>
        <div className="mt-6 flex gap-5 border-t border-border pt-4">
          {[
            ["3.5", "GPA"],
            ["7", "Projects"],
            ["3", "Languages"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-lg font-semibold text-accent">{value}</p>
              <p className="font-mono text-[9px] tracking-widest text-muted uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {badges.map((b, i) => (
        <motion.div
          key={b.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.9 + i * 0.15 },
            y: {
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            },
          }}
          className={`absolute flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium whitespace-nowrap text-foreground shadow-sm ${b.className}`}
        >
          <b.icon size={14} className="text-accent" />
          {b.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
