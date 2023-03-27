"use client"

import { useState } from "react"
import ExaminationByDate from "./components/ExaminationByDate"
import ExaminationByModality from "./components/ExaminationByModality"
import { Exam } from "./domain/Exam"
import { examinations } from "./examinations.json"
import Container from "./components/Container"
import styled from "styled-components"
import Checkbox from "./components/Checkbox"

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    margin: 0;
  }
`

export default function Home() {
  const [groupByModality, setGroupByModality] = useState(false)
  const exams = Exam.array().parse(examinations)

  return (
    <Container>
      <Header>
        <h5>Examinations</h5>
        <Checkbox
          isChecked={groupByModality}
          onChange={() => setGroupByModality(!groupByModality)}
          label="Group by modality"
        />
      </Header>

      {groupByModality ? (
        <ExaminationByModality exams={exams} />
      ) : (
        <ExaminationByDate exams={exams} />
      )}
    </Container>
  )
}
