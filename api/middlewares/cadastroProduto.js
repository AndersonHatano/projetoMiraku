const funcoesTabelaProduto = require('../funcoesBancosDeDados/funcoesTabelaProduto')

async function realizaCadastroProduto(req, res, next) {
    try {

        var prod = req.body;

        resultado = await funcoesTabelaProduto.inserirProduto(prod);

        req['status_insert_produto'] = resultado.rowCount;

        console.log(req.body)

    } catch{
        res.status(404).send({ "Message": "Erro no cadastro do Produto.", "Erro": error })
    }
    
    next()
}



module.exports = { realizaCadastroProduto }