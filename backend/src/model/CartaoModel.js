const { DataTypes } = require('sequelize');
const Conexao = require('../config/conexao.js');

const CartaoModel = Conexao.define(
    "CartaoModel",
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
        limite: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        data_vencimento: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        tableName: 'cartoes',
    }
)

module.exports = CartaoModel;