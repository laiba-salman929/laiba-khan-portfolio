"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Braces } from "lucide-react";
import type { MouseEvent } from "react";
import { staggerItem } from "./FadeIn";

function GithubIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.11.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.67.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

type Project = {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    api?: string;
  };
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
          {project.links?.demo || project.links?.github ? (
            <motion.a
              href={project.links?.demo ?? project.links?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted group-hover:text-accent"
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight size={18} />
            </motion.a>
          ) : (
            <motion.span
              className="text-muted group-hover:text-accent"
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight size={18} />
            </motion.span>
          )}
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

        {project.links && (
          <div className="relative mt-5 flex flex-wrap gap-3 border-t border-border pt-5">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <GithubIcon size={15} />
                Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <ArrowUpRight size={15} />
                Live demo
              </a>
            )}
            {project.links.api && (
              <a
                href={project.links.api}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                <Braces size={15} />
                API
              </a>
            )}
          </div>
        )}
      </motion.article>
    </motion.div>
  );
}
