import Image from "next/image"
import { Exam, ExamImageWithDate } from "../domain/Exam"
import Grid from "./grid/Grid"

export default function ExaminationByModality({ exams }: { exams: Exam[] }) {
  const imagesWithDate: ExamImageWithDate[] = exams.flatMap((e) =>
    e.images.map((i) => ({ date: e.date, ...i }))
  )
  const oct = imagesWithDate.filter((i) => i.modality === "OCT")
  const op = imagesWithDate.filter((i) => i.modality === "OP")
  return (
    <>
      <section>
        <h6>Oct</h6>
        <Grid>
          {oct.map((i) => (
            <Image
              key={i.thumbnail}
              src={i.thumbnail}
              width={150}
              height={150}
              alt={i.modality}
            />
          ))}
        </Grid>
      </section>
      <section>
        <h6>OP</h6>
        <Grid>
          {op.map((i) => (
            <Image
              key={i.thumbnail}
              src={i.thumbnail}
              width={150}
              height={150}
              alt={i.modality}
            />
          ))}
        </Grid>
      </section>
    </>
  )
}
