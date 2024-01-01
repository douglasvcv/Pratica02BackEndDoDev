const database = require('./bd')

const express = require('express')
const app = express()

app.use(express.json())


const metodos = database.veiculosDatabase()



app.get('/veiculos', (req, res)=>{
    console.log("Está no GET")
    res.status(200).send(metodos.list())
    return
})

app.get('/veiculos/:id', (req, res)=>{
    let veiculoId = req.params.id
    console.log("Está no GET by ID")
    res.status(200).send(metodos.get(veiculoId))
    return
})

app.post('/veiculos', (req, res)=>{
    console.log('Está no POST')
    res.status(200).send(metodos.insert(req.body))
    return
})

app.put('/veiculos/:id', (req, res)=>{
    let veiculoId = req.params.id
    console.log("Está no PUT")
    res.status(200).send(metodos.update(req.body, veiculoId))
    return
})

app.delete('/veiculos/:id', (req, res)=>{
    let veiculoId = req.params.id
    console.log("Está no DELETE")
    metodos.del(veiculoId)
    res.status(200).send("Veículo excluído com sucesso!")
    return
})


app.listen(2024, () => console.log("Servidor iniciado!"))