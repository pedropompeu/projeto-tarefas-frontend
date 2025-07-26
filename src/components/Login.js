import React, { useState } from 'react';
import axios from 'axios';

// 1. O componente agora espera receber a função 'onLoginSuccess' como uma propriedade
const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: username,
        password: password,
      });

      const token = response.data.token;

      // 2. ESTA É A MUDANÇA PRINCIPAL:
      // Em vez de mostrar um alert e um console.log, chamamos a função
      // que recebemos do App.js, entregando o token a ele.
      onLoginSuccess(token);
      
    } catch (error) {
      console.error('Erro no login!', error);
      alert('Erro no login. Verifique as suas credenciais.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Utilizador:</label>
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
      </div>
      <div>
        <label>Senha:</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;