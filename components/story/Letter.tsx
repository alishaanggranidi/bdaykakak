"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  onComplete: () => void;
};

// Kept in caca's exact wording + casing on purpose.
const PARAGRAPHS = [
  "oh no aku blm bisa manggil adek untuk sementara...",
  "i hope this year treats u well yaa, wish u good health, peace of mind, n plenty of opportunities may everything u've been working hard for slowly fall into place, n may ur career n rezeki continue to grow....so... u'll have enough to buy me matcha every now n then",
  "jokes aside, i hope u remember to take care of urself too. ik u've been busy n probably tired more often than u say, so don't forget to rest... work is important, but so are u sayangg",
  "i'm really proud of u, not just because of what u've achieved, but bcs ik how much effort u put into everything u do. things may not always go as planned, but i believe u'll get to where u want to be babyy",
  "i'm sorry i can't celebrate ur bday with u in person this time... i wish i could be there, but we'll make up for it soon, let's meet ASAP, okay? we'll go somewhere nice, eat good food, n of don't forget my strawberrymatcha hehe",
  "thank u for always being patient with me, for listening to my random stories, n for making me feel cared for. thank u for every little effort u've made it never goes unnoticed:(",
  "if i've ever made things difficult or been annoying, thank u for putting up with me too... i'm still learning, n i hope we'll keep growing together",
  "once again happy birthday love, i hope 23 brings u more happiness than stress, more wins than setbacks, n many moments that make u smile. most importantly, i hope u never forget how capable u are",
  "enjoy ur special day, n i'll see u soon",
];

const SIGNATURE = "love,\ncaca";

// Full letter as one string; paragraphs separated by a blank line.
const FULL = [...PARAGRAPHS, SIGNATURE].join("\n\n");

const SPEED = 16; // ms per character
const START_DELAY = 1100; // let the title fade in first

export default function Letter({
  onComplete,
}: Props) {
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setShown((n) => {
          if (n >= FULL.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setDone(true);
            return n;
          }
          return n + 1;
        });
      }, SPEED);
    }, START_DELAY);

    return () => {
      clearTimeout(startTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function skip() {
    if (done) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setShown(FULL.length);
    setDone(true);
  }

  const visible = FULL.slice(0, shown);
  const paragraphs = visible.split("\n\n");

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
            happy 23rd birthday,
            <br />
            kakak
          </motion.h1>

          <div
            className="letter-content"
            onClick={skip}
            role="presentation"
          >
            {paragraphs.map((para, i) => {
              const isLast = i === paragraphs.length - 1;
              const isSignature = done && isLast;
              const lines = para.split("\n");

              return (
                <p
                  key={i}
                  className={isSignature ? "letter-signature" : undefined}
                >
                  {lines.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < lines.length - 1 && <br />}
                    </span>
                  ))}
                  {!done && isLast && (
                    <span className="type-cursor">|</span>
                  )}
                </p>
              );
            })}
          </div>

          {!done && (
            <p className="letter-skip-hint">tap to skip</p>
          )}

          {done && (
            <motion.button
              className="btn-primary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              onClick={onComplete}
            >
              continue
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
