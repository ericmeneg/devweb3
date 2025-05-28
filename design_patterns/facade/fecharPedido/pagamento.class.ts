import Pedido from "./pedido.class";

export default abstract class Pagamento{
    constructor(protected pedido: Pedido){}
    abstract realizarPagamento(): boolean
}