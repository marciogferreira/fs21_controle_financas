const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const BancoModel = Conexao.define(
    "BancoModel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        saldo: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
     
    
    }, 
    {
        tableName: 'bancos'
    }
)

module.exports = BancoModel;