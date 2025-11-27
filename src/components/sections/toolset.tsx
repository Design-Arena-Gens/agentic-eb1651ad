"use client";

import { motion } from "framer-motion";
import { Cpu, HardDriveDownload, PanelsTopLeft, Waves } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const stacks = [
  {
    title: "Editorial & Finishing",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Avid Media Composer"],
    highlight: "Multi-cam, master sync, HDR delivery, conform supervision",
    icon: PanelsTopLeft,
  },
  {
    title: "Motion & FX Integration",
    tools: ["After Effects", "Cinema 4D", "Red Giant", "Octane Render"],
    highlight: "VFX plates, tracked typography, hybrid CG overlays, grain passes",
    icon: Waves,
  },
  {
    title: "Pipeline & Collaboration",
    tools: ["Frame.io", "Notion", "Resilio Sync", "LucidLink"],
    highlight: "Live review workflows, rapid turnarounds, asset orchestration",
    icon: HardDriveDownload,
  },
  {
    title: "Performance Engineering",
    tools: ["Mac Studio M2 Ultra", "Synology NAS", "DeckLink 4K", "Flanders DM240"],
    highlight: "Reference monitoring, color-managed finishing, redundancy backups",
    icon: Cpu,
  },
];

export function Toolset() {
  return (
    <section className="relative mx-auto mt-28 w-full max-w-6xl px-6 md:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 rounded-[44px] border border-accent-glow/20 bg-gradient-to-br from-background via-surface/50 to-background/70 blur-3xl" />
      <div className="relative grid gap-10 rounded-[40px] border border-white/10 bg-background/80 p-12 backdrop-blur-lg lg:grid-cols-[1.05fr_1.25fr]">
        <SectionHeader
          eyebrow="Capabilities"
          title="Tools Calibrated For Story"
          description="Technical fluency that keeps momentum—balancing robust workstations with cloud-synced review environments."
        />
        <div className="grid gap-8">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              className="group rounded-[28px] border border-white/10 bg-surface/60 p-8 transition hover:border-accent-glow/40"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">{stack.title}</h3>
                <stack.icon className="h-8 w-8 text-accent-glow" />
              </div>
              <p className="mt-4 text-sm text-text-secondary">
                {stack.highlight}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {stack.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-background/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-text-secondary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
