const itens = require("../../dados/itens.json")
//functions
const listar = (req, res) => {
    res.json(itens)
}
const criar = (req, res) => {
const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1
    pedidos.push(dados)
    res.status(201).json(dados)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    itens.forEach((item, indice) => {
        if (item.id == id) {
            dados.id = Number(id)
            itens[indice] = dados
            status = 1
        }
    })

    if (status == 1) {
        res.status(202).json(dados)
    } else {
        res.status(404).send("item não encontrado")
    }
}
const excluir = (req, res) => { 
    const id = req.params.id
    let status = 0

    itens.forEach((item, indice) => {
        if (item.id == id) {
            itens.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.json("Item excluido com sucesso")
    } else {
        res.status(404).send("Item não encontrado")
    }
}
module.exports = {
    criar, listar, alterar, excluir
}