import CanalDeEnvioInterface from "./canaldeeenvio.interface";

export default class SMS implements CanalDeEnvioInterface{
    enviarMensagem(assunto: string, mensagem: string): void{
        console.log('Mensagem enviada por SMS')
        console.log(assunto)
        console.log(mensagem)
    }
}