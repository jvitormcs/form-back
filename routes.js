const express = require('express')
const router = express.Router()
const CadastroController = require('./controllers/CadastroController');
const InvestController = require('./controllers/InvestController');
const SiteController = require('./controllers/SiteController');

router.post('/valida-dados', CadastroController.Register )
router.post('/investidores', InvestController.Register)
router.post('/residencial', SiteController.cadPrincipal)
router.post('/empresa', SiteController.cadEmpresa)
router.post('/filial', SiteController.cadFilial)
router.post('/logisReversa', SiteController.LogiReversa)
router.post('/gestResiduo', SiteController.GestResiduo)
router.post('/contact', SiteController.Contact)
module.exports = router