import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// TODO: Confirm the final content schema once film metadata is approved.
const films = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    category: z.enum(['short', 'archival', 'todo']).default('todo'),
    sortOrder: z.number().optional(),
    year: z.string().optional(),
    coverImage: z.string().optional(),
    festivalSelections: z.array(z.string()).optional(),
    pressLinks: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

// TODO: Add approved static page fields when biography content is confirmed.
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  films,
  pages,
};
