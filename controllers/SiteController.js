const Site = require("../model/Site")


module.exports = class SiteController{


    static async cad(req, res){


        const { nome, email, telefone , cep } = req.body

        const user = {
            nome,
            email,
            telefone,
            cep
        }

        try {

            await Site.create(user)
            res.status(200).json({message: 'Formulário enviado com sucesso!'})

        } catch (err) {
            res.status(400).json({message: `Ocorreu um erro: ${err}`})
        }

    }

}