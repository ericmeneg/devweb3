import verificaCep from './cep'
import { expect, test } from '@jest/globals'

test("CEP válido - 12345678", () => {
    expect(verificaCep("12345678")).toBe(true)
})

test("CEP válido - 12345-678", () => {
    expect(verificaCep('12345-678')).toBe(true)
})

test("CEP inválido - 1234567", () => {
    expect(verificaCep('1234567')).toBe(false)
})

test("CEP inválido - 1234567890", () => {
    expect(verificaCep('1234567890')).toBe(false)
})

test("CEP inválido - 123456789", () =>{
    expect(verificaCep('123456789')).toBe(false)
})