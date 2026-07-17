"use client";

import { motion } from "framer-motion";

type Props = {
  onRestart: () => void;
};

export default function Ending({
  onRestart,
}: Props) {
  return (
    <div className="page">
      <div className="container center">

        <motion.p
          className="overline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          THE END
        </motion.p>

        <motion.h1
          className="title"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          Happy Birthday,
          <br />
          Kakak.
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          style={{
            maxWidth: 650,
            marginTop: 40,
          }}
        >
          Thank you for every laugh,
          every adventure,
          every memory,
          and every little moment
          we've shared together.
        </motion.p>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
          }}
          style={{
            maxWidth: 650,
            marginTop: 30,
          }}
        >
          I hope this won't be
          our last chapter.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 0.8,
          }}
          style={{
            marginTop: 80,
            color: "rgba(255,255,255,.75)",
            fontSize: 20,
            lineHeight: 1.8,
          }}
        >
          With all my love,
          <br />
          Caca ❤️
        </motion.p>

        <motion.button
          className="primary-button"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.8,
            duration: 0.8,
          }}
          onClick={onRestart}
          style={{
            marginTop: 70,
          }}
        >
          Experience It Again
        </motion.button>

      </div>
    </div>
  );
}