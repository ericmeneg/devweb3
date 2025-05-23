import { NotificacaoDecorator } from "./notificacaodecorator.class";

export class NotificacaoEmail extends NotificacaoDecorator {
    public enviar(mensagem: string) {
        this.notificacao.enviar(mensagem)
        console.log(`Enviando email: ${mensagem}`)
    }
}