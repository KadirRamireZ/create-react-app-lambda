import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  const { id, text, completed } = task;

  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <input
        className="task-checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <label className="task-label">{text}</label>
      <button
        className="task-delete-button"
        onClick={() => onDelete(id)}
        title="Eliminar tarea"
      >
        &times;
      </button>
    </div>
  );
};

export default Task;
