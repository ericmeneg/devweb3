import { NotificacaoDecorator } from "./notificacaodecorator.class";

export class NotificacaoSMS extends NotificacaoDecorator {

    public enviar(mensagem: string) {
        this.notificacao.enviar(mensagem)
        console.log(`Enviando SMS: ${mensagem}`)
    }
}