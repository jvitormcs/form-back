const Site = require("../model/Site")
const Empresa = require("../model/Empresa")
const GestResiduo = require("../model/GestResiduo")
const Filial = require("../model/Filial")
const LogiReversa = require("../model/LogiReversa")

module.exports = class SiteController{


    static async cadPrincipal(req, res){


        const { nome, email, telefone , cep } = req.body

        const user = {
            nome,
            email,
            telefone,
            cep
        }

        try {

            await Site.create(user)
            res.status(200).json({
                success: true,
                message: 'Formulário enviado com sucesso!'
            })

        } catch (err) {
            res.status(400).json({
                success: false,
                message: `Ocorreu um erro: ${err}`
            })
        }

    }

    static async cadEmpresa (req, res){

        const {nome, empresa, email, telefone, cep} = req.body

        const user = {
            nome,
            empresa,
            email,
            telefone,
            cep
        }

        try{

            await Empresa.create(user)
            res.status(200).json({
                success: true,
                message: 'Formulário enviado com sucesso!'
            })

        } catch (err) {
            res.status(400).json({
                success: false,
                message: `Ocorreu um erro: ${err}`
            })
        }

    }

    static async cadFilial (req, res){

        const {nome, empresa, telefone, email, cidade, uf} = req.body

        const user = {
            nome,
            empresa,
            telefone,
            email,
            cidade,
            uf
        }

        try{

            await Filial.create(user)
            res.status(200).json({
                success: true,
                message: 'Formulário enviado com sucesso!'
            })

        } catch (err) {
            res.status(400).json({
                success: false,
                message: `Ocorreu um erro: ${err}`
            })
        }

    }
    
    static async GestResiduo (req, res){

        const {nome, empresa, telefone, email, cidade, uf} = req.body

        const user = {
            nome,
            empresa,
            telefone,
            email,
            cidade,
            uf
        }

        try{

            await GestResiduo.create(user)
            res.status(200).json({
                success: true,
                message: 'Formulário enviado com sucesso!'
            })

        } catch (err) {
            res.status(400).json({
                success: false,
                message: `Ocorreu um erro: ${err}`
            })
        }

    }

    static async LogiReversa (req, res){

        const {nome, empresa, email, telefone} = req.body

        const user = {
            nome, empresa, email, telefone
        }

        try{

            await LogiReversa.create(user)
            res.status(200).json({
                success: true,
                message: 'Formulário enviado com sucesso!'
            })

        } catch (err) {
            res.status(400).json({
                success: false,
                message: `Ocorreu um erro: ${err}`
            })
        }

    }

    static async Contact (req,res){

        const {
            nome,
        email,
        mensagem,
        local
        } = req.body

         /* let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: true,
            auth: {
                type: 'login',
                user: 'contato@realixo.com',
                pass: 'qfbobaxejrawadba'
            },
            tls: {
                
            }

        }); */

    }
}