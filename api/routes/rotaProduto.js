const express = require("express");
const router = express.Router(); 
const cadastroProduto = require('../middlewares/cadastroProduto')
const todosProdutos = require ('../middlewares/todosProdutos')
const produto = require ('../middlewares/umProduto')
const sendRes = require("../controllers/produtoController")
const multer = require('../middlewares/multer');

router.post('/cadastro', 
    multer.single('image'),
    cadastroProduto.realizaCadastroProduto,
    sendRes.sendResPost
);

router.get('/todos', 
    todosProdutos.pesquisaTodosProdutos,
    sendRes.sendResGetAll
);

router.get('/?',
    produto.pesquisaUmProduto,
    sendRes.sendResGetOne
);

module.exports = router