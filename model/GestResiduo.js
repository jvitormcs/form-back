const { DataTypes } = require('sequelize')

const db = require('../database/conn')


const GestResiduo = db.define('LogisReversa', {
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
    cidade: {
        type: DataTypes.STRING(150),
        allowNull: false,
        require: true,
    },
    uf: {
        type: DataTypes.STRING(150),
        allowNull: false,
        require: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW()
    }
    
}, {freezeTableName: true, timestamps: false})



module.exports = GestResiduo