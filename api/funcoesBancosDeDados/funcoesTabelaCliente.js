const conexao = require('../database/postgressql')

async function inserirCliente(cliente,password){ 

    const insertQuery = {    
        text: 'INSERT INTO cliente(nome, email, telefone, login, senha, dt_create) VALUES($1, $2, $3, $4, $5, $6)' ,        
        values: [cliente.nome, cliente.email, cliente.telefone, cliente.login, password, 'now()'],     
    }     

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);


    console.log(resultado.rowCount)

    client.release();

    return resultado;

}

async function selectcliente(login) {
 
    const selectQuery = 
    {
        text: 'SELECT nome, login, senha FROM cliente where login ilike $1', 
        values:[login],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(selectQuery);

    client.release();
    
    return resultado;
}

module.exports = {inserirCliente, selectcliente}

