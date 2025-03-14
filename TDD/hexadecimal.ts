export default function converterParaHexadecimal(valor: number): string {

    let resultado: string = ''

    while (true) {
        let resto: string = String(valor % 16)
        if (resto == '10'){
            resto = 'A'
        } else if (resto == '11'){
            resto = 'B'
        } else if (resto == '12'){
            resto = 'C'
        } else if (resto == '13'){
            resto = 'D'
        } else if (resto == '14'){
            resto = 'E'
        } else if (resto == '15'){
            resto = 'F'
        }
        resultado = `${resto}${resultado}`
        valor = Math.floor(valor/16)
        if (valor < 16){
            break
        }
    }

    return resultado
}