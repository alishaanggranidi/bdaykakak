"use client";

import { useEffect, useRef, useState } from "react";
import { memories } from "@/data/memories";
import MemoryCard from "./MemoryCard";
import MemoryProgress from "./MemoryProgress";

type Props = {
  onComplete: () => void;
};

export default function Memories({
  onComplete,
}: Props) {
  const endRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Trigger onComplete once the very end is reached
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

  // Track which memory is currently on screen, for the
  // side progress indicator.
  useEffect(() => {
    const sections = sectionRefs.current.filter(
      (el): el is HTMLElement => el !== null
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );

            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function goToMemory(index: number) {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main
      className="memories-scroller"
      style={{
        width: "100%",
        background: "#08111F",
      }}
    >
      <MemoryProgress
        total={memories.length}
        activeIndex={activeIndex}
        onSelect={goToMemory}
      />

      {memories.map((memory, index) => (
        <MemoryCard
          key={memory.id}
          memory={memory}
          index={index}
          total={memories.length}
          sectionRef={(el) => {
            sectionRefs.current[index] = el;
          }}
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
