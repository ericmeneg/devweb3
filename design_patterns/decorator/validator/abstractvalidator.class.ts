import IValidator from "./validator.interface";

export default abstract class AbstractValidator implements IValidator {
    validate(texto: string, deveLoggar: boolean = true): boolean {
        const resultado = this.validateInternal(texto);
        if (deveLoggar) {this.printResultado(texto, resultado)};
        return resultado;
    }

    protected printResultado(texto: string, resultado: boolean): void {
        if (resultado) {
            console.log(`Texto "${texto}" foi aceito`);
        } else {
            console.log(`Texto "${texto}" não foi aceito`);
        }
    }

    protected abstract validateInternal(texto: string): boolean;
}