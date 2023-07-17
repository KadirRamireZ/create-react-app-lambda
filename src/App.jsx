import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTask = {
      id: new Date().getTime().toString(),
      text,
      completed: false
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const toggleTask = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Lista de tareas</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
};

export default App;

