const UsuarioModel = require("../model/UsuarioModel");

const UsuariosServices = {

    validandoUsuario: async (dados) => {

        // Valida Nome
        if(dados.nome.length < 5) {
            throw('O nome deve conter pelo menos 5 letras.')
        }

        // Valida Senha
        if(dados.senha.length < 8) {
            throw('A senha deve conter no minimo 8 digitos.');
        }

        // VERIFICANDO SE EXISTE UM USUARIO COM MESMO EMAIL
        // const consultaUsuario = await UsuarioModel.findOne({
        //     where: {
        //         email: dados.email
        //     }
        // })
        
        // if(consultaUsuario) {
        //     throw('E-mail já está sendo utilizado por outro usuário.');
        // }

    }
}

module.exports = UsuariosServices;