import React from 'react'

import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.fundoCapa}>
                <img src='https://github.com/elielm14/projeto-frete/blob/main/jurua.png?raw=true' alt='Eliel Maia - Perfil' className={styles.perfilFoto} />
            </div>
        </>
    )
}

export default Header