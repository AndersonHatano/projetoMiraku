const conexao = require('../database/postgressql')

async function inserirProduto(prod){ 

    const insertQuery = {    
        text: 'INSERT INTO produto(nome, descricao, quantidade, valor, dt_create) VALUES($1, $2, $3, $4, $5)' ,        
        values: [prod.nome, prod.descricao, prod.quantidade, prod.valor, 'now()'],     
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

    client.release();
    
    return resultado;
}

module.exports = {inserirProduto, selectTodosProdutos}

