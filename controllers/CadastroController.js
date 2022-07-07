const User = require('../model/Cadastro')


module.exports= class CadastroController {


    static async Register(req, res){
        const {email, nome, sobrenome, tipoPessoa, diaEntrega, horarioEntrega } = req.body
        const {cep, endereco, numero, complemento, bairro} = req.body
        const {tipoResidencia, numeroResidentes} = req.body
    
    
        const user = {
            email,
            nome,
            sobrenome, 
            tipoPessoa,
            diaEntrega,
            horarioEntrega,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            tipoResidencia,
            numeroResidentes,
        }

        try{
            await User.create(user)
        } catch(err){
            console.log(err)
        }
    
    }


}