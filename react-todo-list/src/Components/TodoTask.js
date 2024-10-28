import React from 'react';

const TodoTask = ({ task, index, onComplete, onDelete }) => {
    return (
        <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-text">{task.text}</span>
            <div className="task-actions">
                <button onClick={() => onComplete(index)} className="complete-button">Complete</button>
                <button onClick={() => onDelete(index)} className="delete-button">Delete</button>
            </div>
        </div>
    );
};

export default TodoTask;
