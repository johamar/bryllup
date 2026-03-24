"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { SectionHeading } from "./SectionHeading";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

export function Gallery({ images }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const loopedImages = useMemo(() => {
    if (images.length === 0) {
      return [];
    }

    return [...images, ...images, ...images];
  }, [images]);

  useEffect(() => {
    const node = scrollRef.current;

    if (!node || images.length === 0) {
      return;
    }

    const initializePosition = () => {
      const segmentWidth = node.scrollWidth / 3;
      node.scrollLeft = segmentWidth;
    };

    initializePosition();

    const onResize = () => initializePosition();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [images.length]);

  const handleScroll = () => {
    const node = scrollRef.current;

    if (!node || images.length === 0) {
      return;
    }

    const segmentWidth = node.scrollWidth / 3;

    // Keep the scroll position in the middle segment to create an infinite loop illusion.
    if (node.scrollLeft < segmentWidth * 0.5) {
      node.scrollLeft += segmentWidth;
    } else if (node.scrollLeft > segmentWidth * 1.5) {
      node.scrollLeft -= segmentWidth;
    }
  };

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,244,214,0.12),transparent_35%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galleri"
          title="Små glimt av oss"
          text="Denne delen kan gjerne være mer visuell enn tekstlig. Du kan bytte ut bildene med egne bilder og eventuelt en liten video mellom rutene."
        />

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-neutral-950/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-neutral-950/80 to-transparent" />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex max-w-full snap-x snap-proximity gap-5 overflow-x-auto overflow-y-hidden pb-2 overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {loopedImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: (index % images.length) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative min-h-[340px] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[2rem] sm:w-[62vw] lg:w-[36vw]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 62vw, 36vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}