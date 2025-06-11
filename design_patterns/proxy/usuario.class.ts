import PessoaFisicaReceitaFederalProxy from "./pessoafisicareceitafederalproxy.class"
import ReceitaFederalInterface from "./receitafederal.interface"

export default class Usuario {
    private cpf: string
    private nome: string
    private idade: number
    private pessoaFisica: ReceitaFederalInterface

    constructor(nome: string, cpf: string, idade: number){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade

        this.pessoaFisica = new PessoaFisicaReceitaFederalProxy(this.cpf)
    }

    async validarNome(): Promise<boolean> {
        const nomeReceita = await this.pessoaFisica.getNome()
        return this.nome === nomeReceita
    }

    async verificarMaioridade(): Promise<boolean> {
        const idadeReceita = await this.pessoaFisica.getIdade()
        return this.idade === idadeReceita && this.idade >= 18
    }

    getNome(): string {
        return this.nome
    }

    getIdade(): number {
        return this.idade
    }

    getCpf(): string {
        return this.cpf
    }
}