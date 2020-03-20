import React, { useState, ChangeEvent } from 'react';

export const AddTodoForm: React.FC = () => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    return (
        <form>
            <input type='text' value={newTodo} onChange={handleChange} />
            <button type='submit'>Add todo item</button>
        </form>
    );
}