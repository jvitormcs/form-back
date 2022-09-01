const express = require('express')
const router = express.Router()
const CadastroController = require('./controllers/CadastroController');
const InvestController = require('./controllers/InvestController')

router.post('/valida-dados', CadastroController.Register )
router.post('/investidores', InvestController.Register)

module.exports = router