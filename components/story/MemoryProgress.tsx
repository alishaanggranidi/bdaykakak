"use client";

type Props = {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function MemoryProgress({
  total,
  activeIndex,
  onSelect,
}: Props) {
  return (
    <div className="memory-progress">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          className={`memory-progress-dot ${
            i === activeIndex ? "active" : ""
          }`}
          aria-label={`Go to memory ${i + 1} of ${total}`}
        />
      ))}
    </div>
  );
}
