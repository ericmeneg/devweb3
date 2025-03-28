import promptSync from  'prompt-sync'
const prompt = promptSync()
function viagemEspacial(distancia: number, velocidade: number, eficiencia: number){
    const combustivelNecessario = distancia * (1 + (velocidade / 10)) * eficiencia
    return combustivelNecessario
}

let inputDistance = Number(prompt("Digite a distância da viagem em parsecs: "))
let inputSpeed = Number(prompt("Digite a velocidade da viagem em mega-luz: "))
let inputEfficiency = Number(prompt("Digite a eficiência da embarcação em unidades de combustível / parsec: "))
const combustivelCalculado = viagemEspacial(inputDistance,inputSpeed,inputEfficiency)
console.log(`Para uma viagem de ${inputDistance} parsecs à velocidade ${inputSpeed} mega-luz com eficiência ${inputEfficiency}:
Será(m) necessária(as) ${combustivelCalculado} unidade(s) de combustível.`)