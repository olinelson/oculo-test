import Image from "next/image"
import { Exam, ExamImage, ExamImageWithDate } from "../domain/Exam"
import Grid from "./grid/Grid"
import { useState } from "react"
import Modal from "./modal/Modal"
import ExamImageModal from "./ExamImageModal"
import ImageWithOverlay from "./imageWithOverlay/ImageWithOverlay"

export default function ExaminationByDate({ exams }: { exams: Exam[] }) {
  const [selectedImage, setSelectedImage] = useState<
    ExamImageWithDate | undefined
  >(undefined)

  const onClose = () => setSelectedImage(undefined)
  return (
    <>
      {selectedImage && (
        <ExamImageModal image={selectedImage} onClose={onClose} />
      )}
      {exams.map((e) => (
        <section key={`by-date-${e.date.toISOString()}`}>
          <h6>{new Intl.DateTimeFormat("en-GB").format(e.date)}</h6>
          <Grid>
            {e.images.map((i) => (
              <ImageWithOverlay
                key={i.eye} //TODO
                image={i}
                onClick={() => setSelectedImage(i)}
              />
            ))}
          </Grid>
        </section>
      ))}
    </>
  )
}
