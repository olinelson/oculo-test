import { ReactNode } from "react"

export function Header({ children }: { children: ReactNode }) {
  return (
    <>
      <section>{children}</section>
      <style jsx>{`
        section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h5 {
            margin: 0;
          }
        }
      `}</style>
    </>
  )
}
