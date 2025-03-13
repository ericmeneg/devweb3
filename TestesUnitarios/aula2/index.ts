function soma(a: number,b: number): number {
    return a + b
}

function sub(a: number, b: number): number {
    return a - b
}

function mult(a: number, b: number): number {
    if (b == 0) throw new Error('Divisão por zero')
    return a * b
}

function divisao(a: number, b: number): number {
    return a / b
}

export { soma,sub,mult,divisao }