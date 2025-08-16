const UsuarioModel = require("../model/UsuarioModel");
const ErrorServices = require("../services/ErrorServices");
const UsuariosServices = require("../services/UsuariosServices");
const Helpers = require('../config/Helpers.js');
const UsuarioController = {
    listar: async (request, response) => {
        const dados = await UsuarioModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await UsuarioModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            dados.senha = Helpers.crypto(dados.senha);
            await UsuariosServices.validandoUsuario(dados);
            await UsuarioModel.create(dados);
            return response.json({ 
                message: 'Usuário criado com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar seu usuário.', e, response);
            // if(e.name ===  'SequelizeUniqueConstraintError') {
            //     return response.status(422).json({ 
            //         message: 'Não foi possível cadastrar seu usuário. ' + e.errors[0].message
            //     })
            // }
            
            // return response.status(500).json({ 
            //     message: 'Não foi possível cadastrar seu usuário. ' + e
            // })
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        dados.senha = Helpers.crypto(dados.senha);
        await UsuarioModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Usuário atualizado com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await UsuarioModel.destroy({
            where: {
                id: id
            }
        })
        // DELETE FROM usuarios WHERE id = ;DELETE FROM usuarios;;
        return response.json({
            message: "Usuário deletado com sucesso!"
        })
    }
}

module.exports = UsuarioController;