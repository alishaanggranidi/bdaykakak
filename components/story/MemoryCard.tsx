"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Memory } from "@/data/memories";

type Props = {
  memory: Memory;
  index: number;
  total: number;
  sectionRef?: (el: HTMLElement | null) => void;
};

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function MemoryCard({
  memory,
  index,
  total,
  sectionRef,
}: Props) {
  // Alternate the pan direction per photo so the Ken Burns
  // effect feels curated rather than a single repeated zoom.
  const panX = index % 2 === 0 ? 22 : -22;
  const panY = index % 3 === 0 ? -16 : 12;

  return (
    <section
      className="memory-section"
      ref={sectionRef}
      data-index={index}
    >
      {/* Background Image */}
      <motion.div
        className="memory-image"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{ scale: 1.14, x: panX, y: panY }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <Image
          src={memory.image}
          alt={memory.title}
          fill
          priority={memory.id === 1}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>

      {/* Dark Overlay + Vignette */}
      <div className="memory-overlay" />
      <div className="memory-vignette" />

      {/* Content */}
      <motion.div
        className="memory-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={contentVariants}
      >
        <motion.p className="memory-number" variants={itemVariants}>
          {String(memory.id).padStart(2, "0")}
          <span className="memory-number-total">
            {" "}
            / {String(total).padStart(2, "0")}
          </span>
        </motion.p>

        <motion.h1 className="memory-title" variants={itemVariants}>
          {memory.title}
        </motion.h1>

        <motion.p className="memory-caption" variants={itemVariants}>
          {memory.caption}
        </motion.p>
      </motion.div>

      {index === 0 && (
        <motion.div
          className="memory-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span>Scroll</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
