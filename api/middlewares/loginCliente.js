const funcoesTabelaCliente = require('../funcoesBancosDeDados/funcoesTabelaCliente')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function realizaloginCliente(req, res, next) {
    try {

        var salt = bcrypt.genSaltSync(10)
        var password = bcrypt.hashSync(req.body.senha,salt);
        var login = req.body.login;

        console.log(password)
        resultado = await funcoesTabelaCliente.selectcliente(login);

        console.log(resultado.rows[0])

        let check = await bcrypt.compareSync(resultado.rows[0].senha, password);
        console.log(check);

        if(resultado.rows[0].id != 0 && resultado.rows[0].senha === password){
            console.log("2")
            let token = await jwt.sign({ foo: 'bar' }, 'shhhhh')
            req.body['token'] = token;
        }

        console.log(req.body['token'])

        req['resultado_consulta_login_cliente'] = resultado.rows[0];


    }
    catch (error) {
        res.status(404).send({ "Message": "Problema no login do cliente" })
    }
    next()

}

module.exports = { realizaloginCliente }