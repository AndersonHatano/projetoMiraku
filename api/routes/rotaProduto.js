const express = require("express");
const router = express.Router(); 
const cadastroProduto = require('../middlewares/cadastroProduto')
const fotoProduto = require('../middlewares/cadastroProdutoFoto')
const logincliente = require ('../middlewares/logincliente')
const sendRes = require("../controllers/produtoController")

router.post('/cadastro', 
    cadastroProduto.realizaCadastroProduto,
    sendRes.sendResPost
);

router.post('/login', 
    logincliente.realizaloginCliente,
    sendRes.sendResLogin
);
module.exports = router