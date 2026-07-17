"use client";

import { useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import Boot from "./Boot";
import Passcode from "./Passcode";
import Quiz from "./Quiz";

type Props = {
  onComplete: () => void;
};

type Step =
  | "welcome"
  | "boot"
  | "passcode"
  | "quiz";

export default function AccessScreen({
  onComplete,
}: Props) {
  const [step, setStep] = useState<Step>("welcome");

  switch (step) {
    case "welcome":
      return (
        <WelcomeScreen
          onContinue={() => setStep("boot")}
        />
      );

    case "boot":
      return (
        <Boot
          onComplete={() => setStep("passcode")}
        />
      );

    case "passcode":
      return (
        <Passcode
          onSuccess={() => setStep("quiz")}
        />
      );

    case "quiz":
      return (
        <Quiz
          onComplete={onComplete}
        />
      );

    default:
      return null;
  }
}