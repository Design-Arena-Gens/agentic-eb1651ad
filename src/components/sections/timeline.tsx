"use client";

import { motion } from "framer-motion";
import { Calendar, Film, Trophy, Tv } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const milestones = [
  {
    year: "2021 — Present",
    title: "Senior Editor, FRAMEFORGE",
    description:
      "Leading editorial on global campaigns for tech, automotive, and luxury apparel. Building cross-discipline workflows bridging on-set creative and finishing suites.",
    icon: Tv,
  },
  {
    year: "2018 — 2021",
    title: "Lead Video Editor, NOIR ATLAS",
    description:
      "Scaled a boutique post house into a hybrid team delivering short-form narrative and commercial work with a signature tactile aesthetic.",
    icon: Film,
  },
  {
    year: "2015 — 2018",
    title: "Assistant Editor, RHYTHM COLLECTIVE",
    description:
      "Cut and conformed high-tempo music videos and branded content, refining timing instincts and multi-cam fluency.",
    icon: Calendar,
  },
  {
    year: "2014",
    title: "Cannes Lions Silver",
    description:
      "Recognized for editorial contribution on the short film ‘Neon Atlas’, a study in analog futurism and choreographed transitions.",
    icon: Trophy,
  },
];

export function Timeline() {
  return (
    <section className="relative mx-auto mt-28 w-full max-w-6xl px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="Trajectory"
        title="Editorial Lineage & Distinctions"
        description="From assistant suites to leading multi-continent campaigns, each chapter sharpened narrative intuition and technical velocity."
      />

      <div className="mt-12 space-y-8 border-l border-white/10 pl-10 md:pl-14">
        {milestones.map((item, index) => (
          <motion.article
            key={item.title}
            className="relative rounded-[28px] border border-white/10 bg-surface/60 p-8 backdrop-blur"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <div className="absolute -left-14 top-8 hidden h-12 w-12 items-center justify-center rounded-full border border-accent-glow/40 bg-background/80 md:flex">
              <item.icon className="h-5 w-5 text-accent-glow" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-glow">
              {item.year}
            </span>
            <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
