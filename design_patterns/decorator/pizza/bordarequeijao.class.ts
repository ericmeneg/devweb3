import { AcrescimoDecorator } from "./acrescimodecorator.class";

export class BordaRequeijao extends AcrescimoDecorator{
    public getDescricao(): string {
        return this.pizza.getDescricao() + ' com borda de requeijão'
    }

    public getPreco(): number {
        return this.pizza.getPreco() + 8.5    
    }
}