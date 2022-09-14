const { DataTypes } = require('sequelize')

const db = require('../database/conn')


const Investidor = db.define('Investidores', {
    Id_Investidor:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    Sobrenome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    Telefone: {
        type: DataTypes.STRING(16),
        require: true,
    },
    Lang: {
        type: DataTypes.STRING(16),
        require: true,
    }
    
}, {freezeTableName: true})



module.exports = Investidor