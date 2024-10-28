import React from 'react';
import TodoTask from './TodoTask';

const TodoList = ({ tasks, onComplete, onDelete }) => {
    return (
        <div className="todo-list">
            {tasks.length === 0 ? (
                <p>No tasks added. Add one!</p>
            ) : (
                tasks.map((task, index) => (
                    <TodoTask
                        key={index}
                        index={index}
                        task={task}
                        onComplete={onComplete}
                        onDelete={onDelete}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;
