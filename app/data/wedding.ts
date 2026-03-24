export const weddingDetails = {
  couple: "Johan & Signe",
  date: "19. september 2026",
  city: "Bodø",
  heroTitle: "Johan & Signe",
  heroText:
    "Vi gleder oss til å feire kjærligheten sammen med dere. Her finner dere alt dere trenger å vite om dagen vår - fra program og praktisk info til små glimt av historien vår.",
  venueName: "Nordly Grendehus",
  venueDescription:
    "Legg inn en kort beskrivelse av venue, utsikt eller hvorfor dere valgte akkurat dette stedet.",
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
    text: "Vi matcha på Tinder og hadde vår første date på Nattmålstinden",
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
    title: "Første året sammen",
    text: "Sånn gikk 2021.",
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
    text: "Vi feirer nyttårsaften 2022 sammen og drar på tur til Wien.",
    media: [
      {
        type: "image",
        src: "/images/story/story-22.jpeg",
        alt: "Nyttårsaften",
        objectPosition: "50% 0%",
      },
      {
        type: "image",
        src: "/images/story/story-29.jpg",
        alt: "Wien",
        objectPosition: "50% 0%",
      },
    ],
  },
  {
    year: "2023",
    title: "Coldplay og Gran Canaria",
    text: "Vi opplever Coldplay-konsert i gøteborg og drar på tur til Gran Canaria.",
    media: [
      {
        type: "image",
        src: "/images/story/story-18.jpeg",
        alt: "Coldplay-konsert",
        objectPosition: "50% 40%",
      },
      {
        type: "image",
        src: "/images/story/story-20.jpg",
        alt: "Gran Canaria",
        objectPosition: "50% 40%",
      },
    ],
  },
  {
    year: "2024",
    title: "Frieriet",
    text: "Johan frir på hyttetur i Oppdal, og Signe sier ja!",
    media: [
       {
        type: "image",
        src: "/images/story/story-22.jpg",
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
        src: "/images/story/story-30.jpg",
        alt: "Nyttårsaften",
        objectPosition: "50% 35%",
      },
      {
        type: "image",
        src: "/images/story/story-31.jpg",
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
    src: "/images/gallery/FullSizeRender%20(1).jpeg",
    alt: "Galleri bilde 1",
  },
  {
    src: "/images/gallery/FullSizeRender%20(3).jpeg",
    alt: "Galleri bilde 2",
  },
  {
    src: "/images/gallery/IMG_0452.jpg",
    alt: "Galleri bilde 3",
  },
  {
    src: "/images/gallery/IMG_0678.JPG",
    alt: "Galleri bilde 4",
  },
  {
    src: "/images/gallery/IMG_0821.jpeg",
    alt: "Galleri bilde 5",
  },
  {
    src: "/images/gallery/IMG_1111.jpeg",
    alt: "Galleri bilde 6",
  },
  {
    src: "/images/gallery/IMG_1184.jpeg",
    alt: "Galleri bilde 7",
  },
  {
    src: "/images/gallery/IMG_1601.JPG",
    alt: "Galleri bilde 8",
  },
  {
    src: "/images/gallery/IMG_1752.jpeg",
    alt: "Galleri bilde 9",
  },
  {
    src: "/images/gallery/IMG_2112.JPG",
    alt: "Galleri bilde 10",
  },
  {
    src: "/images/gallery/IMG_2116.JPG",
    alt: "Galleri bilde 11",
  },
  {
    src: "/images/gallery/IMG_2117.JPG",
    alt: "Galleri bilde 12",
  },
  {
    src: "/images/gallery/IMG_2120.JPG",
    alt: "Galleri bilde 13",
  },
  {
    src: "/images/gallery/IMG_2130.JPG",
    alt: "Galleri bilde 14",
  },
  {
    src: "/images/gallery/IMG_2131.JPG",
    alt: "Galleri bilde 15",
  },
  {
    src: "/images/gallery/IMG_2583.JPG",
    alt: "Galleri bilde 16",
  },
  {
    src: "/images/gallery/IMG_2620.JPG",
    alt: "Galleri bilde 17",
  },
  {
    src: "/images/gallery/IMG_2622.JPG",
    alt: "Galleri bilde 18",
  },
  {
    src: "/images/gallery/IMG_2630.JPG",
    alt: "Galleri bilde 19",
  },
  {
    src: "/images/gallery/IMG_2631.JPG",
    alt: "Galleri bilde 20",
  },
  {
    src: "/images/gallery/IMG_2653.JPG",
    alt: "Galleri bilde 21",
  },
  {
    src: "/images/gallery/IMG_2664.JPG",
    alt: "Galleri bilde 22",
  },
  {
    src: "/images/gallery/IMG_2955.jpeg",
    alt: "Galleri bilde 23",
  },
  {
    src: "/images/gallery/IMG_2971.JPG",
    alt: "Galleri bilde 24",
  },
  {
    src: "/images/gallery/IMG_3070.jpeg",
    alt: "Galleri bilde 25",
  },
  {
    src: "/images/gallery/IMG_3117.JPG",
    alt: "Galleri bilde 26",
  },
  {
    src: "/images/gallery/IMG_3144.JPG",
    alt: "Galleri bilde 27",
  },
  {
    src: "/images/gallery/IMG_3228.JPG",
    alt: "Galleri bilde 28",
  },
  {
    src: "/images/gallery/IMG_3263.jpeg",
    alt: "Galleri bilde 29",
  },
  {
    src: "/images/gallery/IMG_3392.JPG",
    alt: "Galleri bilde 30",
  },
  {
    src: "/images/gallery/IMG_3424.jpeg",
    alt: "Galleri bilde 31",
  },
  {
    src: "/images/gallery/IMG_3524.jpeg",
    alt: "Galleri bilde 32",
  },
  {
    src: "/images/gallery/IMG_3525.jpeg",
    alt: "Galleri bilde 33",
  },
  {
    src: "/images/gallery/IMG_3653.jpeg",
    alt: "Galleri bilde 34",
  },
  {
    src: "/images/gallery/IMG_3669.jpeg",
    alt: "Galleri bilde 35",
  },
];