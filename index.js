const express = require('express')
const conn = require('./database/conn')
const app = express()
const CadastroController = require('./controllers/CadastroController');
const InvestController = require('./controllers/InvestController')
const cadastroRoutes = require('./routes')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/form', cadastroRoutes)
app.get('/', (req,res) => {
    res.status(200).json({message: 'OK'})
})

const PORT = process.env.PORT || 8081

conn.sync().then(() => {app.listen(PORT)}).catch((err) => console.log(err))
