"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./FadeIn";
import { skills } from "@/lib/data";

const allSkills = Object.values(skills).flat();

const categoryIcons: Record<string, typeof Code2> = {
  Programming: Code2,
  Tools: Wrench,
  "Soft Skills": Users,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading index="02" eyebrow="Toolkit" title="Skills" />

      <div className="grid gap-10 md:grid-cols-3">
        {Object.entries(skills).map(([category, items], idx) => {
          const Icon = categoryIcons[category] ?? Code2;
          return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-gradient-to-br from-border to-border p-px transition-colors duration-500 hover:from-accent/30 hover:to-accent-2/20"
          >
            <div className="rounded-[15px] bg-surface p-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-accent">
                  <Icon size={15} />
                </span>
                <h3 className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
                  {category}
                </h3>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {items.map((item) => (
                  <motion.span
                    key={item}
                    variants={staggerItem}
                    whileHover={{ y: -2, borderColor: "var(--accent)" }}
                    className="rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-sm text-foreground transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
          );
        })}
      </div>

      <div className="mt-16 overflow-hidden border-y border-border py-6">
        <div className="flex w-max gap-10 animate-marquee">
          {[...allSkills, ...allSkills].map((s, i) => (
            <span
              key={i}
              className="font-mono text-sm tracking-wide text-muted whitespace-nowrap"
            >
              {s} <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
