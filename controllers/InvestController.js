const conn = require('../database/conn')
const Invest = require('../model/invest')

module.exports = class InvestController {

    static async Register(req, res) {

        const {nome, sobrenome, email, telefone, lang} = req.body

        const user = {
            Nome: nome,
            Sobrenome: sobrenome,
            Email: email,
            Telefone: telefone,
            Lang: lang
        }

        try{
            await Invest.create(user)
        } catch(err){
            console.log(err)
        }

    }

}