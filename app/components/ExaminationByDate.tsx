import Image from "next/image"
import { Exam } from "../domain/Exam"

export default function ExaminationByDate({ exams }: { exams: Exam[] }) {
  return (
    <>
      {exams.map((e) => (
        <section key={`by-date-${e.date.toISOString()}`}>
          <h6>{new Intl.DateTimeFormat("en-GB").format(e.date)}</h6>
          <div>
            {e.images.map((i) => (
              <Image
                key={i.thumbnail}
                src={i.thumbnail}
                width={100}
                height={100}
                alt={i.modality}
              />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
