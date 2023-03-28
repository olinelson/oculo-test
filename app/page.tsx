"use client"

import { useState } from "react"
import ExaminationByDate from "./components/ExaminationByDate"
import ExaminationByModality from "./components/ExaminationByModality"
import { Exam } from "./domain/Exam"
import { examinations } from "./examinations.json"
import Checkbox from "./components/Checkbox"
import styles from "./page.module.css"

const exams = Exam.array().parse(examinations)

export default function Home() {
  const [groupByModality, setGroupByModality] = useState(false)
  return (
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
        <ExaminationByModality exams={exams} />
      ) : (
        <ExaminationByDate exams={exams} />
      )}
    </main>
  )
}
