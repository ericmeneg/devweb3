import AbstractValidator from "./abstractvalidator.class";
import IValidator from "./validator.interface";

export default class TamanhoMinimoValidator extends AbstractValidator  {
  constructor(private wrappee: IValidator, private minLength: number) {
    super()
  }

  validateInternal(texto: string): boolean {
    return texto.length >= this.minLength && this.wrappee.validate(texto, false);
  }
}
