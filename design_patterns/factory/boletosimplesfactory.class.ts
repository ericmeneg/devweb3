import BancoCaixaBoleto10Dias from "./bancocaixaboleto10dias.class"
import BancoCaixaBoleto30Dias from "./bancocaixaboleto30dias.class"
import BancoCaixaBoleto60Dias from "./bancocaixaboleto60dias.class"
import Boleto from "./boleto.class"

export default class BoletoSimplesFactory{
    public criarBoleto(vencimento: number, valor: number){
        let boleto: Boleto
        
        switch(vencimento){
            case 10:
                boleto = new BancoCaixaBoleto10Dias(valor)
                break

            case 30:
                boleto = new BancoCaixaBoleto30Dias(valor)
                break

            case 60:
                boleto = new BancoCaixaBoleto60Dias(valor)
                break
            default:
                throw new Error("Vencimento indisponível")
        }

        return boleto
    }
}