export default interface IValidator {
    validate(texto: string, deveLoggar: boolean): boolean
}