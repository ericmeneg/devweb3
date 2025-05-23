import { Pizza } from "./pizza.class"

export class PizzaQueijo extends Pizza{
    constructor(){
        super()
        this.descricao = "Pizza de queijo"
        this.preco = 22
    }

    public getDescricao(): string {
        return this.descricao
    }

    public getPreco(): number {
        return this.preco
    }
}