"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

const reels = [
  {
    title: "HYPERLUXE / HYBRID 05",
    client: "Mercedes-AMG",
    year: "2024",
    description:
      "Commercial launch edit blending motion control, particle sims, and kinetic typography for the AMG Hybrid series.",
    length: "01:28",
    role: "Lead Editor & Finishing",
    url: "#",
  },
  {
    title: "STACCATO",
    client: "Destiny Nova",
    year: "2023",
    description:
      "Music video narrative weaving analog VHS textures with CG overlays and frenetic cut patterns.",
    length: "03:21",
    role: "Editor & Color Assist",
    url: "#",
  },
  {
    title: "MOTION ORIGINS",
    client: "adidas Originals",
    year: "2024",
    description:
      "Docu-editorial mini-series focused on movement artistry, mixing handheld and drone footage with stylized overlays.",
    length: "04:06",
    role: "Supervising Editor",
    url: "#",
  },
];

export function SelectedReels() {
  return (
    <section
      id="reels"
      className="relative mx-auto mt-20 w-full max-w-6xl px-6 md:px-10 lg:px-16"
    >
      <div className="absolute inset-x-0 -top-20 h-44 bg-[radial-gradient(circle,_rgba(0,209,255,0.25)_0%,_rgba(5,5,5,0)_70%)]" />
      <SectionHeader
        eyebrow="Feature Reels"
        title="Cinematic Rhythm With Editorial Precision"
        description="Hand-cut sequences designed to amplify impact across luxury, music, and cultural storytelling."
      />

      <div className="mt-12 grid gap-8">
        {reels.map((reel, index) => (
          <motion.article
            key={reel.title}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-surface/70 via-background/40 to-surface/30 p-8 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.1, duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-grid-surface bg-[length:48px_48px] opacity-10 transition group-hover:opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,_rgba(0,209,255,0.18),_transparent_55%)] opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-text-secondary">
                  <span className="font-mono">{reel.client}</span>
                  <span className="font-mono text-accent-glow">{reel.year}</span>
                  <span className="font-mono">{reel.role}</span>
                </div>
                <h3 className="font-display text-3xl text-text-primary">
                  {reel.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
                  {reel.description}
                </p>
              </div>

              <div className="flex items-center gap-12">
                <div className="text-right font-mono text-xs uppercase tracking-[0.3em] text-text-secondary">
                  Duration
                  <p className="mt-1 text-lg text-text-primary">{reel.length}</p>
                </div>
                <Link
                  href={reel.url}
                  className="group/button relative flex h-16 w-16 items-center justify-center rounded-full border border-accent-glow/50 bg-background/70 transition hover:border-accent-glow hover:shadow-cyan"
                >
                  <ArrowUpRight className="h-6 w-6 text-accent-secondary transition group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                  <span className="sr-only">View {reel.title}</span>
                </Link>
              </div>
            </div>

            <div className="relative mt-8 flex items-center gap-6 border-t border-white/10 pt-6 text-xs text-text-secondary">
              <ExternalLink className="h-4 w-4 text-accent-glow" />
              <p className="font-mono tracking-[0.35em] uppercase">
                Delivered in HDR • Conformed for broadcast & digital
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
