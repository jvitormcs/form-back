const { DataTypes } = require('sequelize')

const db = require('../database/conn')


const User = db.define('Form_contact', {
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    sobrenome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    telefone: {
        type: DataTypes.STRING(18),
        allowNull: false,
        require: true,
    },
    tipoPessoa: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    cep: {
        type: DataTypes.STRING(100),
        require: true,
    },
    endereco: {
        type: DataTypes.STRING(100),
        require: true,
    },
    numero: {
        type: DataTypes.INTEGER,
        require: true,
    },
    complemento: {
        type: DataTypes.STRING(100), 
        require: false,
    },
    bairro: {
        type: DataTypes.STRING(100),
        require: true,
    },
    tipoResidencia: {
        type: DataTypes.STRING(100),
        require: true,
    },
    numeroResidentes: {
        type: DataTypes.STRING(100),
        require: true,
    }
    
})



module.exports = User