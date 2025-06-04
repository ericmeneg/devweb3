import Boleto from "./boleto.class";

export default abstract class Banco {
    public gerarBoleto(vencimento: number, valor: number): Boleto{
        const boleto = this.criarBoleto(vencimento, valor)
        console.log(boleto)
        return boleto
    }

    protected abstract criarBoleto(vencimento: number, valor: number): Boleto
}