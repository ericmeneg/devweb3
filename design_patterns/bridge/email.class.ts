import CanalDeEnvioInterface from "./canaldeeenvio.interface";

export default class Email implements CanalDeEnvioInterface{
    enviarMensagem(assunto: string, mensagem: string): void{
        console.log('Mensagem enviada por e-mail')
        console.log(assunto)
        console.log(mensagem)
    }
}