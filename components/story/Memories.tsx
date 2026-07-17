"use client";

import { useEffect, useRef } from "react";
import { memories } from "@/data/memories";
import MemoryCard from "./MemoryCard";

type Props = {
  onComplete: () => void;
};

export default function Memories({
  onComplete,
}: Props) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = endRef.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            onComplete();
          }, 1200);
        }
      },
      {
        threshold: 0.8,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [onComplete]);

  return (
    <main
      style={{
        width: "100%",
        background: "#08111F",
      }}
    >
      {memories.map((memory) => (
        <MemoryCard
          key={memory.id}
          memory={memory}
        />
      ))}

      {/* Trigger after Memory 18 */}
      <div
        ref={endRef}
        style={{
          height: 1,
        }}
      />
    </main>
  );
}