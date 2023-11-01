import Porta from '../../../components/Porta'
import { useEffect, useState } from 'react'
import { atualizarPortas, criarPortas } from '../../../functions/portas'
import styles from '../../../styles/game.module.css'
import Link from "next/link"
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

export default function Game() {

    const router = useRouter()
    const [arrayPortas, setArrayPortas] =   useState([])
    const [valido,      setValido] =        useState(false)


    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const quantValida = portas >= 3 && portas <= 15
        const presenteValido = temPresente >= 1 && temPresente <= portas

        setValido(quantValida && presenteValido)

    }, [arrayPortas, router.query.portas, router.query.temPresente])


    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setArrayPortas(criarPortas(portas,temPresente))
    }, [router?.query])

    function renderizarPortas(){
        return valido && arrayPortas.map(porta => {
            return <Porta key={porta.numero} 
                value={porta} 
                onChange={novaPorta => setArrayPortas(atualizarPortas(arrayPortas, novaPorta))}/>
        })
    }
      
    return (
        <div className={styles.game}>
            <Head>
                <title>Problema de Monty Hall</title>
                <link rel="icon" href="/icon-porta.svg" />
            </Head> 
            <div className={styles.portas}>
                {valido ?
                    renderizarPortas()
                        :
                    <h2>Valores Inválidos</h2>
                }
            </div>
            <div className={styles.botoes}>
                <Link passHref href='/'>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )  
}
