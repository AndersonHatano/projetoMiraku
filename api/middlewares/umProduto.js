const funcoesTabelaProduto = require('../funcoesBancosDeDados/funcoesTabelaProduto')

async function pesquisaUmProduto(req, res, next) {
    try {

        var idProduto = req.query.idProduto;
        //console.log(req.query.idProduto)

        resultado = await funcoesTabelaProduto.pesquisaUmProduto(idProduto);

        //console.log(resultado.rows);

    } catch{
        res.status(404).send({ "Message": "Erro na pesquisa do Produto.", "Erro": error })
    }
    
    next()
}



module.exports = { pesquisaUmProduto }