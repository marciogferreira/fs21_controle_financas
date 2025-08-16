const { DataTypes } = require('sequelize')
const Conexao = require('../config/conexao.js')

const MetasDesejosModel = Conexao.define(
    "MetasDesejosModel", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categorias',
                key: 'id'
            }
        },
        nome: {
            type: DataTypes.STRING(244),
            allowNull: false
        },
        valor: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        data_vencimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, 
    {
        tableName: 'metas_desejos'
    }
)

module.exports = MetasDesejosModel;