async function sendResPost(req, res,next){
    console.log("Chegou no controller de cadastro de Cliente")

    if(req.status_insert_cliente == 1){
        res.status(200).send({"Message": "Cliente cadastrado com sucesso."});
    }
    else{
        res.status(404).send({"Message": "Problema no cadastro de Cliente."})
    }
    next()
}

async function sendResLogin(req, res, next){
    console.log("Caiu no Controller de login de cliente")
    console.log(resultado.rows[0])

    if(resultado.rows[0] != null && req.body['token'] != null){

        res.status(200).send({"Message":"Login efetuado com sucesso.",
        "Resultado":resultado.rows[0],
        "jwt":req.body['token']
        });


        console.log(resultado.rows[0])
        console.log(req.body['token'])
    }
 
    else{
        res.status(404).send({"Message": "Problema no login do cliente."})
    }
    next()
}


module.exports = {sendResPost, sendResLogin}