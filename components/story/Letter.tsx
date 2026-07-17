"use client";

import { motion } from "framer-motion";

type Props = {
  onComplete: () => void;
};

export default function Letter({
  onComplete,
}: Props) {
  return (
    <div className="page">
      <div className="container">

        <motion.div
          className="letter-card"
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="overline">
            A LETTER FOR YOU
          </p>

          <motion.h1
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
          >
            Happy Birthday,
            <br />
            Kakak.
          </motion.h1>

          <motion.div
            className="letter-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 1,
            }}
          >
            <p>
              Thank you for becoming someone who makes
              ordinary days feel special.
            </p>

            <p>
              Thank you for every laugh, every story,
              every late-night conversation, every hug,
              and every little moment we've shared.
            </p>

            <p>
              This website is only a small gift,
              but every page inside it was made
              with love.
            </p>

            <p>
              I hope this new chapter brings you
              happiness, good health, success,
              and many beautiful memories.
            </p>

            <p>
              Whatever happens,
              wherever life takes us,
              I hope we will always
              find our way back to each other.
            </p>

            <p>
              Happy Birthday once again.
            </p>

            <p>
              I love you,
              always.
            </p>
          </motion.div>

          <motion.button
            className="primary-button"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.2,
              duration: 0.8,
            }}
            onClick={onComplete}
          >
            Continue
          </motion.button>

        </motion.div>

      </div>
    </div>
  );
}