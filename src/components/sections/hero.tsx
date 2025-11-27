"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";
import { HeroScene } from "@/components/three/hero-scene";

const heroVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col-reverse gap-12 px-6 py-20 md:flex-row md:gap-16 md:px-10 lg:px-16">
      <motion.div
        className="relative z-10 flex flex-1 flex-col justify-center gap-10"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-accent-glow">
            <span className="font-mono">Video Editor</span>
            <span className="font-mono text-text-secondary">Visual Storyteller</span>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.6em] text-text-secondary">
              Jeshua David Presents
            </p>
            <h1 className="mt-4 font-display text-5xl tracking-tight text-text-primary md:text-6xl lg:text-7xl">
              JESHUA <span className="text-accent-secondary">DAVID</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
              Crafting kinetic narratives with editorial polish for brands,
              artists, and filmmakers. I bridge cinematic pacing with immersive
              depth so every frame hits with intention.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-sm text-text-secondary md:flex-row md:items-center">
          <Link
            href="#reels"
            className="group inline-flex items-center gap-3 rounded-full border border-accent-glow/40 bg-surface/60 px-6 py-3 font-mono tracking-[0.3em] text-accent-secondary transition hover:border-accent-glow hover:shadow-cyan"
          >
            <Play className="h-4 w-4 transition group-hover:scale-105" />
            FEATURE REELS
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-transparent bg-accent-glow/20 px-6 py-3 font-mono tracking-[0.3em] text-accent-glow transition hover:bg-accent-glow/30"
          >
            CONNECT
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-6 border-t border-white/5 pt-6 text-xs uppercase tracking-[0.4em] text-text-secondary">
          <span className="font-mono">Commercials</span>
          <span className="font-mono">Music Videos</span>
          <span className="font-mono">Docu-Editorial</span>
        </div>
      </motion.div>

      <div className="relative flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[40px] border border-white/10 bg-grain-noise shadow-cyan"
        >
          <div className="absolute inset-0 bg-grid-surface bg-[length:40px_40px] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-surface/60 to-background/40" />
          <HeroScene />
        </motion.div>
        <div className="absolute -bottom-6 right-6 z-20 rounded-3xl border border-white/10 bg-surface/80 px-6 py-4 backdrop-blur">
          <p className="font-mono text-[11px] uppercase tracking-[0.45em] text-text-secondary">
            12+ YEARS CUTTING STORIES
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-10 h-64 bg-[radial-gradient(circle,_rgba(0,209,255,0.25)_0%,_rgba(5,5,5,0)_60%)] blur-3xl" />
    </section>
  );
}
