"use client";

import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

type ScheduleItem = {
  time: string;
  title: string;
  text: string;
};

type ScheduleProps = {
  items: ScheduleItem[];
};

export function Schedule({ items }: ScheduleProps) {
  return (
    <section id="program" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        eyebrow="Dagen vår"
        title="Program for bryllupsdagen"
        text=""
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.time}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-6"
          >
            <p className="text-sm tracking-[0.2em] text-amber-200/80">{item.time}</p>
            <h3 className="mt-4 text-2xl font-light">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}