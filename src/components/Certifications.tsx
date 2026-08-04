"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./FadeIn";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-28 sm:px-10"
    >
      <SectionHeading
        index="04"
        eyebrow="Continuous Learning"
        title="Certifications"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-gradient-to-br from-border to-border p-px transition-colors duration-500 hover:from-accent/30 hover:to-accent-2/20"
          >
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-[15px] bg-surface p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs tracking-widest text-accent uppercase">
                  <Award size={14} />
                  {cert.issuer}
                  {cert.year && <span className="text-muted">· {cert.year}</span>}
                </span>
                <ExternalLink
                  size={16}
                  className="text-muted transition-colors group-hover:text-accent"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {cert.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {cert.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
