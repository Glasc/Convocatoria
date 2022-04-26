import React from 'react'
import Button from '../components/ui/button/Button'
import styles from '../styles/pages/inscripcion.module.scss'

const Inscripcion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.description}>
          <h1>Inscripción</h1>
          <p>
            La inscripción de los ponentes quedará abierta a partir de la fecha
            de publicación de la presente convocatoria y hasta el día 25 de
            abril del 2022. Las solicitudes de inscripción serán a través del
            siguiente enlace: https://forms.gle/4HXW1DHj9KFV1QKO6, en donde
            además de sus datos personales, se deberá capturar el resumen de
            ponencia. La cuota de recuperacion es de: $200.00 (doscientos pesos
            00/100 M.N) se puede realizar depósito bancario a la tarjeta numero:
            5339 2204 0523 1007, clabe interbancaria 646012168900116045, Sistema
            de Transferencias y Pagos o STP, a nombre de Jean Carlo Gonzalez
            Tovar.{' '}
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3>Número:</h3>
            <p>5339 2204 0523 1007</p>
            <h3>Clave interbancaria:</h3>
            <p>646012168900116045</p>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Button className={styles.btn}>Ir al formulario</Button>
      </div>
    </div>
  )
}

export default Inscripcion
