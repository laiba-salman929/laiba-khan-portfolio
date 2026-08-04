"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { staggerContainer, staggerItem } from "./FadeIn";
import { leadership, languages } from "@/lib/data";

export default function Leadership() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading
        index="05"
        eyebrow="Beyond the Classroom"
        title="Leadership & Languages"
      />

      <div className="grid gap-16 lg:grid-cols-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-4 lg:col-span-3"
        >
          {leadership.map((item) => (
            <motion.div
              key={item.org}
              variants={staggerItem}
              className="flex flex-col gap-1 border-b border-border pb-4 last:border-none sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <span className="text-foreground">{item.role}</span>
                <span className="text-muted"> — {item.org}</span>
              </div>
              <p className="max-w-md text-sm text-muted sm:text-right">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted uppercase">
            Languages
          </p>
          <div className="flex flex-col gap-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-3"
              >
                <span className="text-sm text-foreground">{lang.name}</span>
                <span className="font-mono text-xs text-accent">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
