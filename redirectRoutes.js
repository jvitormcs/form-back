const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br')
})

router.get('/faca-parte', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/coleta-residencia')
})
router.get('/cadastro', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/coleta-residencia')
})

router.get('/quem-somos', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/quem-somos')
})

router.get('/lp-descarte-correto', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/descarte-correto')
})


router.get('/investidores/pt/', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/investidores/pt/')
})

router.get('/investidores/eng/', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/investidores/eng/')
})

router.get('/trabalhe-conosco', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/trabalhe-conosco')
})


module.exports = router