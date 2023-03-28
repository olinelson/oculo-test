import { Exam, ExamImageWithDate } from "../domain/exam"
import { groupByModality } from "../domain/utils"
import Grid from "./grid/Grid"
import ImageWithOverlay from "./imageWithOverlay/ImageWithOverlay"

type Props = {
  exams: Exam[]
  onClick: (i: ExamImageWithDate) => void
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
