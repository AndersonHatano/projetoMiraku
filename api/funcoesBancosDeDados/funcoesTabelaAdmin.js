const conexao = require('../database/postgressql')

async function inserirAdmin(admin,password){ 

    const insertQuery = {    
        text: 'INSERT INTO administrador(nome, email, login, senha, dt_create) VALUES($1, $2, $3, $4, $5)' ,        
        values: [admin.nome, admin.email, admin.login, password, 'now()'],     
    }     

    let client = await conexao.pool.connect();
    let resultado = await client.query(insertQuery);


    console.log(resultado.rowCount)

    client.release();

    return resultado;

}

async function selectAdmin(login) {
 
    const selectQuery = 
    {
        text: 'SELECT nome, login, senha FROM administrador where login ilike $1', 
        values:[login],
    }

    let client = await conexao.pool.connect();
    let resultado = await client.query(selectQuery);

    client.release();
    
    return resultado;
}

module.exports = {inserirAdmin, selectAdmin}

