import { BordaRequeijao } from "./bordarequeijao.class";
import { PizzaQueijo } from "./pizzaqueijo.class";
import { MassaIntegral } from "./massaintegral.class";

const pizzaQueijo = new PizzaQueijo()

console.log(pizzaQueijo.getDescricao())
console.log(pizzaQueijo.getPreco().toFixed(2))

console.log("Adicionando borda")

const pizzaQueijoBorda = new BordaRequeijao(pizzaQueijo)

console.log(pizzaQueijoBorda.getDescricao())
console.log(pizzaQueijoBorda.getPreco().toFixed(2))

console.log("Adicionando massa integral")

const pizzaQueijoBordaMassa = new MassaIntegral(pizzaQueijoBorda)

console.log(pizzaQueijoBordaMassa.getDescricao())
console.log(pizzaQueijoBordaMassa.getPreco().toFixed(2))