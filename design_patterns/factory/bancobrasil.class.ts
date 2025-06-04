import Banco from "./banco.class";
import BancoBrasilBoleto10Dias from "./bancobrasilboleto10dias.class";
import BancoBrasilBoleto30Dias from "./bancobrasilboleto30dias.class";
import BancoBrasilBoleto60Dias from "./bancobrasilboleto60dias.class";
import Boleto from "./boleto.class";

export default class BancoBrasil extends Banco{
    public criarBoleto(vencimento: number, valor: number): Boleto {
        let boleto: Boleto

        switch (vencimento) {
            case 10:
                boleto = new BancoBrasilBoleto10Dias(vencimento)
                break
            case 30:
                boleto = new BancoBrasilBoleto30Dias(vencimento)
                break
            case 60:
                boleto = new BancoBrasilBoleto60Dias(vencimento)
                break
            default:
                throw new Error("Vencimento indisponível")
        }

        return boleto
    }
}