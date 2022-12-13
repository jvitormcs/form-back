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

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contato@realixo.com',
                pass: 'epowxlibmfdcglge'
            },

        });

        transporter.sendMail({
            from: 'Realixo <contato@realixo.com>',
            to: `contato@realixo.com`,
            subject: `Novo Cadastro de investidor`,
            text: 'Novo Cadastro Investidor',
            html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que temos um novo cadastro de investidor aqui!!<h2>
            <ul>
            <li>Nome: ${nome} ${sobrenome}</li>
            <li>Email: ${email}</li>
            <li>Telefone: ${telefone}</li>
            <li>Idioma: ${lang}</li>
            <li>Local do site: Investidores</li>
            <ul>
            `
        })

        try{
            await Invest.create(user)
        } catch(err){
            console.log(err)
        }

    }

}