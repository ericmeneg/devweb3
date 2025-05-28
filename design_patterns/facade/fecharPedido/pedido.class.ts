import Consumidor from "./consumidor.class";
import Produto from "./produto.class";

export default class Pedido{
    public produtos: Produto[] = []

    constructor(public consumidor: Consumidor){}

    addProdutos(produto: Produto){
        this.produtos.push(produto)
    }

    getTotal(): number{
        let subtotal: number = 0
        this.produtos.forEach((x)=>{
            subtotal += x.preco
        })
        return subtotal
    }
}