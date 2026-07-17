"use client";

import { useState } from "react";

import WelcomeScreen from "./WelcomeScreen";
import Boot from "./Boot";
import Passcode from "./Passcode";
import PreQuiz from "./PreQuiz";
import Quiz from "./Quiz";
import Congrats from "./Congrats";

type Props = {
  onComplete: () => void;
};

type Step =
  | "welcome"
  | "boot"
  | "passcode"
  | "prequiz"
  | "quiz"
  | "congrats";

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
          onSuccess={() => setStep("prequiz")}
        />
      );

    case "prequiz":
      return (
        <PreQuiz
          onContinue={() => setStep("quiz")}
        />
      );

    case "quiz":
      return (
        <Quiz
          onComplete={() => setStep("congrats")}
        />
      );

    case "congrats":
      return (
        <Congrats
          onContinue={onComplete}
        />
      );

    default:
      return null;
  }
}
