"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  onComplete: () => void;
};

export default function Love({
  onComplete,
}: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 8500);

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
          FOR YOU
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
          Before we continue...
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.8,
            duration: .8,
          }}
          style={{
            marginTop: 30,
          }}
        >
          I have something to tell you.
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.4,
            duration: .8,
          }}
          style={{
            marginTop: 90,
            fontSize: "2.2rem",
            fontWeight: 600,
            lineHeight: 1.5,
            color: "#FFFFFF",
          }}
        >
          This website
          <br />
          has never been
          <br />
          about your birthday.
        </motion.h2>

        <motion.h2
          initial={{
            opacity: 0,
            scale: .95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 5.9,
            duration: .9,
          }}
          style={{
            marginTop: 70,
            fontSize: "3rem",
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
          }}
        >
          It's about you.
        </motion.h2>

      </div>
    </div>
  );
}