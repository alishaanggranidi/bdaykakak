"use client";

import { useState } from "react";

import AccessScreen from "@/components/access/AccessScreen";

import GiftSelection from "@/components/gift/GiftSelection";

import Love from "@/components/gift/Love";
import Intro from "@/components/story/Intro";
import Memories from "@/components/story/Memories";
import Letter from "@/components/story/Letter";

import VideoIntro from "@/components/video/VideoIntro";
import Video from "@/components/video/Video";

import Ending from "@/components/ending/Ending";

import AudioPlayer from "@/components/audio/AudioPlayer";
import AmbientBackground from "@/components/background/AmbientBackground";

type Screen =
  | "access"
  | "gift"
  | "love"
  | "intro"
  | "memories"
  | "letter"
  | "videoIntro"
  | "video"
  | "ending";

export default function Home() {
  const [screen, setScreen] =
    useState<Screen>("access");

  function restart() {
    setScreen("access");
  }

  return (
    <>
      <AmbientBackground />

      <AudioPlayer />

      {screen === "access" && (
        <AccessScreen
          onComplete={() =>
            setScreen("gift")
          }
        />
      )}

      {screen === "gift" && (
        <GiftSelection
          onSelect={() =>
            setScreen("love")
          }
        />
      )}

      {screen === "love" && (
        <Love
          onComplete={() =>
            setScreen("intro")
          }
        />
      )}

      {screen === "intro" && (
        <Intro
          onComplete={() =>
            setScreen("memories")
          }
        />
      )}

      {screen === "memories" && (
        <Memories
          onComplete={() =>
            setScreen("letter")
          }
        />
      )}

      {screen === "letter" && (
        <Letter
          onComplete={() =>
            setScreen("videoIntro")
          }
        />
      )}

      {screen === "videoIntro" && (
        <VideoIntro
          onComplete={() =>
            setScreen("video")
          }
        />
      )}

      {screen === "video" && (
        <Video
          onComplete={() =>
            setScreen("ending")
          }
        />
      )}

      {screen === "ending" && (
        <Ending
          onRestart={restart}
        />
      )}
    </>
  );
}