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

  function finish() {
    // Resume background music, then move on to the ending.
    window.dispatchEvent(new Event("resume-music"));

    onComplete();
  }

  function handleEnded() {
    finish();
  }

  function handleSkip() {
    const video = videoRef.current;

    if (video) {
      video.pause();
    }

    finish();
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
            from the people
            <br />
            who love you
          </h1>

          <div className="video-wrapper">
            <video
              ref={videoRef}
              controls
              playsInline
              onEnded={handleEnded}
            >
              <source
                src="/video/birthday.mp4"
                type="video/mp4"
              />

              your browser does not support this video
            </video>
          </div>

          <div className="video-actions">
            <button
              className="btn-secondary"
              onClick={handleSkip}
            >
              skip to ending →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
