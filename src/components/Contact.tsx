"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import FadeIn from "./FadeIn";

function LinkedInIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 sm:px-10">
      <FadeIn className="flex flex-col items-start gap-3">
        <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
          06 / Contact
        </p>
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Let&apos;s build something{" "}
          <span className="font-display font-normal text-accent italic">
            intelligent
          </span>{" "}
          together.
        </h2>
        <p className="mt-2 max-w-lg text-muted">
          Open to internships and entry-level roles in AI, ML, and data
          science. Reach out — I reply quickly.
        </p>
      </FadeIn>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 grid gap-4 sm:grid-cols-3"
      >
        {[
          { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
          { icon: LinkedInIcon, label: "LinkedIn", value: "laiba-khan", href: profile.linkedin },
          { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
        ].map(({ icon: Icon, label, value, href }) => (
          <div
            key={label}
            className="group rounded-2xl bg-gradient-to-br from-border to-border p-px transition-colors duration-500 hover:from-accent/30 hover:to-accent-2/20"
          >
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex h-full flex-col gap-4 rounded-[15px] bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <Icon size={18} className="text-accent" />
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest text-muted uppercase">
                  {label}
                </p>
                <p className="mt-1 text-sm text-foreground break-all">{value}</p>
              </div>
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
