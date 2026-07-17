"use client";

import { motion } from "framer-motion";

type Props = {
  onLove: () => void;
};

const gifts = [
  {
    title: "Something You Love",
    subtitle: "A little surprise that I know you'll love.",
    emoji: "⌚",
  },
  {
    title: "Something You Need",
    subtitle: "Something useful for your everyday life.",
    emoji: "🎁",
  },
  {
    title: "Something You Deserve",
    subtitle: "Because you deserve the best.",
    emoji: "⭐",
  },
];

export default function ThreeGifts({
  onLove,
}: Props) {
  return (
    <section className="flex min-h-screen items-center px-6">

      <div className="page-container">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm uppercase tracking-[0.5em] text-blue-300"
        >
          THREE GIFTS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center text-5xl font-bold md:text-7xl"
        >
          Choose Your Gift
        </motion.h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-white/70">
          Aku menyiapkan tiga hadiah kecil.
          Tidak besar,
          tapi semuanya punya arti.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {gifts.map((gift, index) => (

            <motion.button
              key={gift.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => {
                if (index === 0) {
                  onLove();
                }
              }}
              className="
                surface
                p-10
                text-left
                transition
              "
            >

              <div className="text-6xl">
                {gift.emoji}
              </div>

              <h2 className="mt-8 text-3xl font-bold">
                {gift.title}
              </h2>

              <p className="mt-5 leading-8 text-white/65">
                {gift.subtitle}
              </p>

            </motion.button>

          ))}

        </div>

      </div>

    </section>
  );
}