import Image from "next/image"
import { ExamImageWithDate } from "../../domain/Exam"
import styles from "./imageWithOverlay.module.css"

type Props = {
  image: ExamImageWithDate
  onClick: (i: ExamImageWithDate) => void
}

export default function ImageWithOverlay({ onClick, image }: Props) {
  const tooltipMessage = `${image.eye === "L" ? "Left" : "Right"} - ${
    image.modality
  }`
  return (
    <div className={styles.overlay} data-tooltip={tooltipMessage}>
      <Image
        onClick={() => onClick(image)}
        key={image.thumbnail}
        src={image.thumbnail}
        width={150}
        height={150}
        alt={`Eye exam image from ${image.modality} camera`}
      />
    </div>
  )
}
