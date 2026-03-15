import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listingSchema = z.object({
  title: z.string(),
  slug: z.string(),
  price: z.number(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  area: z.number(),
  location: z.string(),
  image: z.string(),
  featured: z.boolean().default(false),
});

export const collections = {
  'en-listings': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/en/listings' }),
    schema: listingSchema,
  }),
  'pt-listings': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pt/listings' }),
    schema: listingSchema,
  }),
  'es-listings': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/es/listings' }),
    schema: listingSchema,
  }),
  'de-listings': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/de/listings' }),
    schema: listingSchema,
  }),
  'fr-listings': defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/fr/listings' }),
    schema: listingSchema,
  }),
};
