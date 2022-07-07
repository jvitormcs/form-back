const express = require('express')
const router = express.Router()
const CadastroController = require('./controllers/CadastroController');


router.post('/valida-dados', CadastroController.Register )

module.exports = router