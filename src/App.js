// frontend/src/App.js

import React, { useState } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (receivedToken) => {
    console.log('App.js recebeu o token:', receivedToken); // ESPIÃO 1
    setToken(receivedToken);
  };

  const handleLogout = () => {
    setToken(null);
  };

  // ESPIÃO 2: Vamos ver o valor do token a cada renderização
  console.log('Renderizando App.js, o valor do token é:', token);

  return (
    <div className="App">
      <h1>Minha Aplicação de Tarefas</h1>
      {token ? (
        <div>
          <TaskList token={token} />
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;