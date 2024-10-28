import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .min(1, { message: "O título não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O título não pode ter apenas espaços",
    }),
  banner: z
    .string()
    .min(1, { message: "O link do banner não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O link do banner não pode ter apenas espaços",
    }),
  text: z
    .string()
    .min(1, { message: "O texto não pode ser vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "O texto não pode ter apenas espaços",
    }),
});