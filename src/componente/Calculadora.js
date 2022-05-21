import React from 'react'

import styles from './Calculadora.module.css'

function Calculadora() {
    return (

        <div className={styles.pagina}>
            <main>

                <h1>Cotação de frete</h1>

                <p>Digite abaixo os valores solicitados:</p>

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

                    <label for="altura-largura-comprimento">Altura x Comprimento x Largura x Volume</label>

                    <table id="tabela-medida">

                        <tr>
                            <td><input type="number" name="altura" id="altura" placeholder="0.00 m" /></td>
                            <td><input type="number" name="comprimento" id="comprimento" placeholder="0.00 m" /></td>
                            <td><input type="number" name="largura" id="largura" placeholder="0.00 m" /></td>
                            <td><input type="number" name="volume" id="volume" placeholder="Nº Vol." /></td>
                        </tr>

                    </table>

                    <div class="botoes">
                        <input type="button" value="Adicionar" onclick="adicionar()" className={styles.botaoDimensao} />
                        <input type="button" value="Remover" onclick="remover()" className={styles.botaoDimensao} />
                    </div>

                </form>


                <div id="resultado">
                    <p>Os valores serão exibidos com base nas informações fornecidas acima.</p>
                </div>

                <div class="botoes">
                    <input type="button" value="Calcular" onclick="calcular()" className={styles.botaoCalcular} />
                </div>
            </main>
        </div>

    )
}

export default Calculadora