export abstract class Pizza {
    protected descricao: string = "Não definida"
    protected preco: number = 0

    abstract getDescricao(): string
    abstract getPreco(): number
}