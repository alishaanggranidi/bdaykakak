"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  onComplete: () => void;
};

export default function Intro({
  onComplete,
}: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 9000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="page">
      <div className="container center">

        <motion.p
          className="overline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .8 }}
        >
          OUR STORY
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
            delay: .4,
            duration: .8,
          }}
        >
          18 memories.
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: .8,
          }}
          style={{
            marginTop: 28,
            color: "#FFFFFF",
            fontSize: "2rem",
            fontWeight: 500,
          }}
        >
          One amazing person.
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 4,
            duration: .8,
          }}
          style={{
            maxWidth: 700,
            marginTop: 70,
          }}
        >
          Thank you for creating
          every memory with me.
        </motion.p>

      </div>
    </div>
  );
}