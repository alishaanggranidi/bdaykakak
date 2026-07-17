"use client";

import { motion } from "framer-motion";

type Props = {
  onContinue: () => void;
};

export default function PreQuiz({
  onContinue,
}: Props) {
  return (
    <div className="page">
      <motion.div
        className="container center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="overline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          ALMOST THERE
        </motion.p>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          one more
          <br />
          thing
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ marginTop: 28 }}
        >
          hehe sorry, there&apos;s still one more thing
          <br />
          i need to verify...
          <br />
          just to make sure it&apos;s really you
        </motion.p>

        <motion.button
          className="btn-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          onClick={onContinue}
        >
          let&apos;s go
        </motion.button>
      </motion.div>
    </div>
  );
}
