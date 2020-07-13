const express = require("express");
const router = express.Router(); 
const cadastrocliente = require('../middlewares/cadastroCliente')
const logincliente = require ('../middlewares/logincliente')
const sendRes = require("../controllers/clienteController")

router.post('/cadastro', 
    cadastrocliente.realizaCadastroCliente,
    sendRes.sendResPost
);

router.post('/login', 
    logincliente.realizaloginCliente,
    sendRes.sendResLogin
);
module.exports = router