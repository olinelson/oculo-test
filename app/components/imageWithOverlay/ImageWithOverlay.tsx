import Image from "next/image"
import { ExamImage } from "../../domain/Exam"
import styles from "./imageWithOverlay.module.css"

type Props = {
  image: ExamImage
  onClick: (i: ExamImage) => void
}

export default function ImageWithOverlay({ onClick, image }: Props) {
  return (
    <div className={styles.overlay}>
      <small
        data-tooltip={`${image.eye === "L" ? "Left" : "Right"}, ${
          image.modality
        }`}
      >
        i
      </small>
      <Image
        onClick={() => onClick(image)}
        key={image.thumbnail}
        src={image.thumbnail}
        width={150}
        height={150}
        alt={image.modality}
      />
    </div>
  )
}
