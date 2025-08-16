const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js');
const BancoModel = require('./BancoModel.js');

const ReceitasModel = Conexao.define(
    "ReceitasModel", 
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
         valor: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        categoria_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                key: 'id',
                model:CategoriaModel
            }
        
        },
        data_vencimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        banco_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                key: 'id',
                model:BancoModel
            }

        },
        cartao_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                key: 'id',
                model:CartaoModel
            }
            
            
        }
    }, 
    {
        tableName: 'receitas'
    }
)

module.exports = ReceitasModel;