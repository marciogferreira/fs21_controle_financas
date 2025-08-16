const Api = require("./api.js");
const getToken = require("./autenticacao.js");

test('Crud - Listando Usuarios', async () => {
    const responseToken = await getToken();
    const response = await Api.get('usuarios', {
        headers: {
            token: responseToken.data.token
        }
    });
    expect(response.status).toBe(200);
})

test('Crud - Criando Usuarios', async () => {
    const responseToken = await getToken();
    const response = await Api.post('usuarios', {
        nome: 'Teste',
        email: 'teste2@teste.com.br',
        senha: 'teste'
    }, {
        headers: {
            token: responseToken.data.token
        }
    });
    expect(response.status).toBe(200);
})