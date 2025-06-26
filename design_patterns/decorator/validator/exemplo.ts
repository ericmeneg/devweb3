import BaseValidator from "./basevalidator.class";
import CampoObrigatorio from "./campoobrigatoriovalidator.class";
import EmailValidator from "./emailvalidator.class";
import TamanhoMinimoValidator from "./tamanhominimovalidator.class";

let validator = new BaseValidator
let senha = ""

validator.validate(senha)

validator = new CampoObrigatorio(validator)
validator.validate(senha)
senha = "oi"
validator.validate(senha)

validator = new TamanhoMinimoValidator(validator, 10)
validator.validate(senha)
senha = "oi, tudo bem com você?"
validator.validate(senha)

validator = new EmailValidator(validator)
validator.validate(senha)
senha = "emailteste@teste.com.br"
validator.validate(senha)

/* output previsto:
Texto "" foi aceito
Texto "" não foi aceito
Texto "oi" foi aceito
Texto "oi" não foi aceito
Texto "oi, tudo bem com você?" foi aceito
Texto "oi, tudo bem com você?" não foi aceito
Texto "emailteste@teste.com.br" foi aceito
*/