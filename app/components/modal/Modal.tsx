import { ReactNode, useCallback, useEffect } from "react"

type Props = {
  isOpen: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

export default function Modal({ isOpen, title, children, onClose }: Props) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && onClose(),
    [onClose]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [handleEscape])

  return (
    <dialog open={isOpen} onClick={onClose}>
      <article onClick={(e) => e.stopPropagation()}>
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
