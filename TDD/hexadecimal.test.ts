import converterParaHexadecimal from './hexadecimal'
import { test, expect } from '@jest/globals'

test('Convertendo 255 para ff', () =>{
    expect(converterParaHexadecimal(255)).toBe('FF')
})

test('Convertendo 10 para A', () =>{
    expect(converterParaHexadecimal(10)).toBe('A')
})