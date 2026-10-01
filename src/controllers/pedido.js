const pedidos = require("../../dados/pedidos.json")

function subtotais() {
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1
    pedidos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    subtotais()
    res.json(pedidos)
}
const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            dados.id = Number(id)
            pedidos[indice] = dados
            status = 1
        }
    })

    if (status == 1) {
        res.status(202).json(dados)
    } else {
        res.status(404).send("pedido não encontrado")
    }
}


const excluir = (req, res) => { 
    const id = req.params.id
    let status = 0

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedido.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.json("Pedido excluido com sucesso")
    } else {
        res.status(404).send("pedido não encontrado")
    }
}


module.exports = {
    criar, listar, alterar, excluir
}