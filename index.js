const express = require('express')
const conn = require('./database/conn')
const app = express()
const CadastroController = require('./controllers/CadastroController');
const InvestController = require('./controllers/InvestController')
const cadastroRoutes = require('./routes')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/form', cadastroRoutes)

const PORT = process.env.PORT || 8081

conn.sync().then(() => {app.listen(PORT)}).catch((err) => console.log(err))
