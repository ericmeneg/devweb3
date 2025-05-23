import { Notificacao } from "./notificacao.class"

export class NotificacaoSimples extends Notificacao{
    public enviar(mensagem: string): void{
        console.log(`Notificação simples: ${mensagem}`)
    }
}