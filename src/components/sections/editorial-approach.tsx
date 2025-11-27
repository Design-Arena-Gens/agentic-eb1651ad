"use client";

import { motion } from "framer-motion";
import { Clapperboard, Layers, Sparkles, Timer } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const pillars = [
  {
    title: "Narrative Structure",
    description:
      "From pre-edit planning to final conform, I sculpt arcs that balance client objectives with emotional resonance.",
    icon: Clapperboard,
    stats: "54 narrative projects",
  },
  {
    title: "Hybrid Editorial",
    description:
      "Fusing live action with CG composites, motion design overlays, and music-driven pacing for velocity.",
    icon: Layers,
    stats: "28 hybrid composites",
  },
  {
    title: "Color & Texture Direction",
    description:
      "Look development that amplifies mood—pairing grain overlays, light leaks, and LUT sculpting with tactility.",
    icon: Sparkles,
    stats: "DaVinci Resolve | Baselight",
  },
  {
    title: "Delivery Velocity",
    description:
      "Collaborative review pipelines, version control, and quick-turn finishing to keep pace with modern releases.",
    icon: Timer,
    stats: "Avg 36h sprint cycles",
  },
];

export function EditorialApproach() {
  return (
    <section
      className="relative mx-auto mt-24 w-full max-w-6xl px-6 md:px-10 lg:px-16"
      id="approach"
    >
      <div className="absolute inset-0 rounded-[48px] border border-white/5 bg-surface/20 blur-3xl" />
      <div className="relative rounded-[44px] border border-white/10 bg-surface/40 p-12 backdrop-blur-xl">
        <SectionHeader
          eyebrow="Editorial Approach"
          title="Precision Crafted, Emotion Driven"
          description="Editing that translates vision into visceral stories. Each cut is intentional, each beat engineered to land with impact."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              className="group rounded-[32px] border border-white/10 bg-background/70 p-8 transition hover:border-accent-glow/40 hover:shadow-cyan/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <pillar.icon className="h-10 w-10 text-accent-glow" />
                <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-text-secondary">
                  {pillar.stats}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
