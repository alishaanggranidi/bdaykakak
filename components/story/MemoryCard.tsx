"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Memory } from "@/data/memories";

type Props = {
  memory: Memory;
};

export default function MemoryCard({
  memory,
}: Props) {
  return (
    <section className="memory-section">
      {/* Background Image */}
      <motion.div
        className="memory-image"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 12,
          ease: "easeOut",
        }}
      >
        <Image
          src={memory.image}
          alt={memory.title}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="memory-overlay" />

      {/* Content */}
      <motion.div
        className="memory-content"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <p className="memory-number">
          {memory.id.toString().padStart(2, "0")}
        </p>

        <h1 className="memory-title">
          {memory.title}
        </h1>

        <p className="memory-caption">
          {memory.caption}
        </p>
      </motion.div>
    </section>
  );
}