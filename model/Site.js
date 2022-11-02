const { DataTypes } = require('sequelize')

const db = require('../database/conn')


const Site = db.define('new_contacts', {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
        require: true,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        require: true,
    },
    telefone: {
        type: DataTypes.STRING(220),
        require: true,
    },
    cep: {
        type: DataTypes.STRING(255),
        require: true,
    },
    created_ad: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW()
    }
    
}, {freezeTableName: true, timestamps: false})



module.exports = Site