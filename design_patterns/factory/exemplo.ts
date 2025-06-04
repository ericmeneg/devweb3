import BancoBrasil from "./bancobrasil.class";
import BancoCaixa from "./bancocaixa.class";

// let boletoSimplesFactory = new BoletoSimplesFactory()  <-- Usando o simple factory
// const banco = new BancoCaixa(boletoSimplesFactory)

const banco = new BancoCaixa()
banco.gerarBoleto(10,100)

const banco2 = new BancoBrasil()
banco2.gerarBoleto(10,200)