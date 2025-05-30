import BoletoSimplesFactory from "./boletosimplesfactory.class";

export default class BancoCaixa {   
    
    constructor(
        private boletoSimplesFactory: BoletoSimplesFactory //shorthand de this.boletoSimplesFactory = boletoSimplesFactory
        ) {} 

    public gerarBoleto(vencimento: number, valor:number){
        const boleto = this.boletoSimplesFactory.criarBoleto(vencimento,valor)
        console.log(boleto)
        return boleto
    }
}