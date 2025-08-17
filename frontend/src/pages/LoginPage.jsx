import { useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../config/Api';
import Message from '../config/Message';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await Api.post('/login', {
                email: email,
                senha: senha
            });
            
            if (response.data.token) {
                localStorage.setItem('sis@controle_financas', response.data.token);
                Message.success('Login realizado com sucesso!');
                window.location.href = '/';
                // Redirecionar para dashboard ou página principal
            }
        } catch (error) {
            console.error('Erro no login:', error);
            Message.error('Erro ao fazer login. Verifique suas credenciais.');
        } finally {
            setLoading(false);
        }
    };

    const testarConexao = async () => {
        try {
            const response = await Api.get('/');
            Message.success('Conexão com backend funcionando!');
            console.log('Resposta do backend:', response.data);
        } catch (error) {
            Message.error('Erro na conexão com backend: ' + error.message);
            console.error('Erro:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h1>
                
                <button 
                    onClick={testarConexao}
                    className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-200"
                >
                    Testar Conexão com Backend
                </button>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin@admin.com.br"
                            required
                        />
                    </div>
                    
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Senha
                        </label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="123456"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-md transition duration-200"
                    >
                        {loading ? 'Fazendo login...' : 'Fazer Login'}
                    </button>
                </form>
                
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Não tem uma conta?{' '}
                        <Link to="/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                            Criar Conta
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}