import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  console.log("App rerender");
  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTodo(json))
 
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
