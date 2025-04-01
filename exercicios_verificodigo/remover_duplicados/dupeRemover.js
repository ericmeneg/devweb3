"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
function dupeRemover(ogString) {
    let presentes = [];
    let resultado = "";
    for (let i = 0; i < ogString.length; i++) {
        if (!presentes.includes(ogString[i])) {
            resultado = resultado + ogString[i];
            presentes.push(ogString[i]);
        }
    }
    return resultado;
}
app.post('/remove-duplicates/:inputString', (req, res) => {
    res.send(dupeRemover(req.params.inputString));
});
app.listen(PORT, () => {
    console.log(`Server rodando em: http://localhost:${PORT}`);
});
