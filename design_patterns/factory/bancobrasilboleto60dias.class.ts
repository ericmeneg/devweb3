import Boleto from "./boleto.class"

export default class BancoBrasilBoleto60Dias extends Boleto {
    constructor(valor: number){
        super(valor)
        this.juros = 0.1
        //Desconto é zero, e já foi inicializado como zero
        this.multa = 0.20
    }
}