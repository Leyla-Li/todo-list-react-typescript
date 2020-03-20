import React, { useState } from 'react';

import { Todo, ToggleTodo } from './types';
import { TodoList } from './TodoList';

const initialTodos: Array<Todo> = [
  {text: 'Cook lunch', complete: true}, 
  {text: 'Walk Cat', complete: false}
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <React.Fragment>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
}

export default App;
