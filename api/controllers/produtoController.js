async function sendResPost(req, res,next){
    console.log("Chegou no controller de cadastro de Produto")

    if(req.status_insert_produto == 1){
        res.status(200).send({"Message": "Produto cadastrado com sucesso."});
    }
    else{
        res.status(404).send({"Message": "Problema no cadastro de Produto."})
    }
    next()
}

async function sendResGetAll(res,next){
    console.log("Chegou no controller de pesquisa de Produtos")
    console.log(resultado.rows)

    if(resultado.rows != null){
        res.status(200).send({"Message": "Pesquisa de produtos com sucesso.",
        "Resultado": resultado.rows
    })
    }
    else{
        res.status(404).send({"Message": "Problema na Pesquisa de produtos."})
    }
    next()
}

async function sendResLogin(req, res, next){
    console.log("Caiu no Controller de login de Produto")
    //console.log(req.body['status_senha'])
    //console.log(resultado.rows[0])

    if(resultado.rows[0] != null && req.body['token'] != null){

        res.status(200).send({"Message":"Login efetuado com sucesso.",
        "Resultado":resultado.rows[0],
        "jwt":req.body['token']
        });
        //console.log(resultado.rows[0])
        //console.log(req.body['token'])
    }

    else if(req.body['status_senha'] == false){
        res.status(401).send({"Message":"Senha ou Usuário incorreto."});
    }
 
    else{
        res.status(404).send({"Message": "Problema no login do cliente."})
    }
    next()
}


module.exports = {sendResPost, sendResLogin, sendResGetAll}