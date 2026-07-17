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
            happy birthday,
            <br />
            sayangku
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
              thank you for becoming someone who makes
              ordinary days feel special
            </p>

            <p>
              thank you for every laugh, every story,
              every late-night conversation, every hug,
              and every little moment we&apos;ve shared together
            </p>

            <p>
              this is only a small gift,
              but every page inside it was made
              with love
            </p>

            <p>
              i hope this new chapter brings you
              happiness, good health, success,
              and many beautiful memories
            </p>

            <p>
              whatever happens,
              wherever life takes us,
              i hope we will always
              find our way back to each other
            </p>

            <p>
              happy birthday once again
            </p>

            <p>
              i love you,
              always
            </p>
          </motion.div>

          <motion.button
            className="btn-primary"
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
            continue
          </motion.button>

        </motion.div>

      </div>
    </div>
  );
}