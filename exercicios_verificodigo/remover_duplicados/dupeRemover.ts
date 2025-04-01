import express from "express"

const app = express()
const PORT = 3000

function dupeRemover(ogString: string): string{
    let presentes: string[] = []
    let resultado = ""
    for (let i = 0; i < ogString.length; i++){
        if (!presentes.includes(ogString[i])){
            resultado = resultado + ogString[i]
            presentes.push(ogString[i])
        }
    }
    return resultado
}

app.post('/remove-duplicates/:inputString', (req,res) => {
    res.send(dupeRemover(req.params.inputString))
})

app.listen(PORT, () => {
    console.log(`Server rodando em: http://localhost:${PORT}`)
})