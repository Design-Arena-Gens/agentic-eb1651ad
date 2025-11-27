"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    label: "Email",
    value: "hello@jeshuadavidedits.com",
    href: "mailto:hello@jeshuadavidedits.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeshuadavid",
    href: "https://www.linkedin.com/in/jeshuadavid",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    value: "@jeshua.david",
    href: "https://www.instagram.com/jeshua.david",
    icon: Instagram,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-32 w-full max-w-5xl overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-surface/80 via-background/80 to-surface/60 px-8 py-16 text-text-primary backdrop-blur-lg md:px-14"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.75 }}
        className="space-y-10"
      >
        <div className="space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-glow">
            Collaborations Open
          </span>
          <h2 className="font-display text-4xl md:text-5xl">
            Let&apos;s Build Your Next Narrative
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
            From luxe campaigns to raw music visuals, I cut with intention and
            deliver with speed. Drop a line for project inquiries, pitch decks,
            or remote collaborations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
          <div className="space-y-4">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="group flex items-center justify-between rounded-[28px] border border-white/10 bg-background/70 px-6 py-5 transition hover:border-accent-glow/40"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.4em] text-text-secondary">
                    {social.label}
                  </p>
                  <p className="font-display text-xl text-text-primary">
                    {social.value}
                  </p>
                </div>
                <social.icon className="h-6 w-6 text-accent-glow transition group-hover:scale-105" />
              </Link>
            ))}
          </div>
          <div className="rounded-[28px] border border-accent-glow/30 bg-accent-glow/10 p-6 text-sm text-text-secondary">
            <p className="font-mono text-xs uppercase tracking-[0.45em] text-accent-glow">
              Availability Window
            </p>
            <p className="mt-3 text-text-primary">
              Booking selective projects for Q3 2025 with remote and on-site
              options across LA, NYC, and Berlin.
            </p>
            <Link
              href="mailto:hello@jeshuadavidedits.com"
              className="mt-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.45em] text-accent-secondary"
            >
              Initiate Collaboration <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(0,209,255,0.4)_0%,_rgba(5,5,5,0)_65%)] blur-3xl" />
    </section>
  );
}
