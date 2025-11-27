import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono as JetBrainsMono,
  Playfair_Display as PlayfairDisplay,
} from "next/font/google";
import "./globals.css";

const playfair = PlayfairDisplay({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrainsMono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeshua David — 3D Editorial Portfolio",
  description:
    "Cinematic storytelling across commercials, music videos, and branded narratives by Jeshua David, video editor & visual storyteller.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background text-text-primary antialiased`}
      >
        <div className="noise-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
