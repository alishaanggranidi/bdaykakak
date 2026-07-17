"use client";

import { useEffect, useState } from "react";

type Props = {
  onComplete: () => void;
};

export default function Boot({
  onComplete,
}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 400);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="page">
      <div className="container center">

        <p className="overline">
          INITIALIZING
        </p>

        <h1 className="title">
          preparing
          <br />
          surprise
        </h1>

        <p className="subtitle">
          please wait a moment...
        </p>

        <div className="progress">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p
          className="small"
          style={{
            marginTop: 20,
          }}
        >
          {progress}%
        </p>

      </div>
    </div>
  );
}