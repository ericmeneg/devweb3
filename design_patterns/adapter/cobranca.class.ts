import { Gateway } from './gateway.interface.ts'

export class Cobranca {

    private gateway: Gateway

    constructor(gateway: Gateway){
        this.gateway = gateway
    }

    setGateway(gateway: Gateway): void {
        this.gateway = gateway
    }

    setValor(valor: number): void {
        this.gateway.setValor(valor)
    }

    setParcelas(parcelas: number): void {
        this.gateway.setParcelas(parcelas)
    }

    setNumeroCartao(numeroCartao: string): void {
        this.gateway.setNumeroCartao(numeroCartao)
    }   

    setCVV(cvv: string): void {
        this.gateway.setCVV(cvv)
    }

    realizarPagamento(): boolean {

        if (this.gateway.validarCartao()) {
        return this.gateway.realizarPagamento()
        }

        return false
    }
}