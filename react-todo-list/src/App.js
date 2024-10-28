import React, { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TodoList from './Components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    //toggle completion of task for true or false
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    //delete task for specific index by creating new array using filter
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <AddTask onAdd={addTask} />
      <TodoList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
