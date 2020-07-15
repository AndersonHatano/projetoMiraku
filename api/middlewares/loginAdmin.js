const funcoesTabelaAdmin = require('../funcoesBancosDeDados/funcoesTabelaAdmin')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function realizaloginAdmin(req, res, next) {
    try {

        //var salt = bcrypt.genSaltSync(10)
        //var password = bcrypt.hashSync(req.body.senha,salt);
        var login = req.body.login;
        let status_senha = true;

        //console.log(password)
        resultado = await funcoesTabelaAdmin.selectAdmin(login);

        //console.log(resultado.rows[0])

        let check = await bcrypt.compareSync(req.body.senha, resultado.rows[0].senha);//Importante para funcionar a função deve seguir a ordem: 1º senha do enviado e 2º senha encriptografada do banco
        //console.log(check);

        if(resultado.rows[0].id != 0 && check == true){
            let token = await jwt.sign({ foo: 'bar' }, 'shhhhh')
            req.body['token'] = token;
        }

        else if(resultado.rows[0].id == 0 || check == false){
            status_senha = false
            req.body['status_senha'] = status_senha;
        }

        //console.log(req.body['token'])

        req['resultado_consulta_login_admin'] = resultado.rows[0];


    }
    catch (error) {
        res.status(404).send({ "Message": "Problema no login do administrador" })
    }
    next()

}

module.exports = { realizaloginAdmin }