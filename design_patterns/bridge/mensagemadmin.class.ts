import Mensagem from "./mensagem.class";

export default class MensagemAdmin extends Mensagem {
    public enviar(): void {
        console.log("Mensagem de admin enviada")
        this.canal.enviarMensagem(this.assunto, this.mensagem)
    }
}