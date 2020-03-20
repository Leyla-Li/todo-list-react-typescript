import React from 'react';

export const AddTodoForm: React.FC = () => {
    return (
        <form>
            <input type='text' />
            <button type='submit'>Add todo item</button>
        </form>
    );
}