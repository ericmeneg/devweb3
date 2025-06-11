import Usuario from "./usuario.class"


async function teste(){
    const usuario = new Usuario("Teste", "123456789", 25)
    console.log(usuario.getNome()) //executado instantaneamente

    const maioridade = await usuario.verificarMaioridade()
    console.log(maioridade) //leva 7 seg
}

teste()