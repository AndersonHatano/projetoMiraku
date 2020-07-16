const express = require("express");
const router = express.Router(); 
const cadastroProduto = require('../middlewares/cadastroProduto')
//const fotoProduto = require('../middlewares/cadastroProdutoFoto')
const todosProdutos = require ('../middlewares/todosProdutos')
const sendRes = require("../controllers/produtoController")
const multer = require('../middlewares/multer');

router.post('/cadastro', 
    cadastroProduto.realizaCadastroProduto,
    sendRes.sendResPost
);

router.post('/imagem/cadastro',
    multer.single('image')

);

router.get('/todos', 
    todosProdutos.pesquisaTodosProdutos,
    sendRes.sendResGetAll
);
module.exports = router