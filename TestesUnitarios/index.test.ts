import { soma, sub, mult, divisao } from "."
import { expect , test } from '@jest/globals'

test('Soma 1 + 2 é igual a 3', () => {
    expect(soma(1,2)).toBe(3)
})

test('Soma 2 + 3 é igual a 5', () => {
    expect(soma(2,3)).toBe(5)
})

test('Subtração 5 - 3 é igual a 2', () => {
    expect(sub(5,3)).toBe(2)
})

test('Subtração 7 - 4 é igual a 3', () => {
    expect(sub(7,4)).toBe(3)
})

test('Multiplicação 10 X 3 é igual a 30', () => {
    expect(mult(10,3)).toBe(30)
})

test('Multiplicação 20 X 0,5 é igual a 10', () => {
    expect(mult(20,0.5)).toBe(10)
})

test('Divisão 70 / 10 é igual a 7', () => {
    expect(divisao(70,10)).toBe(7)
})

test('Divisão 30 / 2 é igual a 15', () => {
    expect(divisao(30,2)).toBe(15)
})

test('Divisão 2 / 0 resulta em erro', () => {
    expect(divisao(2,0)).toThrowError
})