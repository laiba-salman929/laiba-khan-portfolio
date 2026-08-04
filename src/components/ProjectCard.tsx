"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { staggerItem } from "./FadeIn";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tags: string[];
};

export default function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      variants={staggerItem}
      className={`relative h-full rounded-2xl ${
        featured
          ? "bg-gradient-to-br from-accent/50 via-border to-accent-2/40 p-[1.5px] md:col-span-2 lg:col-span-2"
          : "bg-gradient-to-br from-border via-border to-border p-px hover:from-accent/30 hover:to-accent-2/20"
      } transition-colors duration-500`}
    >
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[15px] p-7 ${
          featured
            ? "bg-gradient-to-br from-surface to-surface-2"
            : "bg-surface"
        }`}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(220px circle at ${x} ${y}, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)`
            ),
          }}
        />

        <div className="relative flex items-start justify-between">
          <span className="flex items-center gap-2 font-mono text-xs text-muted">
            {String(index + 1).padStart(2, "0")}
            {featured && (
              <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent-contrast uppercase">
                Featured
              </span>
            )}
          </span>
          <motion.span
            className="text-muted group-hover:text-accent"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUpRight size={18} />
          </motion.span>
        </div>

        <h3 className={`relative mt-5 font-semibold text-foreground ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="relative mt-1 font-mono text-xs tracking-wide text-accent">
          {project.subtitle}
        </p>

        <p className={`relative mt-4 leading-relaxed text-muted ${featured ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        <ul className="relative mt-5 flex flex-col gap-2">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ y: -2, scale: 1.05 }}
              className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.article>
    </motion.div>
  );
}
