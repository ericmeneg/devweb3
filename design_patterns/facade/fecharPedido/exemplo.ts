import Consumidor from "./consumidor.class.ts"
import Produto from  "./produto.class.ts"
// import Pedido from "./pedido.class.ts"
// import PagamentoBoleto from "./pagamentoboleto.class.ts";
// import EmailPedido from "./emailpedido.class.ts";
import VendaFacade from "./vendafacade.class.ts";

const consumidor = new Consumidor('Teste','12345678900', 'email@email.com');

const produto1 = new Produto ('Produto 1', 'Desc', 80.99)
const produto2 = new Produto ('Produto 2', 'Desc', 40.99)
const produto3 = new Produto ('Produto 3', 'Desc', 60.99)

const vendaFacade = new VendaFacade(consumidor)
vendaFacade.addProduto(produto1)
vendaFacade.addProduto(produto2)
vendaFacade.addProduto(produto3)
vendaFacade.pedidoBoleto()

//sem facade, o código fica da seguinte forma, após a criação dos produtos:

/*
const pedido = new Pedido(consumidor)
pedido.addProdutos(produto1)
pedido.addProdutos(produto2)
pedido.addProdutos(produto3)

const pagamento = new PagamentoBoleto(pedido)
const email = new EmailPedido(pedido)

if(pagamento.realizarPagamento()){
    email.enviarEmail('Pagamento com sucesso!')
} else {
    email.enviarEmail('Pagamento com problema!')
}
*/