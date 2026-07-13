import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      /** Display name of the project. */
      name: z.string(),
      /** One- or two-line summary used on cards and detail header. */
      description: z.string(),
      /** Imported, optimized preview image; path is relative to the .md file. */
      thumbnail: image(),
      /** Link to the live, deployed app. */
      liveUrl: z.string().url(),
      /** Optional link to the source repository. */
      sourceUrl: z.string().url().optional(),
      /** Tech-stack tags shown as small badges. */
      tags: z.array(z.string()).default([]),
      /** Show on the home page's featured section. */
      featured: z.boolean().default(false),
      /** Sort order (ascending) on the home and /projects grids. */
      order: z.number().default(0),
    }),
});

export const collections = { projects };
