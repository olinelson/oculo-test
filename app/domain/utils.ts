import { Exam, ExamImageWithDate, Modality } from "./exam"

export function flattenImages(exams: Exam[]): ExamImageWithDate[] {
  return exams.flatMap((e) => e.images.map((i) => ({ date: e.date, ...i })))
}

export function groupByModality(exams: Exam[]) {
  const images = flattenImages(exams)
  const map = new Map<Modality, ExamImageWithDate[]>()
  for (const i of images) {
    const modArray = map.get(i.modality)
    if (modArray) modArray.push(i)
    else map.set(i.modality, [i])
  }
  return Array.from(map)
}
