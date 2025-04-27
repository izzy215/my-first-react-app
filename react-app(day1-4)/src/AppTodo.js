import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function AppTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default AppTodo;