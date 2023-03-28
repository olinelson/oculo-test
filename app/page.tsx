"use client"

import { useState } from "react"
import ExaminationByDate from "./components/ExaminationByDate"
import ExaminationByModality from "./components/ExaminationByModality"
import { Exam, ExamImageWithDate } from "./domain/Exam"
import { examinations } from "./examinations.json"
import Checkbox from "./components/Checkbox"
import styles from "./page.module.css"
import ExamImageModal from "./components/examImageModal/ExamImageModal"

const exams = Exam.array().parse(examinations)

export default function Home() {
  const [groupByModality, setGroupByModality] = useState(false)
  const [selectedImage, setSelectedImage] = useState<
    ExamImageWithDate | undefined
  >(undefined)

  const onImageClick = (i: ExamImageWithDate) => setSelectedImage(i)

  return (
    <>
      {selectedImage && (
        <ExamImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(undefined)}
        />
      )}

      <main className="container">
        <section className={styles.header}>
          <h5>Examinations</h5>
          <Checkbox
            isChecked={groupByModality}
            onChange={() => setGroupByModality(!groupByModality)}
            label="Group by modality"
          />
        </section>
        {groupByModality ? (
          <ExaminationByModality exams={exams} onClick={onImageClick} />
        ) : (
          <ExaminationByDate exams={exams} onClick={onImageClick} />
        )}
      </main>
    </>
  )
}
