import Image from "next/image"
import { Exam } from "../domain/Exam"

export default function ExaminationByDate({ exams }: { exams: Exam[] }) {
  return (
    <>
      {exams.map((e) => (
        <section key={`by-date-${e.date.toISOString()}`}>
          <h6>{new Intl.DateTimeFormat("en-GB").format(e.date)}</h6>
          <div className="image-grid">
            {e.images.map((i) => (
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
      ))}
    </>
  )
}
