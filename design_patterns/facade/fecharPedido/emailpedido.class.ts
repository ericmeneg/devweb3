import Pedido from "./pedido.class";

export default class EmailPedido{
    constructor(private pedido: Pedido){}

    enviarEmail(msg: string){
        console.log(`Email para ${this.pedido.consumidor.email}: ${msg}`)
    }
}