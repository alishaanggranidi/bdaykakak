"use client";

import { motion } from "framer-motion";

type Props = {
  onComplete: () => void;
};

export default function VideoIntro({
  onComplete,
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
          ONE LAST SURPRISE
        </motion.p>

        <motion.h1
          className="title"
          initial={{
            opacity: 0,
            y: 24,
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
          this one
          <br />
          isn&apos;t only
          <br />
          from me
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
            delay: 1.6,
            duration: 0.8,
          }}
          style={{
            maxWidth: 650,
            marginTop: 48,
          }}
        >
          there are some people who also
          want to celebrate your birthday
        </motion.p>

        <motion.button
          className="btn-primary"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.6,
            duration: 0.8,
          }}
          onClick={onComplete}
          style={{
            marginTop: 70,
          }}
        >
          play video
        </motion.button>

      </div>
    </div>
  );
}