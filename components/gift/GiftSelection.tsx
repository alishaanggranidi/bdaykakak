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
            only for you, kakak
          </h1>

          <p className="subtitle">
            two gifts are waiting for you, but only one can be opened now
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
              something
              <br />
              you love
            </h2>

            <p
              className="small"
            >
              open
            </p>
          </motion.div>

          <div className="gift-card locked">
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: 16,
              }}
            >
              something
              <br />
              you need
            </h2>

            <p className="small">
              sorry, locked
            </p>

          </div>

          <div className="gift-card locked">
            <h2
              style={{
                fontSize: "1.6rem",
                marginBottom: 16,
              }}
            >
              something
              <br />
              you deserve
            </h2>

            <p className="small">
              sorry, locked
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}