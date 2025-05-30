import BancoCaixa from "./bancocaixa.class";
import BoletoSimplesFactory from "./boletosimplesfactory.class";

let boletoSimplesFactory = new BoletoSimplesFactory()
const banco = new BancoCaixa(boletoSimplesFactory)

banco.gerarBoleto(10,100)