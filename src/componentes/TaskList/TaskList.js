import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  const { id, text, completed } = task;

  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        {text}
      </label>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
};

export default Task;
