import React from 'react'
import MaiaTransport from '../img/android-chrome-512x512.png'
import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.fundoCapa}>
                <img src={MaiaTransport} alt='Maia Transport' className={styles.perfilFoto} />
                <p>Maia Transport - Frete Rápido</p>
            </div>
        </>
    )
}

export default Header