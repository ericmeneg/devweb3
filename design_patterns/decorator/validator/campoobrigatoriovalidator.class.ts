import AbstractValidator from "./abstractvalidator.class";
import IValidator from "./validator.interface";

export default class CampoObrigatorio extends AbstractValidator {
    constructor(private wrappee: IValidator){
        super()
    }
    validateInternal(texto: string): boolean {
        const eValido = texto.trim().length > 0;
        return eValido && this.wrappee.validate(texto, false);
    }
}