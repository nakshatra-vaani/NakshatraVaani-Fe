import { ReportData } from "./report-types";

export const REPORTS: ReportData[] = [
  {
    slug: "marital-bliss",

    title: "Marital Bliss Alignment",

    subtitle: "Celestial Union Summary",

    heroImage: "/reports/marital.png",

    compatibility: "94.8%",

    element: "Aether",

    summary:
      "Your union is whispered in the silent orbits of Jupiter and Venus.",

    insights: [
      {
        id: "1",
        title: "Communication Harmony",
        description:
          "The alignment of your Mercury positions facilitates fluid exchange.",
        tag: "MERCURY DOMINANT",
        icon: "waves",
      },

      {
        id: "2",
        title: "Spiritual Resonance",
        description:
          "Your 12th houses mirror each other spiritually.",
        icon: "meditation",
      },

      {
        id: "3",
        title: "Karmic Timing",
        description:
          "Saturn marks a significant milestone in your relationship.",
        icon: "clock",
      },
    ],
  },
];