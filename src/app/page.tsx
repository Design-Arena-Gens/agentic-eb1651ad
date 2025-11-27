import { Contact } from "@/components/sections/contact";
import { EditorialApproach } from "@/components/sections/editorial-approach";
import { Hero } from "@/components/sections/hero";
import { SelectedReels } from "@/components/sections/selected-reels";
import { Timeline } from "@/components/sections/timeline";
import { Toolset } from "@/components/sections/toolset";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[240px] bg-[linear-gradient(to_bottom,rgba(0,209,255,0.18),transparent)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1480px] flex-col gap-24 pb-32">
        <header className="flex items-center justify-between px-6 pt-10 md:px-10 lg:px-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.45em] text-accent-glow">
              Jeshua David Portfolio
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.32em] text-text-secondary">
              Video Editor & Visual Storyteller
            </p>
          </div>
          <div className="hidden gap-6 text-xs uppercase tracking-[0.32em] text-text-secondary md:flex">
            <a href="#reels" className="hover:text-accent-glow">
              Reels
            </a>
            <a href="#approach" className="hover:text-accent-glow">
              Approach
            </a>
            <a href="#contact" className="hover:text-accent-glow">
              Contact
            </a>
          </div>
        </header>

        <Hero />
        <SelectedReels />
        <EditorialApproach />
        <Timeline />
        <Toolset />
        <Contact />
        <footer className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10 lg:px-16">
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.35em] text-text-secondary md:flex-row md:items-center md:justify-between">
            <p className="font-mono">
              © {new Date().getFullYear()} Jeshua David — Crafted for Vercel
            </p>
            <p className="font-mono">Based in Los Angeles · Working Worldwide</p>
          </div>
        </footer>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,209,255,0.15)_0%,_transparent_55%)]" />
    </main>
  );
}
