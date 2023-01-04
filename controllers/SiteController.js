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

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contato@realixo.com',
                pass: 'epowxlibmfdcglge'
            },

        });
    
        try {

            await Site.create(user)

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `contato@realixo.com`,
                subject: `Novo Cadastro`,
                text: 'Novo Cadastro',
                html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que temos um novo cadastro aqui!!<h2>
                <ul>
                <li>Nome: ${nome}</li>
                <li>Email: ${email}</li>
                <li>Telefone: ${telefone}</li>
                <li>Cep: ${cep}</li>
                <li>Local do site: Coleta Residencial</li>
                <ul>
                `
            })

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `${email}`,
                subject: 'Gratidão por fazer parte deste sonho.',
                text: 'Gratidão por fazer parte deste sonho.',
                html: `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equniv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <title></title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->
            
            
                <style type="text/css" media="screen">
                    
                    body {
                        padding: 0 !important;
                        margin: 0 !important;
                        display: block !important;
                        min-width: 100% !important;
                        width: 100% !important;
                        background: #f4f4f4;
                        -webkit-text-size-adjust: none
                    }
            
                    a {
                        color: #66c7ff;
                        text-decoration: none
                    }
            
                    p {
                        padding: 0 !important;
                        margin: 0 !important
                    }
            
                    img {
                        -ms-interpolation-mode: bicubic;
                        
                    }
            
                    .mcnPreviewText {
                        display: none !important;
                    }
            
                    .cke_editable,
                    .cke_editable a,
                    .cke_editable span,
                    .cke_editable a span {
                        color: #000001 !important;
                    }
            
                    
                    @media only screen and (max-device-width: 480px),
                    only screen and (max-width: 480px) {
                        .mobile-shell {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .bg {
                            background-size: 100% auto !important;
                            -webkit-background-size: 100% auto !important;
                        }
            
                        .text-header,
                        .m-center {
                            text-align: center !important;
                        }
            
                        .center {
                            margin: 0 auto !important;
                        }
            
                        .container {
                            padding: 20px 10px !important
                        }
            
                        .td {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .m-br-15 {
                            height: 15px !important;
                        }
            
                        .p30-15 {
                            padding: 30px 15px !important;
                        }
            
                        .p40 {
                            padding: 20px !important;
                        }
            
                        .m-td,
                        .m-hide {
                            display: none !important;
                            width: 0 !important;
                            height: 0 !important;
                            font-size: 0 !important;
                            line-height: 0 !important;
                            min-height: 0 !important;
                        }
            
                        .m-block {
                            display: block !important;
                        }
            
                        .fluid-img img {
                            width: 100% !important;
                            max-width: 100% !important;
                            height: auto !important;
                        }
            
                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top {
                            float: left !important;
                            width: 100% !important;
                            display: block !important;
                        }
            
                        .column-empty {
                            padding-bottom: 10px !important;
                        }
            
                        .column-empty2 {
                            padding-bottom: 20px !important;
                        }
            
                        .content-spacing {
                            width: 15px !important;
                        }
                    }
                </style>
            </head>
            
            <body class="body"
                style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
                <!--*|IF:MC_PREVIEW_TEXT|*-->
                <!--[if !gte mso 9]><!-->
                <span class="mcnPreviewText"
                    style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
                <!--<![endif]-->
                <!--*|END:IF|*-->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFF">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container"
                                        style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top"
                                                                            style="width: 100%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tr>
                                                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://realixo.com.br/" target="_blank">
                                                                                        <img src="https://realixo.com.br/images/new_logo.png" width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 15%; margin-left: auto; margin-right: auto; display: block;"
                                                                                            border="0" alt="" /></a>
                                                                                </td>
                                                                                </tr>
            
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                            <!-- Article / Title + Copy + Button -->
                                            <div mc:repeatable="Select" style="margin-top: -150px;" mc:variant="Article / Title + Copy + Button">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                <tr>
                                                                    <td class="p30-15" style="padding: 50px 30px;">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <td class="h3 pb20" style="color:#00b09c; font-family:'Noto Sans', Arial,sans-serif; font-weight: 800; font-size:30px; line-height:32px; text-align:left; padding-bottom:20px;"><div mc:edit="text_7">Olá,  ${nome}</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text pb20" style="color:#777777; font-family:'Noto Sans', Arial,sans-serif; font-size:18px; line-height:26px; text-align:left; padding-bottom:20px;"><div mc:edit="text_8">Estamos muito felizes e agradecidos em saber que você se interessa pelo nosso serviço. Desde já, saiba que nos comprometemos em fazer de sua experiência a melhor possível.<br><br>
            
                                                                                    
                                                                                    Você pode nós perguntar qualquer coisa que vier à sua mente. Responderemos com prazer!<br><br>
                                                                                    
                                                                                    Um abraço e até breve!
                                                                                    </div></td>
                                                                            </tr>
                                                                            
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <!-- END Article / Title + Copy + Button -->
                                            
                                            <tr>
                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://wa.me/5511912417855" target="_blank">
                                                                                        <button  width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 40px; margin-left: auto; margin-right: auto; display: block; color: #FFF; height: 50px; border:none; background-color: #00b09c; border-radius: 5px; font-size: 18px;"
                                                                                            border="0" alt="" >Nós chame no WhatsApp</button></a>
                                                                                </td>
                                                        
                                                        <tr>
                                            
                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                
                                                        
                                                        <tr>
            
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
            
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.facebook.com/REALIXO" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-facebook.png"
                                                                                    width="38" height="38" mc:edit="image_8"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://twitter.com/eurealixo" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-twitter.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.instagram.com/eurealixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-instagram.png"
                                                                                    width="38" height="38" mc:edit="image_10"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt;text-align:left;">
                                                                            <a href="https://www.linkedin.com/company/realixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-linkedin.png"
                                                                                    width="38" height="38" mc:edit="image_11"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.tiktok.com/@realixo_br" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-tiktok.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px; margin-left: 18px;"
                                                                                    border="0" alt="" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;">
                                                                <div mc:edit="text_34">Realixo - Um mundo sem lixo!</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;">
                                                                <div mc:edit="text_35">Endereço: Rua Cardeal Arcoverde, 719 -
                                                                    Pinheiros, São Paulo - SP, 05407-001, Brasil</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer3"
                                                                style="color:#c0c0c0; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:18px; text-align:center;">
                                                                 Todos os Direitos Reservados
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="img"
                                                                style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                <div mc:edit="text_37">
                                                                    <!--[if !mso]><!-->
                                                                    *|LIST:DESCRIPTION|*
                                                                    *|LIST:ADDRESS|*
                                                                    *|REWARDS_TEXT|*
                                                                    <!--<![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>`
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

    static async cadEmpresa (req, res){

        const {nome, empresa, email, telefone, cep} = req.body

        const user = {
            nome,
            empresa,
            email,
            telefone,
            cep
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

        try{

            await Empresa.create(user)

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `contato@realixo.com`,
                subject: `Novo Cadastro`,
                text: 'Novo Cadastro',
                html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que temos um novo cadastro aqui!!<h2>
                <ul>
                <li>Nome: ${nome}</li>
                <li>Empresa: ${empresa}</li>
                <li>Email: ${email}</li>
                <li>Telefone: ${telefone}</li>
                <li>CEP: ${cep}</li>
                <li>Local do site: Coleta para Empresas</li>
                <ul>
                `
            })

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `${email}`,
                subject: 'Gratidão por fazer parte deste sonho.',
                text: 'Gratidão por fazer parte deste sonho.',
                html: `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equniv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <title></title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->
            
            
                <style type="text/css" media="screen">
                    
                    body {
                        padding: 0 !important;
                        margin: 0 !important;
                        display: block !important;
                        min-width: 100% !important;
                        width: 100% !important;
                        background: #f4f4f4;
                        -webkit-text-size-adjust: none
                    }
            
                    a {
                        color: #66c7ff;
                        text-decoration: none
                    }
            
                    p {
                        padding: 0 !important;
                        margin: 0 !important
                    }
            
                    img {
                        -ms-interpolation-mode: bicubic;
                        
                    }
            
                    .mcnPreviewText {
                        display: none !important;
                    }
            
                    .cke_editable,
                    .cke_editable a,
                    .cke_editable span,
                    .cke_editable a span {
                        color: #000001 !important;
                    }
            
                    
                    @media only screen and (max-device-width: 480px),
                    only screen and (max-width: 480px) {
                        .mobile-shell {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .bg {
                            background-size: 100% auto !important;
                            -webkit-background-size: 100% auto !important;
                        }
            
                        .text-header,
                        .m-center {
                            text-align: center !important;
                        }
            
                        .center {
                            margin: 0 auto !important;
                        }
            
                        .container {
                            padding: 20px 10px !important
                        }
            
                        .td {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .m-br-15 {
                            height: 15px !important;
                        }
            
                        .p30-15 {
                            padding: 30px 15px !important;
                        }
            
                        .p40 {
                            padding: 20px !important;
                        }
            
                        .m-td,
                        .m-hide {
                            display: none !important;
                            width: 0 !important;
                            height: 0 !important;
                            font-size: 0 !important;
                            line-height: 0 !important;
                            min-height: 0 !important;
                        }
            
                        .m-block {
                            display: block !important;
                        }
            
                        .fluid-img img {
                            width: 100% !important;
                            max-width: 100% !important;
                            height: auto !important;
                        }
            
                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top {
                            float: left !important;
                            width: 100% !important;
                            display: block !important;
                        }
            
                        .column-empty {
                            padding-bottom: 10px !important;
                        }
            
                        .column-empty2 {
                            padding-bottom: 20px !important;
                        }
            
                        .content-spacing {
                            width: 15px !important;
                        }
                    }
                </style>
            </head>
            
            <body class="body"
                style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
                <!--*|IF:MC_PREVIEW_TEXT|*-->
                <!--[if !gte mso 9]><!-->
                <span class="mcnPreviewText"
                    style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
                <!--<![endif]-->
                <!--*|END:IF|*-->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFF">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container"
                                        style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top"
                                                                            style="width: 100%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tr>
                                                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://realixo.com.br/" target="_blank">
                                                                                        <img src="https://realixo.com.br/images/new_logo.png" width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 15%; margin-left: auto; margin-right: auto; display: block;"
                                                                                            border="0" alt="" /></a>
                                                                                </td>
                                                                                </tr>
            
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                            <!-- Article / Title + Copy + Button -->
                                            <div mc:repeatable="Select" style="margin-top: -150px;" mc:variant="Article / Title + Copy + Button">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                <tr>
                                                                    <td class="p30-15" style="padding: 50px 30px;">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <td class="h3 pb20" style="color:#00b09c; font-family:'Noto Sans', Arial,sans-serif; font-weight: 800; font-size:30px; line-height:32px; text-align:left; padding-bottom:20px;"><div mc:edit="text_7">Olá,  ${nome}</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text pb20" style="color:#777777; font-family:'Noto Sans', Arial,sans-serif; font-size:18px; line-height:26px; text-align:left; padding-bottom:20px;"><div mc:edit="text_8">Estamos muito felizes e agradecidos em saber que você se interessa pelo nosso serviço. Desde já, saiba que nos comprometemos em fazer de sua experiência a melhor possível.<br><br>
            
                                                                                    
                                                                                    Você pode nós perguntar qualquer coisa que vier à sua mente. Responderemos com prazer!<br><br>
                                                                                    
                                                                                    Um abraço e até breve!
                                                                                    </div></td>
                                                                            </tr>
                                                                            
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <!-- END Article / Title + Copy + Button -->
                                            
                                            <tr>
                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://wa.me/5511912417855" target="_blank">
                                                                                        <button  width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 40px; margin-left: auto; margin-right: auto; display: block; color: #FFF; height: 50px; border:none; background-color: #00b09c; border-radius: 5px; font-size: 18px;"
                                                                                            border="0" alt="" >Nós chame no WhatsApp</button></a>
                                                                                </td>
                                                        
                                                        <tr>
                                            
                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                
                                                        
                                                        <tr>
            
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
            
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.facebook.com/REALIXO" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-facebook.png"
                                                                                    width="38" height="38" mc:edit="image_8"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://twitter.com/eurealixo" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-twitter.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.instagram.com/eurealixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-instagram.png"
                                                                                    width="38" height="38" mc:edit="image_10"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt;text-align:left;">
                                                                            <a href="https://www.linkedin.com/company/realixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-linkedin.png"
                                                                                    width="38" height="38" mc:edit="image_11"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.tiktok.com/@realixo_br" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-tiktok.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px; margin-left: 18px;"
                                                                                    border="0" alt="" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;">
                                                                <div mc:edit="text_34">Realixo - Um mundo sem lixo!</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;">
                                                                <div mc:edit="text_35">Endereço: Rua Cardeal Arcoverde, 719 -
                                                                    Pinheiros, São Paulo - SP, 05407-001, Brasil</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer3"
                                                                style="color:#c0c0c0; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:18px; text-align:center;">
                                                                 Todos os Direitos Reservados
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="img"
                                                                style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                <div mc:edit="text_37">
                                                                    <!--[if !mso]><!-->
                                                                    *|LIST:DESCRIPTION|*
                                                                    *|LIST:ADDRESS|*
                                                                    *|REWARDS_TEXT|*
                                                                    <!--<![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>`
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

         let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contato@realixo.com',
                pass: 'epowxlibmfdcglge'
            },

        });

        try{

            await Filial.create(user)

             transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `contato@realixo.com`,
                subject: `Novo Cadastro`,
                text: 'Novo Cadastro',
                html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que temos um novo cadastro aqui!!<h2>
                <ul>
                <li>Nome: ${nome}</li>
                <li>Empresa: ${empresa}</li>
                <li>Email: ${email}</li>
                <li>Telefone: ${telefone}</li>
                <li>Local do site: Criar Filial</li>
                <ul>
                `
            })

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `${email}`,
                subject: 'Gratidão por fazer parte deste sonho.',
                text: 'Gratidão por fazer parte deste sonho.',
                html: `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equniv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <title></title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->
            
            
                <style type="text/css" media="screen">
                    
                    body {
                        padding: 0 !important;
                        margin: 0 !important;
                        display: block !important;
                        min-width: 100% !important;
                        width: 100% !important;
                        background: #f4f4f4;
                        -webkit-text-size-adjust: none
                    }
            
                    a {
                        color: #66c7ff;
                        text-decoration: none
                    }
            
                    p {
                        padding: 0 !important;
                        margin: 0 !important
                    }
            
                    img {
                        -ms-interpolation-mode: bicubic;
                        
                    }
            
                    .mcnPreviewText {
                        display: none !important;
                    }
            
                    .cke_editable,
                    .cke_editable a,
                    .cke_editable span,
                    .cke_editable a span {
                        color: #000001 !important;
                    }
            
                    
                    @media only screen and (max-device-width: 480px),
                    only screen and (max-width: 480px) {
                        .mobile-shell {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .bg {
                            background-size: 100% auto !important;
                            -webkit-background-size: 100% auto !important;
                        }
            
                        .text-header,
                        .m-center {
                            text-align: center !important;
                        }
            
                        .center {
                            margin: 0 auto !important;
                        }
            
                        .container {
                            padding: 20px 10px !important
                        }
            
                        .td {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .m-br-15 {
                            height: 15px !important;
                        }
            
                        .p30-15 {
                            padding: 30px 15px !important;
                        }
            
                        .p40 {
                            padding: 20px !important;
                        }
            
                        .m-td,
                        .m-hide {
                            display: none !important;
                            width: 0 !important;
                            height: 0 !important;
                            font-size: 0 !important;
                            line-height: 0 !important;
                            min-height: 0 !important;
                        }
            
                        .m-block {
                            display: block !important;
                        }
            
                        .fluid-img img {
                            width: 100% !important;
                            max-width: 100% !important;
                            height: auto !important;
                        }
            
                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top {
                            float: left !important;
                            width: 100% !important;
                            display: block !important;
                        }
            
                        .column-empty {
                            padding-bottom: 10px !important;
                        }
            
                        .column-empty2 {
                            padding-bottom: 20px !important;
                        }
            
                        .content-spacing {
                            width: 15px !important;
                        }
                    }
                </style>
            </head>
            
            <body class="body"
                style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
                <!--*|IF:MC_PREVIEW_TEXT|*-->
                <!--[if !gte mso 9]><!-->
                <span class="mcnPreviewText"
                    style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
                <!--<![endif]-->
                <!--*|END:IF|*-->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFF">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container"
                                        style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top"
                                                                            style="width: 100%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tr>
                                                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://realixo.com.br/" target="_blank">
                                                                                        <img src="https://realixo.com.br/images/new_logo.png" width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 15%; margin-left: auto; margin-right: auto; display: block;"
                                                                                            border="0" alt="" /></a>
                                                                                </td>
                                                                                </tr>
            
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                            <!-- Article / Title + Copy + Button -->
                                            <div mc:repeatable="Select" style="margin-top: -150px;" mc:variant="Article / Title + Copy + Button">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                <tr>
                                                                    <td class="p30-15" style="padding: 50px 30px;">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <td class="h3 pb20" style="color:#00b09c; font-family:'Noto Sans', Arial,sans-serif; font-weight: 800; font-size:30px; line-height:32px; text-align:left; padding-bottom:20px;"><div mc:edit="text_7">Olá,  ${nome}</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text pb20" style="color:#777777; font-family:'Noto Sans', Arial,sans-serif; font-size:18px; line-height:26px; text-align:left; padding-bottom:20px;"><div mc:edit="text_8">Estamos muito felizes e agradecidos em saber que você se interessa pelo nosso serviço. Desde já, saiba que nos comprometemos em fazer de sua experiência a melhor possível.<br><br>
            
                                                                                    
                                                                                    Você pode nós perguntar qualquer coisa que vier à sua mente. Responderemos com prazer!<br><br>
                                                                                    
                                                                                    Um abraço e até breve!
                                                                                    </div></td>
                                                                            </tr>
                                                                            
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <!-- END Article / Title + Copy + Button -->
                                            
                                            <tr>
                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://wa.me/5511912417855" target="_blank">
                                                                                        <button  width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 40px; margin-left: auto; margin-right: auto; display: block; color: #FFF; height: 50px; border:none; background-color: #00b09c; border-radius: 5px; font-size: 18px;"
                                                                                            border="0" alt="" >Nós chame no WhatsApp</button></a>
                                                                                </td>
                                                        
                                                        <tr>
                                            
                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                
                                                        
                                                        <tr>
            
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
            
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.facebook.com/REALIXO" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-facebook.png"
                                                                                    width="38" height="38" mc:edit="image_8"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://twitter.com/eurealixo" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-twitter.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.instagram.com/eurealixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-instagram.png"
                                                                                    width="38" height="38" mc:edit="image_10"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt;text-align:left;">
                                                                            <a href="https://www.linkedin.com/company/realixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-linkedin.png"
                                                                                    width="38" height="38" mc:edit="image_11"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.tiktok.com/@realixo_br" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-tiktok.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px; margin-left: 18px;"
                                                                                    border="0" alt="" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;">
                                                                <div mc:edit="text_34">Realixo - Um mundo sem lixo!</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;">
                                                                <div mc:edit="text_35">Endereço: Rua Cardeal Arcoverde, 719 -
                                                                    Pinheiros, São Paulo - SP, 05407-001, Brasil</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer3"
                                                                style="color:#c0c0c0; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:18px; text-align:center;">
                                                                 Todos os Direitos Reservados
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="img"
                                                                style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                <div mc:edit="text_37">
                                                                    <!--[if !mso]><!-->
                                                                    *|LIST:DESCRIPTION|*
                                                                    *|LIST:ADDRESS|*
                                                                    *|REWARDS_TEXT|*
                                                                    <!--<![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>`
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
    
    static async GestResiduo (req, res){

        const {nome, telefone, email, cidade, uf} = req.body

        const user = {
            nome,
            telefone,
            email,
            cidade,
            uf
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

        try{

            await GestResiduo.create(user)

           transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `contato@realixo.com`,
                subject: `Novo Cadastro`,
                text: 'Novo Cadastro',
                html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que temos um novo cadastro aqui!!<h2>
                <ul>
                <li>Nome: ${nome}</li>
                <li>Email: ${email}</li>
                <li>Telefone: ${telefone}</li>
                <li>Local do site: Evento lixo zero</li>
                <ul>
                `
            })

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `${email}`,
                subject: 'Gratidão por fazer parte deste sonho.',
                text: 'Gratidão por fazer parte deste sonho.',
                html: `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equniv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <title></title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->
            
            
                <style type="text/css" media="screen">
                    
                    body {
                        padding: 0 !important;
                        margin: 0 !important;
                        display: block !important;
                        min-width: 100% !important;
                        width: 100% !important;
                        background: #f4f4f4;
                        -webkit-text-size-adjust: none
                    }
            
                    a {
                        color: #66c7ff;
                        text-decoration: none
                    }
            
                    p {
                        padding: 0 !important;
                        margin: 0 !important
                    }
            
                    img {
                        -ms-interpolation-mode: bicubic;
                        
                    }
            
                    .mcnPreviewText {
                        display: none !important;
                    }
            
                    .cke_editable,
                    .cke_editable a,
                    .cke_editable span,
                    .cke_editable a span {
                        color: #000001 !important;
                    }
            
                    
                    @media only screen and (max-device-width: 480px),
                    only screen and (max-width: 480px) {
                        .mobile-shell {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .bg {
                            background-size: 100% auto !important;
                            -webkit-background-size: 100% auto !important;
                        }
            
                        .text-header,
                        .m-center {
                            text-align: center !important;
                        }
            
                        .center {
                            margin: 0 auto !important;
                        }
            
                        .container {
                            padding: 20px 10px !important
                        }
            
                        .td {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .m-br-15 {
                            height: 15px !important;
                        }
            
                        .p30-15 {
                            padding: 30px 15px !important;
                        }
            
                        .p40 {
                            padding: 20px !important;
                        }
            
                        .m-td,
                        .m-hide {
                            display: none !important;
                            width: 0 !important;
                            height: 0 !important;
                            font-size: 0 !important;
                            line-height: 0 !important;
                            min-height: 0 !important;
                        }
            
                        .m-block {
                            display: block !important;
                        }
            
                        .fluid-img img {
                            width: 100% !important;
                            max-width: 100% !important;
                            height: auto !important;
                        }
            
                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top {
                            float: left !important;
                            width: 100% !important;
                            display: block !important;
                        }
            
                        .column-empty {
                            padding-bottom: 10px !important;
                        }
            
                        .column-empty2 {
                            padding-bottom: 20px !important;
                        }
            
                        .content-spacing {
                            width: 15px !important;
                        }
                    }
                </style>
            </head>
            
            <body class="body"
                style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
                <!--*|IF:MC_PREVIEW_TEXT|*-->
                <!--[if !gte mso 9]><!-->
                <span class="mcnPreviewText"
                    style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
                <!--<![endif]-->
                <!--*|END:IF|*-->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFF">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container"
                                        style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top"
                                                                            style="width: 100%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tr>
                                                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://realixo.com.br/" target="_blank">
                                                                                        <img src="https://realixo.com.br/images/new_logo.png" width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 15%; margin-left: auto; margin-right: auto; display: block;"
                                                                                            border="0" alt="" /></a>
                                                                                </td>
                                                                                </tr>
            
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                            <!-- Article / Title + Copy + Button -->
                                            <div mc:repeatable="Select" style="margin-top: -150px;" mc:variant="Article / Title + Copy + Button">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                <tr>
                                                                    <td class="p30-15" style="padding: 50px 30px;">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <td class="h3 pb20" style="color:#00b09c; font-family:'Noto Sans', Arial,sans-serif; font-weight: 800; font-size:30px; line-height:32px; text-align:left; padding-bottom:20px;"><div mc:edit="text_7">Olá,  ${nome}</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text pb20" style="color:#777777; font-family:'Noto Sans', Arial,sans-serif; font-size:18px; line-height:26px; text-align:left; padding-bottom:20px;"><div mc:edit="text_8">Estamos muito felizes e agradecidos em saber que você se interessa pelo nosso serviço. Desde já, saiba que nos comprometemos em fazer de sua experiência a melhor possível.<br><br>
            
                                                                                    
                                                                                    Você pode nós perguntar qualquer coisa que vier à sua mente. Responderemos com prazer!<br><br>
                                                                                    
                                                                                    Um abraço e até breve!
                                                                                    </div></td>
                                                                            </tr>
                                                                            
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <!-- END Article / Title + Copy + Button -->
                                            
                                            <tr>
                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://wa.me/5511912417855" target="_blank">
                                                                                        <button  width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 40px; margin-left: auto; margin-right: auto; display: block; color: #FFF; height: 50px; border:none; background-color: #00b09c; border-radius: 5px; font-size: 18px;"
                                                                                            border="0" alt="" >Nós chame no WhatsApp</button></a>
                                                                                </td>
                                                        
                                                        <tr>
                                            
                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                
                                                        
                                                        <tr>
            
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
            
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.facebook.com/REALIXO" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-facebook.png"
                                                                                    width="38" height="38" mc:edit="image_8"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://twitter.com/eurealixo" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-twitter.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.instagram.com/eurealixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-instagram.png"
                                                                                    width="38" height="38" mc:edit="image_10"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt;text-align:left;">
                                                                            <a href="https://www.linkedin.com/company/realixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-linkedin.png"
                                                                                    width="38" height="38" mc:edit="image_11"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.tiktok.com/@realixo_br" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-tiktok.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px; margin-left: 18px;"
                                                                                    border="0" alt="" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;">
                                                                <div mc:edit="text_34">Realixo - Um mundo sem lixo!</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;">
                                                                <div mc:edit="text_35">Endereço: Rua Cardeal Arcoverde, 719 -
                                                                    Pinheiros, São Paulo - SP, 05407-001, Brasil</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer3"
                                                                style="color:#c0c0c0; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:18px; text-align:center;">
                                                                 Todos os Direitos Reservados
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="img"
                                                                style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                <div mc:edit="text_37">
                                                                    <!--[if !mso]><!-->
                                                                    *|LIST:DESCRIPTION|*
                                                                    *|LIST:ADDRESS|*
                                                                    *|REWARDS_TEXT|*
                                                                    <!--<![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>`
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

    static async LogiReversa (req, res){

        const {nome, empresa, email, telefone} = req.body

        const user = {
            nome, empresa, email, telefone
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

        try{

            await LogiReversa.create(user)

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `contato@realixo.com`,
                subject: `Novo Cadastro`,
                text: 'Novo Cadastro',
                html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que temos um novo cadastro aqui!!<h2>
                <ul>
                <li>Nome: ${nome}</li>
                <li>Empresa: ${empresa}</li>
                <li>Email: ${email}</li>
                <li>Telefone: ${telefone}</li>
                <li>Local do site: Logista Reversa</li>
                <ul>
                `
            })

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `${email}`,
                subject: 'Gratidão por fazer parte deste sonho.',
                text: 'Gratidão por fazer parte deste sonho.',
                html: `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equniv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <title></title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->
            
            
                <style type="text/css" media="screen">
                    
                    body {
                        padding: 0 !important;
                        margin: 0 !important;
                        display: block !important;
                        min-width: 100% !important;
                        width: 100% !important;
                        background: #f4f4f4;
                        -webkit-text-size-adjust: none
                    }
            
                    a {
                        color: #66c7ff;
                        text-decoration: none
                    }
            
                    p {
                        padding: 0 !important;
                        margin: 0 !important
                    }
            
                    img {
                        -ms-interpolation-mode: bicubic;
                        
                    }
            
                    .mcnPreviewText {
                        display: none !important;
                    }
            
                    .cke_editable,
                    .cke_editable a,
                    .cke_editable span,
                    .cke_editable a span {
                        color: #000001 !important;
                    }
            
                    
                    @media only screen and (max-device-width: 480px),
                    only screen and (max-width: 480px) {
                        .mobile-shell {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .bg {
                            background-size: 100% auto !important;
                            -webkit-background-size: 100% auto !important;
                        }
            
                        .text-header,
                        .m-center {
                            text-align: center !important;
                        }
            
                        .center {
                            margin: 0 auto !important;
                        }
            
                        .container {
                            padding: 20px 10px !important
                        }
            
                        .td {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .m-br-15 {
                            height: 15px !important;
                        }
            
                        .p30-15 {
                            padding: 30px 15px !important;
                        }
            
                        .p40 {
                            padding: 20px !important;
                        }
            
                        .m-td,
                        .m-hide {
                            display: none !important;
                            width: 0 !important;
                            height: 0 !important;
                            font-size: 0 !important;
                            line-height: 0 !important;
                            min-height: 0 !important;
                        }
            
                        .m-block {
                            display: block !important;
                        }
            
                        .fluid-img img {
                            width: 100% !important;
                            max-width: 100% !important;
                            height: auto !important;
                        }
            
                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top {
                            float: left !important;
                            width: 100% !important;
                            display: block !important;
                        }
            
                        .column-empty {
                            padding-bottom: 10px !important;
                        }
            
                        .column-empty2 {
                            padding-bottom: 20px !important;
                        }
            
                        .content-spacing {
                            width: 15px !important;
                        }
                    }
                </style>
            </head>
            
            <body class="body"
                style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
                <!--*|IF:MC_PREVIEW_TEXT|*-->
                <!--[if !gte mso 9]><!-->
                <span class="mcnPreviewText"
                    style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
                <!--<![endif]-->
                <!--*|END:IF|*-->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFF">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container"
                                        style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top"
                                                                            style="width: 100%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tr>
                                                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://realixo.com.br/" target="_blank">
                                                                                        <img src="https://realixo.com.br/images/new_logo.png" width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 15%; margin-left: auto; margin-right: auto; display: block;"
                                                                                            border="0" alt="" /></a>
                                                                                </td>
                                                                                </tr>
            
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                            <!-- Article / Title + Copy + Button -->
                                            <div mc:repeatable="Select" style="margin-top: -150px;" mc:variant="Article / Title + Copy + Button">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                <tr>
                                                                    <td class="p30-15" style="padding: 50px 30px;">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <td class="h3 pb20" style="color:#00b09c; font-family:'Noto Sans', Arial,sans-serif; font-weight: 800; font-size:30px; line-height:32px; text-align:left; padding-bottom:20px;"><div mc:edit="text_7">Olá,  ${nome}</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text pb20" style="color:#777777; font-family:'Noto Sans', Arial,sans-serif; font-size:18px; line-height:26px; text-align:left; padding-bottom:20px;"><div mc:edit="text_8">Estamos muito felizes e agradecidos em saber que você se interessa pelo nosso serviço. Desde já, saiba que nos comprometemos em fazer de sua experiência a melhor possível.<br><br>
            
                                                                                    
                                                                                    Você pode nós perguntar qualquer coisa que vier à sua mente. Responderemos com prazer!<br><br>
                                                                                    
                                                                                    Um abraço e até breve!
                                                                                    </div></td>
                                                                            </tr>
                                                                            
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <!-- END Article / Title + Copy + Button -->
            
            
                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                
                                                        
                                                        <tr>
            
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
            
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.facebook.com/REALIXO" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-facebook.png"
                                                                                    width="38" height="38" mc:edit="image_8"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://twitter.com/eurealixo" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-twitter.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.instagram.com/eurealixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-instagram.png"
                                                                                    width="38" height="38" mc:edit="image_10"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt;text-align:left;">
                                                                            <a href="https://www.linkedin.com/company/realixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-linkedin.png"
                                                                                    width="38" height="38" mc:edit="image_11"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.tiktok.com/@realixo_br" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-tiktok.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px; margin-left: 18px;"
                                                                                    border="0" alt="" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;">
                                                                <div mc:edit="text_34">Realixo - Um mundo sem lixo!</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;">
                                                                <div mc:edit="text_35">Endereço: Rua Cardeal Arcoverde, 719 -
                                                                    Pinheiros, São Paulo - SP, 05407-001, Brasil</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer3"
                                                                style="color:#c0c0c0; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:18px; text-align:center;">
                                                                 Todos os Direitos Reservados
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="img"
                                                                style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                <div mc:edit="text_37">
                                                                    <!--[if !mso]><!-->
                                                                    *|LIST:DESCRIPTION|*
                                                                    *|LIST:ADDRESS|*
                                                                    *|REWARDS_TEXT|*
                                                                    <!--<![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>`
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

    static async Contact (req,res){

        const {
            nome,
            email,
            mensagem,
            local
        } = req.body


         let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contato@realixo.com',
                pass: 'epowxlibmfdcglge'
            },

        });
       
        try{

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `contato@realixo.com`,
                subject: `Solicitação de contato ${nome} ${email}`,
                text: 'Solicitação de contato',
                html: `'<h2 style="color: #00b09c">EEEEEEEi Timeee... corre que temos um pedido de contato aqui!!<h2>
                <ul>
                <li>Nome: ${nome}</li>
                <li>Email: ${email}</li>
                <li>Local do site: ${local}</li>
                <li>Mensagem: ${mensagem}</li>
                <ul>
                `
            })

            transporter.sendMail({
                from: 'Realixo <contato@realixo.com>',
                to: `${email}`,
                subject: 'Já recebemos sua solicitação',
                text: 'Já recebemos sua solicitação',
                html: `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
            
            <head>
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                <meta http-equniv="Content-type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="date=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="x-apple-disable-message-reformatting" />
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i" rel="stylesheet" />
                <!--<![endif]-->
                <title></title>
                <!--[if gte mso 9]>
                <style type="text/css" media="all">
                    sup { font-size: 100% !important; }
                </style>
                <![endif]-->
            
            
                <style type="text/css" media="screen">
                    
                    body {
                        padding: 0 !important;
                        margin: 0 !important;
                        display: block !important;
                        min-width: 100% !important;
                        width: 100% !important;
                        background: #f4f4f4;
                        -webkit-text-size-adjust: none
                    }
            
                    a {
                        color: #66c7ff;
                        text-decoration: none
                    }
            
                    p {
                        padding: 0 !important;
                        margin: 0 !important
                    }
            
                    img {
                        -ms-interpolation-mode: bicubic;
                        
                    }
            
                    .mcnPreviewText {
                        display: none !important;
                    }
            
                    .cke_editable,
                    .cke_editable a,
                    .cke_editable span,
                    .cke_editable a span {
                        color: #000001 !important;
                    }
            
                    
                    @media only screen and (max-device-width: 480px),
                    only screen and (max-width: 480px) {
                        .mobile-shell {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .bg {
                            background-size: 100% auto !important;
                            -webkit-background-size: 100% auto !important;
                        }
            
                        .text-header,
                        .m-center {
                            text-align: center !important;
                        }
            
                        .center {
                            margin: 0 auto !important;
                        }
            
                        .container {
                            padding: 20px 10px !important
                        }
            
                        .td {
                            width: 100% !important;
                            min-width: 100% !important;
                        }
            
                        .m-br-15 {
                            height: 15px !important;
                        }
            
                        .p30-15 {
                            padding: 30px 15px !important;
                        }
            
                        .p40 {
                            padding: 20px !important;
                        }
            
                        .m-td,
                        .m-hide {
                            display: none !important;
                            width: 0 !important;
                            height: 0 !important;
                            font-size: 0 !important;
                            line-height: 0 !important;
                            min-height: 0 !important;
                        }
            
                        .m-block {
                            display: block !important;
                        }
            
                        .fluid-img img {
                            width: 100% !important;
                            max-width: 100% !important;
                            height: auto !important;
                        }
            
                        .column,
                        .column-top,
                        .column-empty,
                        .column-empty2,
                        .column-dir-top {
                            float: left !important;
                            width: 100% !important;
                            display: block !important;
                        }
            
                        .column-empty {
                            padding-bottom: 10px !important;
                        }
            
                        .column-empty2 {
                            padding-bottom: 20px !important;
                        }
            
                        .content-spacing {
                            width: 15px !important;
                        }
                    }
                </style>
            </head>
            
            <body class="body"
                style="padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#ffffff; -webkit-text-size-adjust:none;">
                <!--*|IF:MC_PREVIEW_TEXT|*-->
                <!--[if !gte mso 9]><!-->
                <span class="mcnPreviewText"
                    style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></span>
                <!--<![endif]-->
                <!--*|END:IF|*-->
                <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#FFF">
                    <tr>
                        <td align="center" valign="top">
                            <table width="650" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
                                <tr>
                                    <td class="td container"
                                        style="width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;">
                                        <!-- Header -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td style="padding-bottom: 20px;">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="p30-15">
                                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <th class="column-top"
                                                                            style="width: 100%; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
                                                                            <table width="100%" border="0" cellspacing="0"
                                                                                cellpadding="0">
                                                                                <tr>
                                                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://realixo.com.br/" target="_blank">
                                                                                        <img src="https://realixo.com.br/images/new_logo.png" width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 15%; margin-left: auto; margin-right: auto; display: block;"
                                                                                            border="0" alt="" /></a>
                                                                                </td>
                                                                                </tr>
            
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                            <!-- Article / Title + Copy + Button -->
                                            <div mc:repeatable="Select" style="margin-top: -150px;" mc:variant="Article / Title + Copy + Button">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                    <tr>
                                                        <td style="padding-bottom: 20px;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                                                                <tr>
                                                                    <td class="p30-15" style="padding: 50px 30px;">
                                                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                            <tr>
                                                                                <td class="h3 pb20" style="color:#00b09c; font-family:'Noto Sans', Arial,sans-serif; font-weight: 800; font-size:30px; line-height:32px; text-align:left; padding-bottom:20px;"><div mc:edit="text_7">Olá,  ${nome}</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text pb20" style="color:#777777; font-family:'Noto Sans', Arial,sans-serif; font-size:18px; line-height:26px; text-align:left; padding-bottom:20px;"><div mc:edit="text_8">
                                                                                    Obrigado pela sua mensagem! Nós responderemos o mais breve possível. Se desejar, você também pode entrar em contato conosco via whatsapp<br>
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <!-- END Article / Title + Copy + Button -->
            
            
                                        <!-- Footer -->
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td class="img" width="200"
                                                                                    style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                                    <a href="https://wa.me/5511912417855" target="_blank">
                                                                                        <button  width="200"
                                                                                            height="100" mc:edit="image_8"
                                                                                            style="width: 330px; margin-bottom: 40px; margin-left: auto; margin-right: auto; display: block; color: #FFF; height: 50px; border:none; background-color: #00b09c; border-radius: 5px; font-size: 18px;"
                                                                                            border="0" alt="" >Nós chame no WhatsApp</button></a>
                                                                                </td>
                                                        
                                                        <tr>
            
                                                            <td align="center" style="padding-bottom: 30px;">
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                    <tr>
            
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.facebook.com/REALIXO" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-facebook.png"
                                                                                    width="38" height="38" mc:edit="image_8"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://twitter.com/eurealixo" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-twitter.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="55"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.instagram.com/eurealixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-instagram.png"
                                                                                    width="38" height="38" mc:edit="image_10"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt;text-align:left;">
                                                                            <a href="https://www.linkedin.com/company/realixo/" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-linkedin.png"
                                                                                    width="38" height="38" mc:edit="image_11"
                                                                                    style="max-width:38px;" border="0" alt="" /></a>
                                                                        </td>
                                                                        <td class="img" width="38"
                                                                            style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                            <a href="https://www.tiktok.com/@realixo_br" target="_blank"><img
                                                                                    src="https://realixo.com.br/images/logo-tiktok.png"
                                                                                    width="38" height="38" mc:edit="image_9"
                                                                                    style="max-width:38px; margin-left: 18px;"
                                                                                    border="0" alt="" /></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer1 pb10"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:16px; line-height:20px; text-align:center; padding-bottom:10px;">
                                                                <div mc:edit="text_34">Realixo - Um mundo sem lixo!</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer2 pb30"
                                                                style="color:#999999; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:26px; text-align:center; padding-bottom:30px;">
                                                                <div mc:edit="text_35">Endereço: Rua Cardeal Arcoverde, 719 -
                                                                    Pinheiros, São Paulo - SP, 05407-001, Brasil</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-footer3"
                                                                style="color:#c0c0c0; font-family:'Noto Sans', Arial,sans-serif; font-size:12px; line-height:18px; text-align:center;">
                                                                 Todos os Direitos Reservados
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="img"
                                                                style="font-size:0pt; line-height:0pt; text-align:left;">
                                                                <div mc:edit="text_37">
                                                                    <!--[if !mso]><!-->
                                                                    *|LIST:DESCRIPTION|*
                                                                    *|LIST:ADDRESS|*
                                                                    *|REWARDS_TEXT|*
                                                                    <!--<![endif]-->
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                        <!-- END Footer -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            
            </html>`
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