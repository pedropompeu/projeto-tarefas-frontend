// frontend/src/components/Login.js

import React, { useState } from 'react';
// 1. Importe o axios que instalámos
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 2. Transformámos a função em 'async' para podermos usar 'await'
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // 3. Bloco try...catch para tratar sucessos e erros da API
    try {
      // 4. Fazemos o pedido POST para o nosso endpoint de token
      const response = await axios.post('http://127.0.0.1:8000/api/token/', {
        username: username,
        password: password,
      });

      // 5. Se o pedido for bem-sucedido, a API devolve o token
      const token = response.data.token;
      console.log('Login bem-sucedido! Token:', token);
      alert('Login realizado com sucesso!');

      // No futuro, vamos guardar este token para usar noutros pedidos
      
    } catch (error) {
      // 6. Se as credenciais estiverem erradas ou houver outro erro...
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
        />
      </div>
      <div>
        <label>Senha:</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;