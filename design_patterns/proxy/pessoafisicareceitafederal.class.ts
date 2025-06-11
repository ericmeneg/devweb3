import ReceitaFederalInterface from "./receitafederal.interface"

export default class PessoaFisicaReceitaFederal implements ReceitaFederalInterface {
    private nome: string
    private cpf: string
    private idade: number
    private cpfAtivo: boolean

    constructor(cpf: string){
        this.cpf = cpf
        console.log("Criando pessoa física de CPF " + cpf)
        this.nome = "Teste" //simulação de um sistema que a partir do cpf busca os dados do banco da receita federal
        this.idade = 25
        this.cpfAtivo = true
        this.sleep(5000).then(() =>{
            console.log("Pessoa física criada com sucesso")
        })
    }

    sleep(ms: number){
        return new Promise(resolve => {setTimeout(resolve, ms)})
    }

    async getNome(): Promise<string>{
        await this.sleep(2000)
        return this.nome
    }

    async getIdade(): Promise<number>{
        await this.sleep(2000)
        return this.idade
    }

    async CPFAtivo(): Promise<boolean>{
        await this.sleep(3000)
        return this.cpfAtivo
    }
}