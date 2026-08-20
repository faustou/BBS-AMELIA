import BearSVG from './BearSVG'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bear}>
        <BearSVG />
      </div>
      <p className={styles.names}>Amelia</p>
      <div className={styles.divider} />
      <p className={styles.tagline}>
        "Con mucho amor te esperamos para compartir
        el momento más especial de nuestras vidas"
      </p>
      <p className={styles.copy}>Baby Shower · Domingo 4 de Octubre 2026</p>
    </footer>
  )
}
