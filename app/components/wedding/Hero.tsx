"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type HeroProps = {
  date: string;
  city: string;
  title: string;
  text: string;
};

export function Hero({ date, city, title, text }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.6]);

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ scale: heroImageScale }} className="absolute inset-0">
        <Image
          src="/images/hero/hero-main3.jpeg"
          alt="Bryllupsbakgrunn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ objectPosition: "60% 45%" }}
        />
      </motion.div>

     <motion.div
        style={{ opacity: heroOverlayOpacity }}
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/75 via-black/60 to-neutral-950/95
          md:from-black/50 md:via-black/45 md:to-neutral-950/80
        "
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-6 py-24 md:px-20">
        <motion.div
          style={{ y: heroTextY }}
          className="
            max-w-3xl
            rounded-3xl
            bg-black/28 p-4 backdrop-blur-[2px]
            md:rounded-none md:bg-transparent md:p-0 md:backdrop-blur-0
          "
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-5 text-xs uppercase tracking-[0.45em] text-amber-100/85 md:text-sm"
          >
            {date} • {city}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl font-light leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-xl"
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#program"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              Se programmet
            </a>
            <a
              href="#praktisk"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Praktisk informasjon
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}