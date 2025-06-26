import AbstractValidator from "./abstractvalidator.class";

export default class BaseValidator extends AbstractValidator {
    validateInternal(texto: string): boolean{
        return true
    }
}