import express from 'express'
const app = express()

const PORT = 3000
app.get('/tabuada/:numero', (req, res) => {
    let numeroEscolhido = req.params.numero
    let jsonString = `{
        "1": "${numeroEscolhido} x 1 = ${numeroEscolhido * 1}",
        "2": "${numeroEscolhido} x 2 = ${numeroEscolhido * 2}",
        "3": "${numeroEscolhido} x 3 = ${numeroEscolhido * 3}",
        "4": "${numeroEscolhido} x 4 = ${numeroEscolhido * 4}",
        "5": "${numeroEscolhido} x 5 = ${numeroEscolhido * 5}",
        "6": "${numeroEscolhido} x 6 = ${numeroEscolhido * 6}",
        "7": "${numeroEscolhido} x 7 = ${numeroEscolhido * 7}",
        "8": "${numeroEscolhido} x 8 = ${numeroEscolhido * 8}",
        "9": "${numeroEscolhido} x 9 = ${numeroEscolhido * 9}",
        "10": "${numeroEscolhido} x 10 = ${numeroEscolhido * 10}",
    }`
    const jsonReturn = JSON.parse(jsonString)
    res.send(
        jsonReturn
    )
})

app.listen(PORT, () => {
    console.log(`Servidor sendo executado em http://localhost:${PORT}`)
})