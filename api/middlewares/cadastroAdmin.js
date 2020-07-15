const funcoesTabelaAdmin = require('../funcoesBancosDeDados/funcoesTabelaAdmin')
const bcrypt = require('bcrypt')

async function realizaCadastroAdmin(req, res, next) {
    try {

        var salt = bcrypt.genSaltSync(10)
        var password = bcrypt.hashSync(req.body.senha,salt);
        var admin = req.body;
        
        resultado = await funcoesTabelaAdmin.inserirAdmin(admin,password);
        
        req['status_insert_admin'] = resultado.rowCount;

        console.log(req.body)

    } catch{
        res.status(404).send({ "Message": "Erro no cadastro do Admin.", "Erro": error })
    }
    
    next()
}



module.exports = { realizaCadastroAdmin }