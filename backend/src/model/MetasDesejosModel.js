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
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        valor: {
            type: DataTypes.NUMBER,
            allowNull: false,
            unique: true
        },
        categoria_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categorias',
                key: 'id'
            }
        },
        data_vencimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, 
    {
        tableName: 'usuarios'
    }
)

module.exports = MetasDesejosModel;