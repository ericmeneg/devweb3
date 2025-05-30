export default abstract class Boleto{
    protected valor: number
    protected juros = 0
    protected desconto = 0
    protected multa = 0

    constructor(valor: number){
        this.valor = valor
    }

    public calcularJuros(): number{
        return this.valor * this.juros
    }

    public calcularDesconto(): number{
        return this.valor * this.desconto
    }

    public calcularMulta(): number{
        return this.valor * this.multa
    }
} 