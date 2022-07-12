import React from 'react'

import styles from '../footer/Footer.module.css'

function Footer() {
  return (
    <footer>

      <p className = { styles.copyrigth}>&copy; Copyrigth Maia Transport 2022</p>
      <p className= { styles.design }>Design by Eliel Maia</p>

    </footer>
  )
}

export default Footer