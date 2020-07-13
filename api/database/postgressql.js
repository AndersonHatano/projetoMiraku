const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projeto_miraku',
  password: '34361661',
})

module.exports= {pool}
