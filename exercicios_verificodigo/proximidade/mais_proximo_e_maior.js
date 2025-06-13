function maiorMaisProximo (lista, index) {
    let counter = 0
    while (true) {
        counter ++
        if ( index + counter <= lista.length - 1 && (lista[index + counter] > lista[index]) ){
                return lista[index + counter]
        }
        if ( index - counter >= 0 && lista[index - counter] > lista[index] ){
            return lista[index - counter]
        }
    }
}

let lista = [1,2,3,4,5,6]
let index = 3

console.log(maiorMaisProximo(lista,index))