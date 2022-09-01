const conn = require('../database/conn')
const Invest = require('../models/invest')

module.exports = class InvestController {

    static async Register(req, res) {

        const {nome, sobrenome, email, telefone} = req.body

        const user = {
            Nome: nome,
            Sobrenome: sobrenome,
            Email: email,
            Telefone: telefone

        }

        try{
            await Invest.create(user)
        } catch(err){
            console.log(err)
        }

    }

}