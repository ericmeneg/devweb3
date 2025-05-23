import { Notificacao } from "./notificacao.class"

export abstract class NotificacaoDecorator extends Notificacao {
    protected notificacao: Notificacao

    constructor(notificacao: Notificacao){
        super()
        this.notificacao = notificacao
    }

    abstract enviar(mensagem: string): void
}