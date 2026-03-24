"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

type PracticalInfoItem = {
  title: string;
  text: string;
};

type PracticalInfoProps = {
  items: PracticalInfoItem[];
  venueName: string;
  venueDescription: string;
};

export function PracticalInfo({ items, venueName, venueDescription }: PracticalInfoProps) {
  return (
    <section id="praktisk" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Praktisk info"
            title="Alt dere trenger å vite"
          />

          <div className="mx-auto grid w-full max-w-[720px] gap-4 sm:grid-cols-2 sm:auto-rows-fr">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-light text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="sticky top-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur"
        >
          <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/venue/venue-main2.jpg"
              alt="Bryllupslokasjon"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-100/85">Lokasjon</p>
              <h3 className="mt-3 text-3xl font-light">{venueName}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/75">{venueDescription}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}