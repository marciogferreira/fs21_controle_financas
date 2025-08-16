const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const CategoriaModel = Conexao.define(
    "CategoriaModel", 
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
        descricao: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
      
      
        
    }, 
    {
        tableName: 'categorias'
    }
)

module.exports = CategoriaModel;