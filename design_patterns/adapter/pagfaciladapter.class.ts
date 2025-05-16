import { Gateway } from './gateway.interface'

export class PagFacilAdapter extends PagFacil implements Gateway {
    //Func() que já eram implementadas no sistema
    //PagFacil não existe, está exemplificando uma biblioteca de processamento de pagamentos qualquer
    setValor(valor: number): void {

    }

    setCVV(cvv: string): void {
        
    }

    setNumeroCartao(numeroCartao: string): void {
        
    }

    setParcelas(parcelas: number): void {
        
    }

    validarCartao(): boolean {
        
    }

    realizarPagamento(): boolean {
        
    }
}