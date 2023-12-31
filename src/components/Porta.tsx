import styles from "../styles/Porta.module.css"
import PortaModel from "../model/PortaModel"
import Presente from "./Presente"

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){

    const porta  = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => {e.stopPropagation() 
                        props.onChange(porta.abrir())}

    return(
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.frame} ${selecionada}`}>
                {porta.fechada 
                ? 
                    <div className={styles.porta}>
                        <div className={styles.numeroDaPorta}>{porta.numero}</div>
                        <div className={styles.massaneta} onClick={abrir} />
                    </div>
                :
                    porta.premiada ? <Presente/> : false
                }
            </div>
            <div className={styles.groundFrame} />
        </div>
    )
}