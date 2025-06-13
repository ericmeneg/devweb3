import Email from "./email.class";
import MensagemAdmin from "./mensagemadmin.class";
import MensagemUsuario from "./mensagemusuario.class";
import SMS from "./sms.class";

const canalEnvioEmail = new Email()

const msgAdmin = new MensagemAdmin(canalEnvioEmail)

msgAdmin.setAssunto("Reunião")
msgAdmin.setMensagem("Reunião marcada para sexta-feira")

msgAdmin.enviar()

const canalEnvioSMS = new SMS()

const msgUsuario = new MensagemUsuario(canalEnvioSMS)

msgUsuario.setAssunto("Minha primeira mensagem")
msgUsuario.setMensagem("Olá! Essa é a minha primeira mensagem")

msgUsuario.enviar()
