export default interface ReceitaFederalInterface {
    getNome(): Promise<string>
    getIdade(): Promise<number>
    CPFAtivo(): Promise<boolean>
}