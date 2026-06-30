import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ELEMENTAL · Consultora de crecimiento digital impulsada por IA",
    short_name: "ELEMENTAL",
    description:
      "Construimos sistemas digitales que hacen crecer empresas. Branding, marketing, desarrollo web, IA y automatización.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#0D0D0D",
    orientation: "portrait-primary",
    categories: ["business", "productivity", "technology"],
    lang: "es-CO",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
