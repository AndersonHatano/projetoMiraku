const funcoesTabelaProduto = require('../funcoesBancosDeDados/funcoesTabelaProduto')

async function pesquisaTodosProdutos(req, res, next) {
    try {

        resultado = await funcoesTabelaProduto.selectTodosProdutos();

        //console.log(resultado.rows);

    } catch{
        res.status(404).send({ "Message": "Erro na listagem dos Produtos.", "Erro": error })
    }
    
    next()
}



module.exports = { pesquisaTodosProdutos }