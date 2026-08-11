import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  subscribeNewsletter: defineAction({
    input: z.object({ email: z.string().email() }),
    // No email service provider connected yet — validates and accepts only.
    handler: async ({ email }) => {
      return { success: true, email };
    },
  }),
};
