import Link from "next/link"
import styles from "./MainPageLayout.module.scss"
import colors from '../../styles/colors.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.elements}>
        <h1 className={styles.logo}>
          TEC <span className={styles.word}>MM</span>
        </h1>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/descripcion">
              <a>Descripción</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/comite">
              <a>Comité</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const MainPageLayout = ({ children }: any) => {
  return (
    <div className={styles.container} >
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default MainPageLayout
