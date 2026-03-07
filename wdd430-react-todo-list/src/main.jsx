// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const todos = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

function HandleSubmit() {
  return (
    <ul>
      {todos.map(todo => 
        <li key={todo.id}>
          {todo.name} is {todo.age} years old
        </li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <HandleSubmit />
)