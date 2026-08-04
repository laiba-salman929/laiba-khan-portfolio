"use client";

import FadeIn, { staggerContainer, staggerItem } from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { profile, education } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <SectionHeading index="01" eyebrow="Profile" title="About" />

      <div className="grid gap-16 lg:grid-cols-5">
        <FadeIn className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            {profile.about}
          </p>
          <motion.dl
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3"
          >
            {[
              ["Based in", profile.location],
              ["Focus", "AI / ML / CV"],
              ["Status", "Open to work"],
            ].map(([k, v]) => (
              <motion.div key={k} variants={staggerItem}>
                <dt className="font-mono text-xs tracking-widest text-muted uppercase">
                  {k}
                </dt>
                <dd className="mt-1 text-sm text-foreground">{v}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-2"
        >
          <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted uppercase">
            Education
          </p>
          <div className="flex flex-col gap-4">
            {education.map((ed) => (
              <motion.div
                key={ed.degree}
                variants={staggerItem}
                whileHover={{ y: -3 }}
                className="rounded-2xl bg-gradient-to-br from-border to-border p-px transition-colors duration-500 hover:from-accent/30 hover:to-accent-2/20"
              >
                <div className="rounded-[15px] bg-surface p-6">
                  <p className="font-mono text-xs text-accent">{ed.period}</p>
                  <h3 className="mt-2 text-lg font-medium text-foreground">
                    {ed.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{ed.school}</p>
                  <p className="text-sm text-muted">{ed.place}</p>
                  {ed.detail && (
                    <p className="mt-3 inline-block rounded-full bg-surface-2 px-3 py-1 text-xs text-foreground">
                      {ed.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
