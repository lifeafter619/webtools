/* eslint-disable @next/next/no-img-element */
import { ai } from "@/utils/keystatic/collections/ai";
import { designKit } from "@/utils/keystatic/collections/designKit";
import { dev } from "@/utils/keystatic/collections/dev";
import { post } from "@/utils/keystatic/collections/post";
import { profile } from "@/utils/keystatic/collections/profile";
import { starterKit } from "@/utils/keystatic/collections/starterKit";
import { uiComponent } from "@/utils/keystatic/collections/uiComponent";
import { config } from "@keystatic/core";

export default config({
  ui: {
    brand: {
      name: "619の工具推荐",
      mark: () => {
        return <img id="keystatic-logo" src="/logo.svg" alt="619の工具推荐" />;
      },
    },
    navigation: {
      Tools: ["starterKit", "designKit", "uiComponent", "ai", "dev"],
      Content: ["post"],
      People: ["profile"],
    },
  },
  storage: {
    kind: process.env.NODE_ENV === "production" ? "cloud" : "local",
    branchPrefix: "tool/",
  },
  ...(process.env.NODE_ENV === "production" && {
    cloud: { project: "smashing/tools" },
  }),
  collections: {
    starterKit,
    designKit,
    uiComponent,
    ai,
    dev,
    profile,
    post,
  },
});
