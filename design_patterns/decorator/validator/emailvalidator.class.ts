import AbstractValidator from "./abstractvalidator.class";
import IValidator from "./validator.interface";

export default class EmailValidator extends AbstractValidator {
  constructor(private wrappee: IValidator) {
    super()
  }

  validateInternal(texto: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    const eValido = emailRegex.test(texto);
    return eValido && this.wrappee.validate(texto, false);
  }
}
