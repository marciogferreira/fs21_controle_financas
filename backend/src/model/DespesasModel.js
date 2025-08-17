const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')
const CategoriaModel = require('./CategoriaModel.js')
const BancoModel = require('./BancoModel.js')
const CartaoModel = require('./CartaoModel.js')

const DespesasModel = Conexao.define(
    "DespesasModel", 
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
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'id',
                model: CategoriaModel
            }
        },

        data_vencimento: {
            type: DataTypes.DATE,
            allowNull: false,
            
        },

       banco_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'id',
                model: BancoModel
            }
        },
        cartao_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: 'id',
                model: CartaoModel
            }
        },
    }, 
    {
        tableName: 'despesas'
    }
)

module.exports = DespesasModel;