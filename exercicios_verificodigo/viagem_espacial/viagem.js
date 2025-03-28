"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function viagemEspacial(distancia, velocidade, eficiencia) {
    const combustivelNecessario = distancia * (1 + (velocidade / 10)) * eficiencia;
    return combustivelNecessario;
}
let inputDistance = Number(prompt("Digite a distância da viagem em parsecs: "));
let inputSpeed = Number(prompt("Digite a velocidade da viagem em mega-luz: "));
let inputEfficiency = Number(prompt("Digite a eficiência da embarcação em unidades de combustível / parsec: "));
const combustivelCalculado = viagemEspacial(inputDistance, inputSpeed, inputEfficiency);
console.log(`Para uma viagem de ${inputDistance} parsecs à velocidade ${inputSpeed} mega-luz com eficiência ${inputEfficiency}:
Será(m) necessária(as) ${combustivelCalculado} unidade(s) de combustível.`);
