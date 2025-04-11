function dividirTesouro(pessoas: number, tesouro: number[]): string{
    let total = 0
    tesouro.forEach( (valor) => { total += valor } )
    if (total % pessoas != 0) {
        return 'O tesouro não pode ser dividido igualmente. Melhor enterrar novamente.'
    }
    const alvo = total / pessoas
    return ''
}