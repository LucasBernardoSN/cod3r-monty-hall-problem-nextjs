import Head from 'next/head'
import Cartao from '../components/Cartao'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import EntradaNumerica from '../components/EntradaNumerica'
import { useState } from 'react'

export default function Home() {

    const [quantPortas, setQuantPortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)  

    return (
        <div className={styles.home}>
            <Head>
                <title>Problema de Monty Hall</title>
                <link rel="icon" href="/icon-porta.svg" />
            </Head> 
            
            <div>
                <Cartao bgcolor="#901">
                    <h1>Problema de Monty Hall</h1>
                </Cartao>
                <Cartao>
                    <EntradaNumerica text="Quantidade de Portas" value={quantPortas} onChange={e => setQuantPortas(e)}/>
                </Cartao>
            </div>
            <div>
                <Cartao>
                    <EntradaNumerica text="Porta Com Presente" value={comPresente} onChange={e => setComPresente(e)}/>
                </Cartao>
                <Cartao bgcolor="#369">
                    <Link passHref href={`/game/${quantPortas}/${comPresente}`}>
                        <h1 className={styles.link}>Iniciar</h1>
                    </Link>
                </Cartao>
            </div>
             
        </div>
    )  
}
