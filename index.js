const express = require('express')
const app = express()

app.use(express.json())

const veiculos = []

app.get('/veiculos', (req, res)=>{
    console.log("Está no GET")
    res.status(200).send({veiculos:veiculos})
    return
})

app.get('/veiculos/:id', (req, res)=>{
    let veiculoId = req.params.id
    console.log("Está no GET by ID")
    res.status(200).send(veiculos.find(x => x.id==veiculoId))
    return
})

app.post('/veiculos', (req, res)=>{
    console.log('Está no POST')
    veiculos.push(req.body)
    res.status(200).send(req.body)
    return
})

app.put('/veiculos/:id', (req, res)=>{
    let veiculoId = req.params.id
    console.log("Está no PUT")
    veiculos[veiculoId - 1] = req.body
    res.status(200).send(veiculos.find(x => x.id == veiculoId))
    return
})

app.delete('/veiculos/:id', (req, res)=>{
    let veiculoId = req.params.id
    console.log("Está no DELETE")
    veiculos.splice(veiculoId - 1, 1)
    res.status(200).send("Veículo excluído com sucesso!")
    return
})


app.listen(2024, () => console.log("Servidor iniciado!"))