import React from 'react'

import styles from './Calculadora.module.css'

function Calculadora() {

    function calcular() {

        let resultado = 'O preenchimento incorreto dos dados poderá gerar cobranças extras ou incorretas.'

        const tab = 0.99
        const seguro = 0.01
        const icms = 0.93
        const taxa = 70.00
        const fat = 300
        let val = Number(document.getElementById("valornf").value)
        let pes = Number(document.getElementById("pesobruto").value)
        let cub = Number(document.getElementById("cubagem").value)
        let qua = Number(document.getElementById("quantidade").value)
        let alt = Number(document.getElementById("altura").value)
        let com = Number(document.getElementById("comprimento").value)
        let lag = Number(document.getElementById("largura").value)
        let res = document.getElementById('resultado')
        let dim = (alt * com * lag * qua) * fat
        let cubft = cub * fat

        console.log({ cubft, dim, pes })

        if (val <= 0 || pes <= 0) {

            alert('VALOR DE NF-e OU PESO INVALIDOS, TENTE NOVAMENTE.')

        } else {

            console.log(cubft > pes && cubft > dim && pes !== 0 && val !== 0)

            let fretecb = ((val * seguro) + taxa + (cubft * tab)) / icms

            console.log(cubft > pes && dim > cubft && pes !== 0 && val !== 0)

            let fretedim = ((val * seguro) + taxa + (dim * tab)) / icms

            console.log(cubft < pes && dim < pes && pes !== 0 && val !== 0)

            let fretepeso = ((val * seguro) + taxa + (pes * tab)) / icms

            console.log('fretecb: ' + fretecb)
            console.log('fretedim: ' + fretedim)
            console.log('fretepeso: ' + fretepeso)

            let fretes = [fretecb, fretedim, fretepeso]

            let maiorFrete = fretes.reduce(function (prev, current) {
                return prev > current ? prev : current;
            })

            console.log('maiorFrete: ' + maiorFrete)

            resultado = `Seu frete fica no valor de R$ ${maiorFrete.toFixed(2)}`

            if (val <= 1000 && pes <= 100 && pes > 50 && pes !== 0 && val !== 0) {
                resultado = `Seu frete fica no valor de R$ 150,00`
            }

            if (val <= 1000 && pes <= 50 && pes !== 0 && val !== 0) {
                resultado = `Seu frete fica no valor de R$ 125,00`
            }

            res.innerHTML = resultado
        }

    }

    return (

        <div className={styles.pagina}>

            <main>

                <h1>Informe os dados da mercadoria</h1>

                <form className={styles.formulario}>

                    <label >Valor de NF-e:</label>

                    <input type="number" id="valornf" placeholder="Valor NF-e" required className={styles.entradaDados} />

                    <label>Quantidade:</label>

                    <input type="number" id="quantidade" placeholder="Quantidade" className={styles.entradaDados} />

                    <label >Peso:</label>

                    <input type="number" id="pesobruto" placeholder="Peso bruto" required className={styles.entradaDados} />

                    <label>Metro cúbico:</label>

                    <input type="number" id="cubagem" placeholder="Metro cúbico" className={styles.entradaDados} />

                    <div className={styles.tabela}>

                        <span>
                            <label className={styles.tituloMedidas}>Altura</label>
                            <input type="number" id="altura" placeholder="0.00 m" className={styles.medidas} />
                        </span>

                        <span>
                            <label className={styles.tituloMedidas}>Largura</label>
                            <input type="number" id="comprimento" placeholder="0.00 m" className={styles.medidas} />
                        </span>

                        <span>
                            <label className={styles.tituloMedidas}>Comprimento</label>
                            <input type="number" id="largura" placeholder="0.00 m" className={styles.medidas} />
                        </span>

                    </div>

                </form>

                <div id="resultado" className={styles.resultado}>
                    <p>O preenchimento incorreto dos dados poderá gerar cobranças extras ou incorretas.</p>
                </div>

                <div className={styles.botoes}>
                    <button type='button' title='Calcular' className={styles.botaoCalcular} onClick={calcular}>CALCULAR</button>
                </div>
            </main>
        </div>

    )
}

export default Calculadora
