import { ReactNode } from "react"

type Props = {
  isOpen: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

import styles from "./modal.module.css"

export default function Modal({ isOpen, title, children, onClose }: Props) {
  return (
    <dialog open={isOpen}>
      <article>
        <header>
          <button
            aria-label="Close"
            className={`close outline ${styles.button}`}
            onClick={onClose}
          ></button>
          {title}
        </header>
        {children}
      </article>
    </dialog>
  )
}
