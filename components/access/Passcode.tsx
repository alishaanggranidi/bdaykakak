"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  onSuccess: () => void;
};

const PASSWORD = "0803";

export default function Passcode({
  onSuccess,
}: Props) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (code.length !== 4) return;

    if (code === PASSWORD) {
      setTimeout(() => {
        onSuccess();
      }, 500);
    } else {
      setError(true);

      setTimeout(() => {
        setCode("");
        setError(false);
      }, 700);
    }
  }, [code, onSuccess]);

  function press(value: string) {
    if (code.length >= 4) return;
    setCode((prev) => prev + value);
  }

  function remove() {
    setCode((prev) => prev.slice(0, -1));
  }

  return (
    <div className="page">
      <motion.div
        className="container center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="overline">
          SECURITY CHECK
        </p>

        <h1 className="title">
          Enter
          <br />
          Passcode
        </h1>

        <p className="subtitle">
          Hint:
          <br />
          The day we officially became us.
        </p>

        <div className={`passcode ${error ? "shake" : ""}`}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`dot ${code.length > i ? "fill" : ""}`}
            />
          ))}
        </div>

        {error && (
          <p
            style={{
              color: "#ff8d8d",
              marginBottom: 25,
            }}
          >
            Incorrect passcode
          </p>
        )}

        <div className="keypad">
          {[1,2,3,4,5,6,7,8,9].map((n)=>(
            <button
              key={n}
              className="key"
              onClick={()=>press(String(n))}
            >
              {n}
            </button>
          ))}

          <div />

          <button
            className="key"
            onClick={()=>press("0")}
          >
            0
          </button>

          <button
            className="key"
            onClick={remove}
          >
            ⌫
          </button>
        </div>
      </motion.div>
    </div>
  );
}