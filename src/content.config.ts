import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const films = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/films' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.enum(['short', 'archival']),
    sortOrder: z.number().optional(),
    country: z.string().optional(),
    year: z.string().optional(),
    duration: z.string().optional(),
    archive: z.string().optional(),
    roles: z.array(z.string()).optional(),
    summary: z.string().optional(),
    videoUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    festivalHighlights: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  films,
  pages,
};
