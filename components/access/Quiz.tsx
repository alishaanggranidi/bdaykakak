"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  onComplete: () => void;
};

const QUESTIONS = [
  {
    question: "What's Caca's favorite flower?",
    options: ["Rose", "Tulip", "Sunflower"],
    answer: "Tulip",
  },
  {
    question: "When was our first kiss?",
    options: ["4 Januari", "5 Januari", "8 Maret"],
    answer: "5 Januari",
  },
  {
    question: "What do I usually call you?",
    options: ["Adek", "Kakak", "Sayang"],
    answer: "Kakak",
  },
];

export default function Quiz({ onComplete }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [shake, setShake] = useState(false);

  const question = QUESTIONS[current];

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
            Question {current + 1}
          </h1>

          <p className="subtitle">
            {question.question}
          </p>

          <div className={`quiz-options ${shake ? "shake" : ""}`}>
            {question.options.map((option) => {
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
                That's not the answer.
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