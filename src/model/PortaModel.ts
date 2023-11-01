export default class PortaModel {
    #numero: number  
    #premiada: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, premiada = false, selecionada = false, aberta = false ){
        this.#numero =      numero
        this.#premiada =    premiada
        this.#selecionada = selecionada
        this.#aberta =      aberta
    }

    get numero(){
        return this.#numero
    }

    get premiada(){
        return this.#premiada
    }
    
    get selecionada(){
        return this.#selecionada
    }
    
    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.aberta
    }

    alternarSelecao(){
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.premiada, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.premiada, this.selecionada, aberta)
    }

    desselecionar(){
        const selecionada = false
        return new PortaModel(this.numero, this.premiada, selecionada, this.aberta)
    }
}