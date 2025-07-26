import React, { useState } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  const handleLoginSuccess = (receivedToken) => {
    setToken(receivedToken);
  };

  const handleLogout = () => {
    setToken(null);
  };


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