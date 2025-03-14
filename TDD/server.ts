import express from 'express'
import { Express, Request, Response } from 'express'
import verificaCep from './cep'

const app: Express = express()

app.get('/verifica-cep/:cep', (req: Request, res: Response) => {
    const cep = req.params.cep
    const cepValido = verificaCep(cep)
    res.json({ cepValido })
})

app.listen(3000, () => {
    console.log('Server rodando em http://localhost:3000')
})