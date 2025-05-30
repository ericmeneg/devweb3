import Pagamento from "./pagamento.class";

export default class PagamentoCredito extends Pagamento{
    realizarPagamento(): boolean {
        const total = this.pedido.getTotal()
        return total != null
    }
}