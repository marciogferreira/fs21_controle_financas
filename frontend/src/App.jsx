import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Controle de Finanças
        </h1>
        <p className="text-gray-600 mb-8">
          Gerencie suas receitas, despesas e metas financeiras
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/login" 
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-200"
          >
            Fazer Login
          </Link>
          
          <Link 
            to="/register" 
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-200"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
