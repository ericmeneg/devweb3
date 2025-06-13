import CanalDeEnvioInterface from "./canaldeeenvio.interface";

export default abstract class Mensagem {
    protected canal: CanalDeEnvioInterface
    protected assunto: string = ''
    protected mensagem: string = ''

    constructor(canalDeEnvio: CanalDeEnvioInterface) {
        this.canal = canalDeEnvio
    }

    public setAssunto(assunto: string){
        this.assunto = assunto
    }

    public setMensagem(mensagem: string){
        this.mensagem = mensagem
    }

    public abstract enviar(): void
    
}