import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#121212",
        "text-primary": "#EDEDED",
        "text-secondary": "#888888",
        "accent-glow": "#00D1FF",
        "accent-secondary": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        cyan: "0 0 35px rgba(0, 209, 255, 0.35)",
      },
      backgroundImage: {
        "grain-noise":
          "radial-gradient(circle at 20% 20%, rgba(0, 209, 255, 0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255, 255, 255, 0.08), transparent 55%), linear-gradient(135deg, rgba(18, 18, 18, 0.85), rgba(5, 5, 5, 0.95))",
        "grid-surface":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flicker: "flicker 2.5s infinite",
        marquee: "marquee 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
