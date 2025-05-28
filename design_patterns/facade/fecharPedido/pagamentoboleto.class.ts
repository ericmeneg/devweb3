import Pagamento from "./pagamento.class";

export default class PagamentoBoleto extends Pagamento{
    realizarPagamento(): boolean {
        const total = this.pedido.getTotal()
        return total != null
    }
}