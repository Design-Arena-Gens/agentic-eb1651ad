import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.header
      className={cn(
        "max-w-3xl space-y-4 text-left md:max-w-4xl",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={variants}
    >
      {eyebrow ? (
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-glow">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl tracking-tight text-text-primary md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.header>
  );
}
