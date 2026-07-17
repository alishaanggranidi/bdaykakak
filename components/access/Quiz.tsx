"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  onComplete: () => void;
};

const QUESTIONS = [
  {
    question: "what's caca's favorite flower?",
    options: ["rose", "tulip", "sunflower"],
    answer: "tulip",
  },
  {
    question: "when was our first kiss?",
    options: ["4 january", "5 january", "8 march"],
    answer: "5 january",
  },
  {
    question: "what do i usually call you?",
    options: ["kakak", "sayang", "adek"],
    answer: "adek",
  },
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export default function Quiz({ onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [shake, setShake] = useState(false);

  const question = QUESTIONS[current];

  // Re-shuffled only when we move to a new question, so the
  // correct answer isn't stuck in the same spot every time.
  const options = useMemo(
    () => shuffle(QUESTIONS[current].options),
    [current]
  );

  function handleAnswer(answer: string) {
    if (selected) return;

    setSelected(answer);

    if (answer !== question.answer) {
      setShake(true);

      setTimeout(() => {
        setShake(false);
        setSelected("");
      }, 600);

      return;
    }

    setTimeout(() => {
      if (current === QUESTIONS.length - 1) {
        onComplete();
      } else {
        setCurrent((prev) => prev + 1);
        setSelected("");
      }
    }, 500);
  }

  return (
    <div className="page">
      <div className="container center">

        <motion.div
          key={current}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="quiz-card"
        >
          <p className="overline">
            LITTLE QUIZ
          </p>

          <h1 className="title">
            question {current + 1}
          </h1>

          <p className="subtitle">
            {question.question}
          </p>

          <div className={`quiz-options ${shake ? "shake" : ""}`}>
            {options.map((option) => {
              const isSelected = selected === option;
              const isCorrect = option === question.answer;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selected}
                  className={`quiz-option
                    ${
                      isSelected && isCorrect
                        ? "correct"
                        : ""
                    }
                    ${
                      isSelected && !isCorrect
                        ? "wrong"
                        : ""
                    }`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {shake && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="quiz-error"
              >
                nope, pick the right answer!
              </motion.p>
            )}
          </AnimatePresence>

          <div className="quiz-progress">
            {QUESTIONS.map((_, index) => (
              <span
                key={index}
                className={
                  index <= current
                    ? "active"
                    : ""
                }
              />
            ))}
          </div>

        </motion.div>

      </div>
    </div>
  );
}