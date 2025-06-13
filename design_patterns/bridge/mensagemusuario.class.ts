import Mensagem from "./mensagem.class";

export default class MensagemUsuario extends Mensagem {
    public enviar(): void {
        console.log("Mensagem de usuário enviada")
        this.canal.enviarMensagem(this.assunto, this.mensagem)
    }
}