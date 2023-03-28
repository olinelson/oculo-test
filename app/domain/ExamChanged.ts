import { z } from "zod"

export const Eye = z.enum(["L", "R"])
export type Eye = z.infer<typeof Eye>

export const Modality = z.enum(["OCT", "OP"])
export type Modality = z.infer<typeof Modality>

export const ExamImage = z.object({
  eye: Eye,
  modality: Modality,
  note: z.string(),
  thumbnail: z.string(),
})
export type ExamImage = z.infer<typeof ExamImage>

export const ExamImageWithDate = ExamImage.extend({
  date: z.date(),
})
export type ExamImageWithDate = z.infer<typeof ExamImageWithDate>

export const Exam = z.object({
  date: z.coerce.date(),
  images: ExamImage.array(),
})
export type Exam = z.infer<typeof Exam>
