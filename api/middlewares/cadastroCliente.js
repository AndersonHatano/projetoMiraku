const funcoesTabelaCliente = require('../funcoesBancosDeDados/funcoesTabelaCliente')
const bcrypt = require('bcrypt')

async function realizaCadastroCliente(req, res, next) {
    try {

        var salt = bcrypt.genSaltSync(10)
        var password = bcrypt.hashSync(req.body.senha,salt);
        var cliente = req.body;

        resultado = await funcoesTabelaCliente.inserirCliente(cliente,password);

        req['status_insert_cliente'] = resultado.rowCount;

        console.log(req.body)

    } catch{
        res.status(404).send({ "Message": "Erro no cadastro do Cliente.", "Erro": error })
    }
    
    next()
}



module.exports = { realizaCadastroCliente }