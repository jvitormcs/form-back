const express = require('express')
const router = express.Router()
const CadastroController = require('./controllers/CadastroController');
const InvestController = require('./controllers/InvestController');
const SiteController = require('./controllers/SiteController');

router.post('/valida-dados', CadastroController.Register )
router.post('/investidores', InvestController.Register)
router.post('/site', SiteController.cad)

module.exports = router