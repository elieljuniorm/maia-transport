import React from 'react'
import Jurua from '../img/jurua.png'
import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.fundoCapa}>
                <img src={Jurua} alt='Jurua Logística e Transportes LTDA' className={styles.perfilFoto} />
                <p>Jurua Logística e Transportes</p>
            </div>
        </>
    )
}

export default Header