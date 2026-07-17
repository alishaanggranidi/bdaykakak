"use client";

import { motion } from "framer-motion";

type Props = {
  onContinue: () => void;
};

export default function WelcomeScreen({
  onContinue,
}: Props) {
  return (
    <div className="page">
      <motion.div
        className="container center"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <p className="overline">
          ACCESS_23
        </p>

        <h1 className="title">
          Happy Birthday,
          <br />
          Kak Atha.
        </h1>

        <p className="subtitle">
          I made something special just for you.
          <br />
          I hope you'll enjoy every little part of it.
        </p>

        <button
          className="btn-primary"
          onClick={onContinue}
        >
          Begin
        </button>
      </motion.div>
    </div>
  );
}