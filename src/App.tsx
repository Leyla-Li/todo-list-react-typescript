import React from 'react';

import { TodoListItem } from './TodoListItem';
import { Todo } from './types';

const todos: Array<Todo> = [
  {text: 'Cook lunch', complete: true}, 
  {text: 'Walk Cat', complete: false}
];

function App() {
  return (
    <React.Fragment>
    <TodoListItem todo={todos[0]} />
    <TodoListItem todo={todos[1]} />
    </React.Fragment>
  );
}

export default App;
