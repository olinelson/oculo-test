import Image from "next/image"
import { ExamImageWithDate } from "../../domain/exam"
import Modal from "../modal/Modal"
import styles from "./examImageModal.module.css"

type Props = {
  image: ExamImageWithDate
  onClose: () => void
}

export default function ExamImageModal({ image, onClose }: Props) {
  const prettyDate = new Intl.DateTimeFormat("en-GB").format(image.date)
  const prettyEye = image.eye === "L" ? "Left" : "Right"
  const size = 500
  return (
    <Modal
      title={`${prettyDate} - ${image.modality} of ${prettyEye} eye`}
      isOpen
      onClose={onClose}
    >
      <Image
        src={image.thumbnail}
        width={size}
        height={size}
        alt={`Eye exam image from ${image.modality} camera`}
      />

      <footer className={styles.footer}>
        <hgroup className={styles.notes}>
          <h6>Notes</h6>
          <p>{image.note}</p>
        </hgroup>
      </footer>
    </Modal>
  )
}
