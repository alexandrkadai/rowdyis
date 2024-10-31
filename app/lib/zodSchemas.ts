import { z } from 'zod';

export const productShema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  price: z.number().min(1),
  images: z.array(z.string().min(1)),
  category: z.enum(['men', 'women']),
});
