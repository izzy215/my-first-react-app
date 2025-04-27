import React, { useState } from 'react';

function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
}

export default TodoInput;