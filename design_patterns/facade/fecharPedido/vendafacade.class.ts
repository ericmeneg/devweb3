import Consumidor from "./consumidor.class";
import EmailPedido from "./emailpedido.class";
import Pagamento from "./pagamento.class";
import PagamentoBoleto from "./pagamentoboleto.class";
import PagamentoCredito from "./pagamentocredito.class";
import Pedido from "./pedido.class";
import Produto from "./produto.class";

export default class VendaFacade {
    private pedido: Pedido
    private email: EmailPedido
    private pagamento: Pagamento | null = null

    constructor(consumidor: Consumidor) {
        this.pedido = new Pedido(consumidor)
        this.email = new EmailPedido(this.pedido)
    }

    addProduto(produto: Produto) {
        this.pedido.addProdutos(produto)
    }

    pedidoCredito() {
        this.pagamento = new PagamentoCredito(this.pedido)
        if (this.pagamento.realizarPagamento()) {
            this.email.enviarEmail("Pagamento no crédito realizado com sucesso!")
        } else {
            this.email.enviarEmail("Falha ao pagar via crédito!")
        }
    }

    pedidoBoleto() {
        this.pagamento = new PagamentoBoleto(this.pedido)
        if (this.pagamento.realizarPagamento()) {
            this.email.enviarEmail("Pagamento no crédito realizado com sucesso!")
        } else {
            this.email.enviarEmail("Falha ao pagar via crédito!")
        }
    }
}