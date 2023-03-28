import { Exam, ExamImageWithDate, Modality } from "../domain/Exam"
import Grid from "./grid/Grid"
import ImageWithOverlay from "./imageWithOverlay/ImageWithOverlay"

type Props = {
  exams: Exam[]
  onClick: (i: ExamImageWithDate) => void
}

function flattenImages(exams: Exam[]): ExamImageWithDate[] {
  return exams.flatMap((e) => e.images.map((i) => ({ date: e.date, ...i })))
}

function groupByModality(exams: Exam[]) {
  const images = flattenImages(exams)
  const map = new Map<Modality, ExamImageWithDate[]>()
  for (const i of images) {
    const modArray = map.get(i.modality)
    if (modArray) modArray.push(i)
    else map.set(i.modality, [i])
  }
  return Array.from(map)
}

export default function ExaminationByModality({ exams, onClick }: Props) {
  const byModality = groupByModality(exams)

  return (
    <section>
      {byModality.map(([modality, images]) => (
        <section key={modality}>
          <h6>{modality}</h6>
          <Grid>
            {images.map((i) => (
              <ImageWithOverlay
                key={i.thumbnail}
                image={i}
                onClick={() => onClick(i)}
              />
            ))}
          </Grid>
        </section>
      ))}
    </section>
  )
}
