import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                placeholder="Add a new task here..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="task-input"
            />
            <button type="submit" className="add-button">Add</button>
        </form>
    );
};

export default AddTask;
