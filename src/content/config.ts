import { defineCollection, z } from "astro:content";

const frameworks = defineCollection({
    schema: z.object({
        name: z.string(),
        img_framework: z.string(),
        description: z.string(),
        language: z.string(),
        img_language: z.string(),
        last_version: z.string(),
        docs: z.string().url()
    })
})

export const collections = { frameworks }