import subtrai from "."
import { expect, test } from "@jest/globals"

test("Subtrai 2 - 1 é igual a 1", () => {
    expect(subtrai(2,1)).toBe(1)
})

test("Subtrai 5 - 3 é igual a 2", () => {
    expect(subtrai(5,3)).toBe(2)
})