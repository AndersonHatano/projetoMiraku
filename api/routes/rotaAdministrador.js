const express = require("express");
const router = express.Router(); 
const cadastroAdmin = require('../middlewares/cadastroAdmin')
const loginAdmin = require ('../middlewares/loginAdmin')
const sendRes = require("../controllers/adminController")

router.post('/cadastro', 
    cadastroAdmin.realizaCadastroAdmin,
    sendRes.sendResPost
);

router.post('/login', 
    loginAdmin.realizaloginAdmin,
    sendRes.sendResLogin
);

module.exports = router