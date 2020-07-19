const conexao = require('../database/postgressql')

async function inserirProduto(prod, url){ 

    const insertQuery = {    
        text: 'INSERT INTO produto(nome, descricao, quantidade, valor, url_foto, dt_create) VALUES($1, $2, $3, $4, $5, $6)' ,        
        values: [prod.nome, prod.descricao, prod.quantidade, prod.valor, url, 'now()'],     
    }     

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);

    client.release();

    return resultado;

}

async function selectTodosProdutos() {
 
    const selectQuery = 
    {
        text: 'SELECT * FROM produto'

    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(selectQuery);

    //console.log(resultado)
    client.release();
    
    return resultado;
}

module.exports = {inserirProduto, selectTodosProdutos}

