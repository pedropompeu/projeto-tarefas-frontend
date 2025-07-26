import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tarefas/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        });

         console.log('Dados recebidos da API:', response.data);

        setTasks(response.data);
      } catch (error) {
        console.error('Erro ao buscar as tarefas!', error);
      }
    };

    if (token) {
      fetchTasks();
    }
  }, [token]);
 console.log('Estado atual das tarefas (antes de renderizar):', tasks);
  return (
    <div>
      <h2>Minha Lista de Tarefas</h2>
      <ul>
        {}
        {tasks.map(task => (
          <li key={task.id}>
            {task.titulo} - {task.concluida ? 'Concluída' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;