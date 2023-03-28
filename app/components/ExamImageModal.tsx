import Image from "next/image"
import { ExamImageWithDate } from "../domain/Exam"
import Modal from "./modal/Modal"

type Props = {
  image: ExamImageWithDate
  onClose: () => void
}

export default function ExamImageModal({ image, onClose }: Props) {
  return (
    <Modal title={image.date?.toISOString()} isOpen onClose={onClose}>
      <Image
        src={image.thumbnail}
        width={400}
        height={400}
        alt={image.modality}
      />
    </Modal>
  )
}
