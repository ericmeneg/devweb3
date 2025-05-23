import { NotificacaoDecorator } from "./notificacaodecorator.class";

export class NotificacaoPush extends NotificacaoDecorator {
    public enviar(mensagem: string) {
        this.notificacao.enviar(mensagem)
        console.log(`Enviando push notification: ${mensagem}`)
    }
}