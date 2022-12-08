const Site = require("../model/Site")
const Empresa = require("../model/Empresa")
const GestResiduo = require("../model/GestResiduo")
const Filial = require("../model/Filial")
const LogiReversa = require("../model/LogiReversa")
const nodemailer = require('nodemailer')

module.exports = class SiteController{


    static async cadPrincipal(req, res){


        const { nome, email, telefone , cep } = req.body

        const user = {
            nome,
            email,
            telefone,
            cep
        }

       /*  
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'login',
                user: 'site@realixo.com.br',
                pass: '1Mundosemlixo!2022'
            },

        });  */

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

         let transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                type: 'login',
                user: 'site@realixo.com.br',
                pass: '1Mundosemlixo!2022'
            },

        }); 

        try{
            transporter.sendMail({
                from: 'Site <site@realixo.com.br>',
                to: `vitormouracs@gmail.com`,
                subject: `${nome} ${email}`,
                text: 'Veja se estamos presentes na sua região!',
                html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que tem um novo cadastro aqui!!<h2>
                <ul>
                <li>Nome: ${nome}</li>
                <li>Email: ${email}</li>
                <li>Local do site: ${local}</li>
                <li>Mensagem: ${mensagem}</li>
                <ul>
                `
            })

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
}