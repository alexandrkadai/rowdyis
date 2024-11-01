import { z } from 'zod';

export const productShema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  price: z.number().min(1),
  images: z.array(z.string().min(1)),
  category: z.enum(['men', 'women']),
  sizeS: z.number().optional(),
  sizeM: z.number().optional(),
  sizeL: z.number().optional(),
  sizeXl: z.number().optional(),
  size2xl: z.number().optional(),
  size3xl: z.number().optional(),
});
