import { Notificacao } from "./notificacao.class"
import { NotificacaoSimples } from "./notificacaosimples.class"
import { NotificacaoEmail } from "./notificacaoemail.class"
import { NotificacaoSMS } from "./notificacaosms.class"
import { NotificacaoPush } from "./notificacaopush.class"

let notificacao: Notificacao = new NotificacaoSimples()

notificacao = new NotificacaoEmail(notificacao)

notificacao = new NotificacaoSMS(notificacao)

notificacao = new NotificacaoPush(notificacao)

notificacao.enviar("Seu pedido foi enviado")