"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroReveal() {
  const [phase, setPhase] = useState<"logo" | "exit" | "done">("logo");

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("exit"), 1000);
    return () => {
      clearTimeout(t1);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    const t2 = setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
    }, 700);
    return () => clearTimeout(t2);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: phase === "exit" ? "-100%" : 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: phase === "logo" ? 1 : 0, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl text-accent italic sm:text-6xl"
      >
        laiba.khan
      </motion.span>
    </motion.div>
  );
}
