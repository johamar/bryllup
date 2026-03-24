"use client";

import { motion } from "motion/react";

type RsvpProps = {
  deadline: string;
};

export function Rsvp({ deadline }: RsvpProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] px-8 py-14 text-center backdrop-blur md:px-14"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-amber-100/80">Svar utbedes innen <br />{deadline}</p>
        <h2 className="mt-4 text-3xl font-light tracking-tight md:text-5xl">
          Vi håper dere vil feire sammen med oss
        </h2>
        {/* <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
          Her kan dere legge inn RSVP-frist, lenke til skjema eller en enkel knapp som sender gjestene videre til en egen svarside.
        </p> */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
          >
            Svar på invitasjonen
          </a>
          {/* <a
            href="#"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Se ønskeliste
          </a> */}
        </div>
      </motion.div>
    </section>
  );
}