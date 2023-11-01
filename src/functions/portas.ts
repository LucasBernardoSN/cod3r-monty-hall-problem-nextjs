import PortaModel from "../model/PortaModel";

export function criarPortas(qtde: number, portaComPresente: number): PortaModel[] {
    return Array.from({length: qtde}, (_, i) => {
        const numero = i + 1
        const premiada = numero === portaComPresente
        return new PortaModel(numero, premiada)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero

        if(igualModificada){
            return portaModificada
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar() 
        }
    })
}