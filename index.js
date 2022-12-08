const express = require('express')
const conn = require('./database/conn')
const app = express()
const CadastroController = require('./controllers/CadastroController');
const InvestController = require('./controllers/InvestController')
const cadastroRoutes = require('./routes')

const redirectRoutes = require('./redirectRoutes')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api/form', cadastroRoutes)
app.get('/api/security', (req,res) => {
    res.status(200).json({message: 'OK'})
})

app.use('/', redirectRoutes)

/* app.get('/quem-somos', (req, res) => {
    console.log('redirecionei aqui colega')
    res.redirect(301,'https://realixo.com.br/quem-somos')
}) */

const PORT = process.env.PORT || 8081

conn.sync().then(() => {app.listen(PORT)}).catch((err) => console.log(err))
