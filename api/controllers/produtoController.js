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

async function sendResGetAll(req, res, next){
    console.log("Chegou no controller de pesquisa de Produtos")
    //console.log(resultado.rows)

    if(resultado.rows != 0){
        res.status(200).send({"Message": "Pesquisa de produtos com sucesso.",
        "Resultado": resultado.rows
    })
    }
    else{
        res.status(404).send({"Message": "Problema na Pesquisa de produtos."})
    }
    next()
}

async function sendResGetOne(req, res, next){
    console.log("Chegou no controller de pesquisa de Produtos")
    //console.log(resultado.rows)

    if(resultado.rows != 0){
        res.status(200).send({"Message": "Pesquisa do produto com sucesso.",
        "Resultado": resultado.rows
    })
    }
    else if(resultado.rows == 0){
        res.status(204).send({"Message": "Produto Inexistente.",
    })
    }
    else{
        res.status(404).send({"Message": "Problema na Pesquisa de produtos."})
    }
    next()
}

module.exports = {sendResPost, sendResGetAll, sendResGetOne}