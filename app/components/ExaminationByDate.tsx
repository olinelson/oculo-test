import { Exam, ExamImageWithDate } from "../domain/Exam"
import Grid from "./grid/Grid"
import { useState } from "react"
import ExamImageModal from "./examImageModal/ExamImageModal"
import ImageWithOverlay from "./imageWithOverlay/ImageWithOverlay"

type Props = {
  exams: Exam[]
  onClick: (i: ExamImageWithDate) => void
}

export default function ExaminationByDate({ exams, onClick }: Props) {
  const [selectedImage, setSelectedImage] = useState<
    ExamImageWithDate | undefined
  >(undefined)
  const keyPrefix = "examination-by-date"

  const onClose = () => setSelectedImage(undefined)
  return (
    <>
      {selectedImage && (
        <ExamImageModal image={selectedImage} onClose={onClose} />
      )}
      {exams.map((e) => (
        <section key={`${keyPrefix}-${e.date.toISOString()}`}>
          <h6>{new Intl.DateTimeFormat("en-GB").format(e.date)}</h6>
          <Grid>
            {e.images.map((i) => (
              <ImageWithOverlay
                key={`${keyPrefix}-image-${i.thumbnail}`}
                image={{ ...i, date: e.date }}
                onClick={onClick}
              />
            ))}
          </Grid>
        </section>
      ))}
    </>
  )
}
