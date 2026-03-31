"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

type StoryMedia =
  | {
      type: "image";
      src: string;
      alt: string;
      objectPosition?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      objectPosition?: string;
    };

type StoryItem = {
  year: string;
  text: string;
  media: StoryMedia[];
};

type StoryProps = {
  items: StoryItem[];
};

function shouldEagerLoadStoryImage(src: string) {
  return src === "/images/story/story-11.jpeg" || src === "/images/story/story-29.jpeg";
}

function StoryMediaBlock({ media }: { media: StoryMedia[] }) {
  if (media.length === 1) {
    const item = media[0];

    if (item.type === "image") {
      return (
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            loading={shouldEagerLoadStoryImage(item.src) ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            style={{ objectPosition: item.objectPosition ?? "50% 50%" }}
          />
        </div>
      );
    }

    return (
      <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-black">
        <video
          src={item.src}
          poster={item.poster}
          controls
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {media.map((item, index) => (
        <div
          key={item.src + index}
          className="relative min-h-[220px] overflow-hidden rounded-[1.5rem] bg-black"
        >
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading={shouldEagerLoadStoryImage(item.src) ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: item.objectPosition ?? "50% 50%" }}
            />
          ) : (
            <video
              src={item.src}
              poster={item.poster}
              controls
              className="h-full w-full object-cover"
              style={{ objectPosition: item.objectPosition ?? "50% 50%" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function Story({ items }: StoryProps) {
  const storyRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start 80%", "end 20%"],
  });

  const storyLineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <SectionHeading
        eyebrow="Vår historie"
        title="En liten reise frem til denne dagen"
        text="Denne seksjonen fungerer fint med korte tekster, datoer og bilder."
      />

      <div ref={storyRef} className="relative mx-auto flex max-w-5xl flex-col gap-12">
        <motion.div
          style={{ scaleY: storyLineScale }}
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 origin-top bg-gradient-to-b from-amber-200/20 via-amber-100 to-white/10 md:block"
        />

        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.year + index}
              className="grid gap-6 md:grid-cols-[1fr_120px_1fr] md:items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7 }}
                className={`rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur ${
                  isEven ? "md:col-start-1" : "md:col-start-3"
                }`}
              >
                <h3 className="text-3xl uppercase tracking-[0.2em] text-amber-200/75">
                  {item.year}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
              </motion.div>

              <div className="hidden items-center justify-center md:flex md:col-start-2 md:row-start-1">
                <div className="h-4 w-4 rounded-full bg-amber-100 shadow-[0_0_30px_rgba(255,240,200,0.5)]" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`${isEven ? "md:col-start-3" : "md:col-start-1 md:row-start-1"}`}
              >
                <StoryMediaBlock media={item.media} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}