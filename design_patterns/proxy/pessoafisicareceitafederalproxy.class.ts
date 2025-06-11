import PessoaFisicaReceitaFederal from "./pessoafisicareceitafederal.class";
import ReceitaFederalInterface from "./receitafederal.interface";

export default class PessoaFisicaReceitaFederalProxy implements ReceitaFederalInterface {
    private cpf: string
    private pessoaFisicaRF: ReceitaFederalInterface | null = null

    constructor(cpf: string){
        this.cpf = cpf
    }

    criarPessoaReceitaFederal() {
        if (this.pessoaFisicaRF === null) {
            this.pessoaFisicaRF = new PessoaFisicaReceitaFederal(this.cpf)
        }
    }

    async getNome(): Promise<string>{
        this.criarPessoaReceitaFederal()
        return await this.pessoaFisicaRF!.getNome() // determina que pessoaFisicaRF não pode ser nulo para executar
    }

    async getIdade(): Promise<number> {
        this.criarPessoaReceitaFederal()
        return await this.pessoaFisicaRF!.getIdade()
    }

    async CPFAtivo(): Promise<boolean> {
        this.criarPessoaReceitaFederal()
        return await this.pessoaFisicaRF!.CPFAtivo()
    }
}