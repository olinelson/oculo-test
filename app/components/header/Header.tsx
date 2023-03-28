import { ReactNode } from "react"
import styles from "./header.module.css"

export function Header({ children }: { children: ReactNode }) {
  return <section className={styles.header}>{children}</section>
}
