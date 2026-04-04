import { object } from "motion/react-client";

export const weddingDetails = {
  couple: "Johan & Signe",
  date: "19. september 2026",
  city: "Bodø",
  heroTitle: "Johan & Signe",
  heroText:
    "Vi gleder oss til å feire kjærligheten sammen med dere. Her finner dere alt dere trenger å vite om dagen vår - fra program og praktisk info til små glimt av historien vår.",
  venueName: "Nordly Grendehus",
  venueDescription:
    "Feiringen holdes på Nordly Grendehus i Bodø, et hyggelig og romslig lokale med god plass til både middag, taler og dans utover kvelden. Lokalet egner seg godt til bryllup og har fasiliteter som musikkanlegg, scene og storkjøkken, som gjør det til en fin ramme for den store dagen.  ",
  rsvpDeadline: "1. august 2026",
};

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
  title?: string;
  text: string;
  media: StoryMedia[];
};

export const storyItems: StoryItem[] = [
  {
    year: "2020",
    text: "Året vi møttes. Første date var på Nattmålstinden med kvikklunsj i lommen.",
    media: [
      {
        type: "image",
        src: "/images/story/story-6.jpeg",
        alt: "Tredje bilde av oss",
        objectPosition: "50% 10%",
      },
      {
        type: "image",
        src: "/images/story/story-5.jpeg",
        alt: "Første bilde av oss",
        objectPosition: "50% 20%",
      },
    ],
  },
  {
    year: "2021",
    title: "Tromsdalstinden og turer i sola",
    text: "Vi flyttet inn sammen og vennegjengene våres møttes. ",
    media: [
      {
        type: "image",
        src: "/images/story/story-28.jpeg",
        alt: "På tur i sola",
      },
      {
        type: "image",
        src: "/images/story/story-11.jpeg",
        alt: "På tromsdalstinden",
        objectPosition: "50% 60%",
      },
    ],
  },
  {
    year: "2022",
    title: "Nyttår og Wien",
    text: "Vi hadde vår første ferie og vår første konsert",
    media: [
      {
        type: "image",
        src: "/images/story/story-14.jpeg",
        alt: "Nyttårsaften",
        objectPosition: "90% 0%",
      },
      {
        type: "image",
        src: "/images/story/story-29.jpeg",
        alt: "Wien",
        objectPosition: "50% 0%",
      },
    ],
  },
  {
    year: "2023",
    title: "Coldplay og Gran Canaria",
    text: "Vi flytter til Trondheim. Signe ble ferdigutdannet sykepleier og Johan begynte på dataingeniørstudiet.",
    media: [
      {
        type: "image",
        src: "/images/story/story-18.jpeg",
        alt: "Coldplay-konsert",
        objectPosition: "50% 40%",
      },
      {
        type: "image",
        src: "/images/story/story-20.jpeg",
        alt: "Gran Canaria",
        objectPosition: "50% 40%",
      },
    ],
  },
  {
    year: "2024",
    title: "Frieriet",
    text: "01.01.24 Johan gikk ned på kne. Vi fikk en liten gutt i magen.",
    media: [
       {
        type: "image",
        src: "/images/story/story-99.jpeg",
        alt: "Frieriet",
      },
      {
        type: "image",
        src: "/images/story/story-25.jpeg",
        alt: "Frieriet",
        objectPosition: "50% 15%",
      },
    ],
  },
  {
    year: "2025",
    title: "17. mai og Lukas' dåp",
    text: "Vi feirer 17. mai sammen og døper vår sønn Lukas.",
    media: [
      {
        type: "image",
        src: "/images/story/story-30.jpeg",
        alt: "Nyttårsaften",
        objectPosition: "50% 35%",
      },
      {
        type: "image",
        src: "/images/story/story-31.jpeg",
        alt: "Nyttårsaften",
        objectPosition: "50% 30%",
      },
    ],
  },
];

export const scheduleItems = [
  {
    time: "13:30",
    title: "Vielse",
    text: "Vi sier ja til hverandre i kirken med gjester til stede.",
  },
  {
    time: "15:00",
    title: "Mingling & bilder",
    text: "Bobler, småprat og tid til å nyte øyeblikket sammen.",
  },
  {
    time: "17:00",
    title: "Middag",
    text: "Festmiddag med taler, latter og god stemning utover kvelden.",
  },
  {
    time: "21:00",
    title: "Dans & fest",
    text: "Når solen går ned, skrur vi opp musikken og feirer kjærligheten.",
  },
];

