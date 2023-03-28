import { ReactNode } from "react"

type Props = {
  isOpen: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

export default function Modal({ isOpen, title, children, onClose }: Props) {
  return (
    <dialog open={isOpen}>
      <article>
        <header>
          <a
            href="#"
            aria-label="Close"
            className={`close outline`}
            onClick={onClose}
          ></a>
          {title}
        </header>
        {children}
      </article>
    </dialog>
  )
}
