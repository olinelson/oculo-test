import Image from "next/image"
import { Exam, ExamImageWithDate } from "../domain/Exam"

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
        <div className="image-grid">
          {oct.map((i) => (
            <Image
              key={i.thumbnail}
              src={i.thumbnail}
              width={150}
              height={150}
              alt={i.modality}
            />
          ))}
        </div>
      </section>
      <section>
        <h6>OP</h6>
        <div className="image-grid">
          {op.map((i) => (
            <Image
              key={i.thumbnail}
              src={i.thumbnail}
              width={150}
              height={150}
              alt={i.modality}
            />
          ))}
        </div>
      </section>
    </>
  )
}
