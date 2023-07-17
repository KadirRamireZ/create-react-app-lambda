import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (text) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese una tarea..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTask;
