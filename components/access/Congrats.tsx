"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";

type Props = {
  onContinue: () => void;
};

const CONFETTI_COLORS = [
  "#034694",
  "#dba111",
  "#ffffff",
  "#1e63c4",
  "#ed1c23",
];

export default function Congrats({
  onContinue,
}: Props) {
  // Auto-advance so it feels like a celebratory beat, not a dead end.
  useEffect(() => {
    const timer = setTimeout(() => {
      onContinue();
    }, 4200);

    return () => clearTimeout(timer);
  }, [onContinue]);

  // Pre-compute confetti so positions stay stable across re-renders.
  const confetti = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 2.4 + Math.random() * 1.6,
        size: 6 + Math.random() * 8,
        color:
          CONFETTI_COLORS[
            Math.floor(Math.random() * CONFETTI_COLORS.length)
          ],
        rounded: Math.random() > 0.5,
      })),
    []
  );

  return (
    <div className="page">
      {/* Confetti layer */}
      <div className="confetti-layer">
        {confetti.map((c) => (
          <span
            key={c.id}
            className="confetti-piece"
            style={{
              left: `${c.left}%`,
              width: c.size,
              height: c.size,
              background: c.color,
              borderRadius: c.rounded ? "50%" : "2px",
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container center"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.p
          className="overline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          VERIFIED
        </motion.p>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          cie, congratulations
          <br />
          adekkk
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ marginTop: 28 }}
        >
          you passed every little test
          <br />
          now the real surprise begins
        </motion.p>
      </motion.div>
    </div>
  );
}
