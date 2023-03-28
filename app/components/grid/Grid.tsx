import { ReactNode } from "react"
import styles from "./grid.module.css"

export default function Grid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>
}
