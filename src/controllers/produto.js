const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id) + 1
    produtos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(produtos)
}
const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body
    let status = 0

    times.forEach((time, indice) => {
        if (time.id == id) {
            dados.id = Number(id)
            times[indice] = dados
            status = 1
        }
    })

    if (status == 1) {
        res.status(202).json(dados)
    } else {
        res.status(404).send("produto não encontrado")
    }
}


const excluir = (req, res) => { 
    const id = req.params.id
    let status = 0

    produtos.forEach((produto, indice) => {
        if (produto.id == id) {
            produtos.splice(indice, 1)
            status = 1
        }
    })

    if (status == 1) {
        res.json("Produto excluido com sucesso")
    } else {
        res.status(404).send("Produto não encontrado")
    }
}

module.exports = {
    criar, listar, alterar, excluir
}