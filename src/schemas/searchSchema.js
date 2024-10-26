import { z } from "zod";

export const searchSchema = z.object({
    title: z
      .string()
      .min(1, { message: "A pesquisa não pode ser vazia." })
      .refine((value) => !/^\s*$/.test(value), {
        message: "A pesquisa não pode ter apenas espaço.",
      }),
  });