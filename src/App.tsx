import React, { useState } from 'react';

import { TodoListItem } from './TodoListItem';
import { Todo } from './types';

const initialTodos: Array<Todo> = [
  {text: 'Cook lunch', complete: true}, 
  {text: 'Walk Cat', complete: false}
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.complete
        }
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <React.Fragment>
    <TodoListItem todo={todos[0]} />
    <TodoListItem todo={todos[1]} />
    </React.Fragment>
  );
}

export default App;