export const practicalInfoItems = [
  {
    title: "Sted",
    text: "Vi starter dagen i Bodin kirke, og fortsetter med middag og fest på Nordly Grendehus. Adressen er Kløftveien 4, 8030 Bodø.",
  },
  {
    title: "Overnatting",
    text: "Vi anbefaler Scandic Havet, Radisson Blu, eller andre hoteller i nærheten.",
  },
  {
    title: "Dresscode",
    text: "Pent / formelt / mørk dress.",
  },
  {
    title: "Toastmaster",
    text: "Ta kontakt med [TBA] på [#telefon] dersom du ønsker å bidra med tale eller innslag.",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery/gallery-1.jpeg",
    alt: "Galleri bilde 1",
    objectPosition: "50% 20%",
  },
  {
    src: "/images/gallery/gallery-3.jpeg",
    alt: "Galleri bilde 3",
    objectPosition: "50% 30%",

  },
  {
    src: "/images/gallery/gallery-4.jpeg",
    alt: "Galleri bilde 4",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-5.jpeg",
    alt: "Galleri bilde 5",
    objectPosition: "50% 0%",
  },
  {
    src: "/images/gallery/gallery-6.jpeg",
    alt: "Galleri bilde 6",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-7.jpeg",
    alt: "Galleri bilde 7",
    objectPosition: "50% 20%",
  },
  {
    src: "/images/gallery/gallery-9.jpeg",
    alt: "Galleri bilde 9",
    objectPosition: "50% 30%",
  },
  {
    src: "/images/gallery/gallery-10.jpeg",
    alt: "Galleri bilde 10",
    objectPosition: "50% 40%",
  },
  {
    src: "/images/gallery/gallery-11.jpeg",
    alt: "Galleri bilde 11",
    objectPosition: "50% 40%",
  },
  {
    src: "/images/gallery/gallery-12.jpeg",
    alt: "Galleri bilde 12",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-13.jpeg",
    alt: "Galleri bilde 13",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-14.jpeg",
    alt: "Galleri bilde 14",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-15.jpeg",
    alt: "Galleri bilde 15",
    objectPosition: "50% 40%",
  },
  {
    src: "/images/gallery/gallery-16.jpeg",
    alt: "Galleri bilde 16",
    objectPosition: "50% 40%",
  },
  {
    src: "/images/gallery/gallery-17.jpeg",
    alt: "Galleri bilde 17",
    objectPosition: "50% 40%",
  },
  {
    src: "/images/gallery/gallery-18.jpeg",
    alt: "Galleri bilde 18",
    objectPosition: "50% 20%",
  },
  {
    src: "/images/gallery/gallery-19.jpeg",
    alt: "Galleri bilde 19",
    objectPosition: "50% 30%",
  },
  {
    src: "/images/gallery/gallery-21.jpeg",
    alt: "Galleri bilde 21",
    objectPosition: "50% 20%",
  },
  {
    src: "/images/gallery/gallery-23.jpeg",
    alt: "Galleri bilde 23",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-24.jpeg",
    alt: "Galleri bilde 24",
    objectPosition: "50% 35%",
  },
  {
    src: "/images/gallery/gallery-26.jpeg",
    alt: "Galleri bilde 26",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-27.jpeg",
    alt: "Galleri bilde 27",
    objectPosition: "50% 50%",

  },
  {
    src: "/images/gallery/gallery-28.jpeg",
    alt: "Galleri bilde 28",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-29.jpeg",
    alt: "Galleri bilde 29",
    objectPosition: "50% 50%",
  },
  {
    src: "/images/gallery/gallery-30.jpeg",
    alt: "Galleri bilde 30",
    objectPosition: "50% 50%",

  },
  {
    src: "/images/gallery/gallery-31.jpeg",
    alt: "Galleri bilde 31",
    objectPosition: "50% 30%",
  },
  {
    src: "/images/gallery/gallery-32.jpeg",
    alt: "Galleri bilde 32",
    objectPosition: "50% 30%",
  },
  {
    src: "/images/gallery/gallery-33.jpeg",
    alt: "Galleri bilde 33",
    objectPosition: "50% 30%",
  },
  {
    src: "/images/gallery/gallery-34.jpeg",
    alt: "Galleri bilde 34",
    objectPosition: "50% 20%",
  },
];