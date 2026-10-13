import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "aiOFFICE by aiNOW",
    short_name: "aiOFFICE",
    description:
      "Internal company knowledge and workflow support from approved sources, with visible human review.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfcfc",
    theme_color: "#18181b",
    icons: [
      { src: "/icon.svg?v=17-20260811", type: "image/svg+xml", sizes: "any" },
    ],
  };
}
