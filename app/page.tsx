"use client"

import { useState } from "react"
import ExaminationByDate from "./components/ExaminationByDate"
import ExaminationByModality from "./components/ExaminationByModality"
import { Exam } from "./domain/Exam"
import { examinations } from "./examinations.json"

export default function Home() {
  const [groupByModality, setGroupByModality] = useState(false)
  const exams = Exam.array().parse(examinations)

  return (
    <main className="container">
      <label htmlFor="switch">
        <input
          type="checkbox"
          name="switch"
          role="switch"
          checked={groupByModality}
          onChange={() => setGroupByModality(!groupByModality)}
        />
        Group by modality
      </label>

      {groupByModality ? (
        <ExaminationByModality exams={exams} />
      ) : (
        <ExaminationByDate exams={exams} />
      )}
    </main>
  )
}
