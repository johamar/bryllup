import { Gallery } from "@/components/wedding/Gallery";
import { Hero } from "@/components/wedding/Hero";
import { PracticalInfo } from "@/components/wedding/PracticalInfo";
import { Rsvp } from "@/components/wedding/Rsvp";
import { Schedule } from "@/components/wedding/Schedule";
import { Story } from "@/components/wedding/Story";
import {
  galleryImages,
  practicalInfoItems,
  scheduleItems,
  storyItems,
  weddingDetails,
} from "@/data/wedding";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-neutral-950 text-white selection:bg-amber-100 selection:text-neutral-900">
      <Hero
        date={weddingDetails.date}
        city={weddingDetails.city}
        title={weddingDetails.heroTitle}
        text={weddingDetails.heroText}
      />

      <Story items={storyItems} />
      <Schedule items={scheduleItems} />
      <Gallery images={galleryImages} />
      <PracticalInfo
        items={practicalInfoItems}
        venueName={weddingDetails.venueName}
        venueDescription={weddingDetails.venueDescription}
      />
      <Rsvp deadline={weddingDetails.rsvpDeadline} />

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/45 md:px-10">
        Laget med kjærlighet • {weddingDetails.couple}
      </footer>
    </main>
  );
}