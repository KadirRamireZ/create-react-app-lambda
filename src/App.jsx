import React, { useState } from 'react';
import TaskList from './componentes/TaskList/TaskList';
import AddTask from './componentes/AddTask/AddTask';
import "../src/App.css"


const App = () => {
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(0);

    const addTask = text => {
        if (!text) {
            alert('Error, ingresar tarea');
            return;
        }

        const existingTask = tasks.find(task => task.text === text);
        if (existingTask) {
            alert('Error, tarea existente');
            return;
        }

        const newTask = {
            id: new Date().getTime().toString(),
            text,
            completed: false
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
    };


    const deleteTask = id => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
        setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
    };

    const toggleTask = id => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );

        setCounter(prevCounter =>
            tasks.find(task => task.id === id && !task.completed)
                ? prevCounter + 1
                : prevCounter - 1
        );
    };

    return (
        <div className="app">
            <h1>Lista de tareas</h1>
            <p>Tareas Completadas: {counter}</p>
            <AddTask onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
        </div>
    );
};


export default App;