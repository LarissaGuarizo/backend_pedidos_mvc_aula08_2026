const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    clientes.forEach((cliente, indice) => {
        if (cliente.id == id) {
            dados.id = Number(id)
            clientes[indice] = dados
            status = 1
        }
    })

    if (status == 1) {
        res.status(202).json(dados)
    } else {
        res.status(404).send("cliente não encontrado")
    }
}


const excluir = (req, res) => { 
    const id = req.params.id
    let status = 0

    produtos.forEach((cliente, indice) => {
        if (cliente.id == id) {
            cliente.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.json("Cliente excluido com sucesso")
    } else {
        res.status(404).send("Cliente não encontrado")
    }
}


module.exports = {
    criar, listar, alterar, excluir
}