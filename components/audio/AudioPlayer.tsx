"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [muted, setMuted] = useState(false);
  const [videoMode, setVideoMode] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;
    audio.loop = true;

    const start = () => {
      if (started) return;

      audio.play().catch(() => {});

      setStarted(true);
    };

    window.addEventListener("click", start);
    window.addEventListener("touchstart", start);
    window.addEventListener("keydown", start);

    return () => {
      window.removeEventListener("click", start);
      window.removeEventListener("touchstart", start);
      window.removeEventListener("keydown", start);
    };
  }, [started]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const pauseMusic = () => {
      setVideoMode(true);

      let volume = audio.volume;

      const fade = setInterval(() => {
        volume -= 0.05;

        if (volume <= 0) {
          volume = 0;
          audio.pause();
          clearInterval(fade);
        }

        audio.volume = volume;
      }, 80);
    };

    const resumeMusic = () => {
      setVideoMode(false);

      audio.volume = 0;

      audio.play().catch(() => {});

      let volume = 0;

      const fade = setInterval(() => {
        volume += 0.05;

        if (volume >= 0.35) {
          volume = 0.35;
          clearInterval(fade);
        }

        audio.volume = volume;
      }, 80);
    };

    window.addEventListener("pause-music", pauseMusic);
    window.addEventListener("resume-music", resumeMusic);

    return () => {
      window.removeEventListener("pause-music", pauseMusic);
      window.removeEventListener("resume-music", resumeMusic);
    };
  }, []);

  function toggleMute() {
    const audio = audioRef.current;

    if (!audio) return;

    audio.muted = !muted;

    setMuted(!muted);
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
      />

      <button
        onClick={toggleMute}
        className="music-button"
        aria-label={muted ? "Unmute music" : "Mute music"}
      >
        {muted ? "🔇" : "🔊"}
      </button>

      <motion.div
        className="music-player"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <div className="equalizer">

          <span />

          <span />

          <span />

        </div>

        <div>

          <p className="music-title">

            {videoMode
              ? "video audio playing"
              : "18 • one direction"}

          </p>

          <p className="music-subtitle">

            {videoMode
              ? "video audio playing"
              : "background music"}

          </p>

        </div>

      </motion.div>
    </>
  );
}