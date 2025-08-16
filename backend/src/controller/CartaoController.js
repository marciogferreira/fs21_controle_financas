const CategoriaModel = require('../model/CartaModel');
const ErrorServices = require('../services/ErrorServices');

const CartaoController = {
    listar: async (request, response) => {
        try {
            const usuario_id = request.usuario.id;
            const dados = await CartaoModel.findAll({
                where: {
                    usuario_id: usuario_id
                }
            });
            if (!dados || dados.length === 0) {
                return response.status(404).json({
                    message: 'Nenhum cartão encontrado.'
                })
            }
            return response.json(dados);
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível listar os cartões.', error, response);
        }
    },
    consultarPorID: async (request, response) => {
        try {
            const id = request.params.id;
            const usuario_id = request.usuario.id;
            const dados = await CartaoModel.findOne({
                where: {
                    id: id,
                    usuario_id: usuario_id
                }
            });
            if (!dados) {
                return response.status(404).json({
                    message: 'Cartão não encontrado.'
                });
            }
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível consultar o cartão.', error, response);
        }
    },
    criar: async (request, response) => {
        try {
            const dados = request.body;
            const usuario_id = request.usuario.id;
            dados.usuario_id = usuario_id; // Associar o cartão ao usuário logado
            dados.data_vencimento = new Date(dados.data_vencimento); // Garantir que a data está no formato correto
            await CartaoServices.validandoCartao(dados);
            await CartaoModel.create(dados);
            return response.json({
                message: 'Cartão criado com sucesso!',
                data: dados
            });
        } catch (e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar seu cartão.', e, response);
        }
    },
    atualizar: async (request, response) => {
        try {
            const dados = request.body;
            const id = request.params.id;
            const usuario_id = request.usuario.id;
            await CartaoServices.validandoCartao(dados);
            await CartaoModel.update(dados, {
                where: {
                    usuario_id: usuario_id,
                    id: id
                }
            });
            return response.json({
                message: "Cartão atualizado com sucesso!"
            });
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível atualizar o cartão.', error, response);
        }
    },
    deletar: async (request, response) => {
        try {
            const id = request.params.id;
            const usuario_id = request.usuario.id;
            const dados = await CartaoModel.findOne({
                where: {
                    id: id,
                    usuario_id: usuario_id
                }
            });
            if (!dados) {
                return response.status(404).json({
                    message: 'Cartão não encontrado.'
                });
            }
            await CartaoModel.destroy({
                where: {
                    usuario_id: usuario_id,
                    id: id
                }
            });
            return response.json({
                message: "Cartão deletado com sucesso!"
            });
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível deletar o cartão.', error, response);
        }
    }
};

module.exports = CartaoController;