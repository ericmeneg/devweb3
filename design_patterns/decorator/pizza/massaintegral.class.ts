import { AcrescimoDecorator } from "./acrescimodecorator.class";

export class MassaIntegral extends AcrescimoDecorator{
    public getDescricao(): string {
        return this.pizza.getDescricao() + ' e massa integral'
    }

    public getPreco(): number {
        return this.pizza.getPreco() + 5    
    }
}