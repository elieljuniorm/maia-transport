import React from 'react'

import styles from './Calculadora.module.css'

function Calculadora() {
    return (

        <div className={styles.pagina}>

            <main>

                <h1>Informe os dados da Mercadoria</h1>

                <form Name={styles.formulario}>

                    <label for="tabela">Tabela:</label>

                    <input type="number" name="fretepeso" id="fretepeso" placeholder="Frete peso" required className={styles.entradaDados} />

                    <label for="valornf">Valor de NF-e:</label>

                    <input type="number" name="valornf" id="valornf" placeholder="Valor NF-e" required className={styles.entradaDados} />

                    <label for="quantidade">Quantidade:</label>

                    <input type="number" name="quantidade" id="quantidade" placeholder="Quantidade" className={styles.entradaDados} />

                    <label for="peso">Peso:</label>

                    <input type="number" name="peso" id="pesobruto" placeholder="Peso bruto" required className={styles.entradaDados} />

                    <label for="cubagem">Cubagem:</label>

                    <input type="number" name="cubagem" id="cubagem" placeholder="Metro cúbico" className={styles.entradaDados} />

                    <label for="fator-de-cubagem">Fator de Cubagem:</label>

                    <input type="number" name="fator" id="fator" placeholder="000 m³" className={styles.entradaDados} />


                    <table className={styles.tabela}>

                        <span>
                            <label for="altura" className={styles.tituloMedidas}>Altura</label>
                            <input type="number" name="altura" id="altura" placeholder="0.00 m" className={styles.medidas} />
                        </span>

                        <span>
                            <label for="altura" className={styles.tituloMedidas}>Largura</label>
                            <input type="number" name="comprimento" id="comprimento" placeholder="0.00 m" className={styles.medidas} />
                        </span>

                        <span>
                            <label for="altura" className={styles.tituloMedidas}>Comprimento</label>
                            <input type="number" name="largura" id="largura" placeholder="0.00 m" className={styles.medidas} />
                        </span>

                        <span>
                            <label for="altura" className={styles.tituloMedidas}>Volume</label>
                            <input type="number" name="volume" id="volume" placeholder="Nº Vol." className={styles.medidas} />
                        </span>

                    </table>

                    {/* <div className={styles.botoes}>
                        <input type="button" value="Adicionar" onclick="adicionar()" className={styles.botaoDimensao} />
                        <input type="button" value="Remover" onclick="remover()" className={styles.botaoDimensao} />
                    </div> */}

                </form>


                <div id="resultado" className={styles.resultado}>
                    <p>O preenchimento incorreto dos dados poderá gerar cobranças extras ou incorretas.</p>
                </div>

                <div className={styles.botoes}>
                    <input type="button" value="Calcular" onclick="calcular()" className={styles.botaoCalcular} />
                </div>
            </main>
        </div>

    )
}

export default Calculadora