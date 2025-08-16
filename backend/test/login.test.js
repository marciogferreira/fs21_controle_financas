const getToken = require("./autenticacao");

test('Autenticação', async () => {
    const response = await getToken();
    expect(response.status).toBe(200);
    expect(response.data.message).toBe('Usuario Logado com Sucesso!');
})