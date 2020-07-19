const funcoesTabelaProduto = require('../funcoesBancosDeDados/funcoesTabelaProduto');
const multer = require('multer');

async function realizaCadastroProduto(req, res, next) {
    try {

        //console.log(req['url_foto_produto']);
        var url = req['url_foto_produto'];
        var prod = req.body;

        resultado = await funcoesTabelaProduto.inserirProduto(prod, url);

        req['status_insert_produto'] = resultado.rowCount;

        console.log(req.body)

    } catch{
        res.status(404).send({ "Message": "Erro no cadastro do Produto.", "Erro": error })
    }
    
    next()
}



module.exports = { realizaCadastroProduto }