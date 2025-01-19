import { defineCollection, reference, z } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image(),

      isDraft: z.boolean().default(false),

      // Relation
      author: reference('author'),

      tags: z.array(z.string())
    })
})

const authorCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string(),
      linkedIn: z.string(),
      github: z.string(),
      bio: z.string(),
      subtitle: z.string()
    })
})

export const collections = {
  blog: blogCollection,
  author: authorCollection
}
