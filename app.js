const http = require('http')//nativa
const bodyParser = require('body-parser')//não é nativo
const express = require('express')//não é nativo
const cors = require('cors')
const app = express( ) //vai criar uma constante que encapsula todos os comportamentos de um aplicativo
const routesCliente = require('./api/routes/rotaCliente');
const routesAdministrador = require('./api/routes/rotaAdministrador');
//const routesCombo = require('./api/routes/rotaCombo');
const routesProduto = require('./api/routes/rotaProduto');
const path = require('path');

app.use( bodyParser.json() );//recebe o request e "parseia" os dados como json

app.use(cors({
    origin:'*',
}))

app.use('/files', express.static(path.resolve(__dirname, './api/public')));//Para acessar a pasta das fotos
app.use('/cliente', routesCliente);
app.use('/admin', routesAdministrador);
//app.use('/combo', routesCombo);
app.use('/produto', routesProduto);

const server = http.createServer(app);//inicializa um servidor http linkado ao express
//define uma porta para que o servidor escute requisições
server.listen(5741, async function(){
    console.log("listening port " + 5741);
})



