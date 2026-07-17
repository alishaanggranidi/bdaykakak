"use client";

import { motion } from "framer-motion";

type Props = {
  onSelect: () => void;
};

export default function GiftSelection({
  onSelect,
}: Props) {
  return (
    <div className="page">
      <div className="container center">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
        >

          <p className="overline">
            YOUR GIFT
          </p>

          <h1 className="title">
            Choose One.
          </h1>

          <p className="subtitle">
            Only one gift
            has been prepared for you.
          </p>

        </motion.div>

        <div className="gift-grid">

          <motion.div
            whileHover={{
              y: -8,
            }}
            whileTap={{
              scale: .98,
            }}
            className="gift-card"
            onClick={onSelect}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: 16,
              }}
            >
              Something
              <br />
              You Love
            </h2>

            <p
              className="small"
            >
              Open
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="gift-card"
            style={{
              opacity: .55,
              cursor: "not-allowed",
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: 16,
              }}
            >
              Something
              <br />
              You Need
            </h2>

            <p className="small">
              Locked
            </p>

          </motion.div>

          <motion.div
            whileHover={{
              y: -8,
            }}
            className="gift-card"
            style={{
              opacity: .55,
              cursor: "not-allowed",
            }}
          >
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: 16,
              }}
            >
              Something
              <br />
              You Deserve
            </h2>

            <p className="small">
              Locked
            </p>

          </motion.div>

        </div>

      </div>
    </div>
  );
}