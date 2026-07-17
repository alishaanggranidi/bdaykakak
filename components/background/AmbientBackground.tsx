"use client";

import { useMemo } from "react";

/**
 * Subtle decorative layer for the dark navy theme:
 *  - a few big, slow-drifting blurred orbs for gentle motion
 *  - scattered twinkling particles so the background isn't flat
 * Purely cosmetic, sits behind all content, ignores pointer events.
 */
export default function AmbientBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 46 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 1.5 + Math.random() * 2.5,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 6,
        drift: (Math.random() * 2 - 1) * 14,
      })),
    []
  );

  return (
    <div className="ambient" aria-hidden>
      {/* soft drifting glows */}
      <span className="ambient-orb ambient-orb-1" />
      <span className="ambient-orb ambient-orb-2" />
      <span className="ambient-orb ambient-orb-3" />

      {/* twinkling particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="ambient-star"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            // custom prop consumed by the keyframes
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
