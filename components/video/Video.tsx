"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  onComplete: () => void;
};

export default function Video({
  onComplete,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Pause background music
    window.dispatchEvent(new Event("pause-music"));

    video.play().catch(() => {});
  }, []);

  function handleEnded() {
    // Resume background music
    window.dispatchEvent(new Event("resume-music"));

    onComplete();
  }

  return (
    <div
      className="page"
      style={{
        background: "#000",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1200,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: .8,
          }}
        >
          <p className="overline">
            BIRTHDAY WISHES
          </p>

          <h1
            className="title"
            style={{
              marginBottom: 48,
            }}
          >
            From the people
            <br />
            who love you.
          </h1>

          <video
            ref={videoRef}
            className="birthday-video"
            controls
            playsInline
            onEnded={handleEnded}
          >
            <source
              src="/video/birthday.mp4"
              type="video/mp4"
            />

            Your browser does not support this video.
          </video>
        </motion.div>
      </div>
    </div>
  );
}