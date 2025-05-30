import Boleto from "./boleto.class"

export default class BancoCaixaBoleto30Dias extends Boleto {
    constructor(valor: number){
        super(valor)
        this.juros = 0.05
        this.desconto = 0.05
        this.multa = 0.1
    }
}