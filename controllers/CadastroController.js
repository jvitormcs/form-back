const User = require('../model/Cadastro')
const nodemailer = require('nodemailer')


module.exports= class CadastroController {


    static async Register(req, res){
        const {email, nome, sobrenome, telefone, tipoPessoa} = req.body
        const {cep, endereco, numero, complemento, bairro} = req.body
        const {tipoResidencia, numeroResidentes} = req.body
    
    
        const user = {
            email,
            nome,
            sobrenome, 
            telefone, 
            tipoPessoa,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            tipoResidencia,
            numeroResidentes,
        }

        /* let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: true,
            auth: {
                user: 'contato@realixo.com',
                pass: 'epowxlibmfdcglge'
            },
            tls: {
                
            }

        }); */



        try{
            await User.create(user)

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `${email}`,
                subject: 'Gratidão por fazer parte deste sonho.',
                text: 'Gratidão por fazer parte deste sonho.',
                html: ``
            }). then(message => {
                console.log(message);
            }).catch(err => {
                console.log(err)
            })

           
        } catch(err){
            console.log(err)
        }
    
    }


}