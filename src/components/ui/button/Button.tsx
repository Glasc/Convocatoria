import React from 'react'
import styles from "./Button.module.scss"

const Button = ({children}: any) => {
  return (
    <button className={styles.button}>
      <span>{children}</span>
    </button>
  )
}

export default Button