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
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
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
  const panX = index % 2 === 0 ? 14 : -14;
  const panY = index % 3 === 0 ? -10 : 8;

  return (
    <section
      className="memory-section"
      ref={sectionRef}
      data-index={index}
    >
      {/* Soft blurred backdrop (same photo) for depth */}
      <div className="memory-backdrop">
        <Image
          src={memory.image}
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="memory-overlay" />
      <div className="memory-vignette" />

      {/* Foreground content */}
      <motion.div
        className="memory-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={contentVariants}
      >
        {/* Square photo frame */}
        <motion.div className="memory-frame" variants={itemVariants}>
          <motion.div
            className="memory-image"
            initial={{ scale: 1.02, x: 0, y: 0 }}
            whileInView={{ scale: 1.14, x: panX, y: panY }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 14, ease: "easeOut" }}
          >
            <Image
              src={memory.image}
              alt={memory.title}
              fill
              priority={memory.id === 1}
              sizes="(max-width: 700px) 84vw, 460px"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </motion.div>

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
