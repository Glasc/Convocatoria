import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Layout.module.scss'

function Navbar() {
  const { asPath } = useRouter()

  return (
    <nav className={styles.navbar}>
      <div className={styles.elements}>
        <h1 className={styles.logo}>
          TEC <span className={styles.word}>MM</span>
        </h1>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href='/'>
              <a className={asPath === '/' ? 'linkActive' : ''}>Inicio</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href='/inscripcion'>
              <a className={asPath === '/inscripcion' ? 'linkActive' : ''}>Inscripción</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href='/comite'>
              <a className={asPath === '/comite' ? 'linkActive' : ''}>Comité</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
