import { PagFacilAdapter } from "./pagfaciladapter.class"
import { TopPagamentosAdapter } from "./toppagamentosadapter.class"
import { Cobranca } from "./cobranca.class"

const topPagamentos = new TopPagamentos() //Lib externa
const pagFacilAdapter = new PagFacilAdapter()
const topPagamentosAdapter = new TopPagamentosAdapter(topPagamentos)

const cobranca = new Cobranca(pagFacilAdapter)
cobranca.setValor(100)
cobranca.setParcelas(1)
cobranca.setNumeroCartao("1234123412341234")
cobranca.setCVV("123")

if(cobranca.realizarPagamento()){
    console.log("sucesso!")
}

const cobranca2 = new Cobranca(topPagamentosAdapter)
cobranca2.setValor(300)
cobranca2.setParcelas(3)
cobranca2.setNumeroCartao("4321432143214321")
cobranca2.setCVV("321")
if (cobranca2.realizarPagamento()){
    console.log("sucesso!")
}