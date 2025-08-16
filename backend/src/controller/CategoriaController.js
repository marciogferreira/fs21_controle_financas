const CategoriaModel = require('../model/CategoriaModel');
const ErrorServices = require('../services/ErrorServices');

const CategoriaController = {
    listar: async (request, response) => {
        try {
            const categoria_id = request.categoria.id;
            const dados = await CategoriaModel.findAll();
            if (!dados || dados.length === 0) {
                return response.status(404).json({
                    message: 'Nenhum categoria encontrada.'
                })
            }
            return response.json(dados);
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível listar as categorias.', error, response);
        }
    },
    consultarPorID: async (request, response) => {
        try {
            const id = request.params.id;
            const dados = await CategoriaModel.findOne({
                where: {
                    id: id
                }
            });
            if (!dados) {
                return response.status(404).json({
                    message: 'Categoria não encontrado.'
                });
            }
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível consultar a categoria.', error, response);
        }
    },
    criar: async (request, response) => {
        try {
            const dados = request.body;
            
            const categoria_id = request.categoria.id;
            dados.categoria_id = categoria_id; // Associar o cateoria ao usuário logado
            
            await CategoriaServices.validandoCategoria(dados);
            await CategoriaModel.create(dados);
            return response.json({
                message: 'Categoria criado com sucesso!',
                data: dados
            });
        } catch (e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar a categoria.', e, response);
        }
    },
    atualizar: async (request, response) => {
        try {
            const dados = request.body;
            const id = request.params.id;
            const categoria_id = request.categoria.id;
            await CategoriaServices.validandoCategoria(dados);
            await CategoriaModel.update(dados, {
                where: {
                    categoria_id: categoria_id,
                    id: id
                }
            });
            return response.json({
                message: "Categoria atualizado com sucesso!"
            });
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível atualizar a categoria.', error, response);
        }
    },
    deletar: async (request, response) => {
        try {
            const id = request.params.id;
            const categoria_id = request.categoria.id;
            const dados = await CategoriaModel.findOne({
                where: {
                    id: id,
                    categoria_id: categoria_id
                }
            });
            if (!dados) {
                return response.status(404).json({
                    message: 'Categoria não encontrado.'
                });
            }
            await CategoriaModel.destroy({
                where: {
                    categoria_id: categoria_id,
                    id: id
                }
            });
            return response.json({
                message: "Categoria deletado com sucesso!"
            });
        } catch (error) {
            return ErrorServices.validacaoErro('Não foi possível deletar a categoria.', error, response);
        }
    }
};

module.exports = CategoriaController;