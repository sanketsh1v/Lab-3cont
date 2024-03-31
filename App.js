import React, { useState } from 'react';
import ToDoList from './ToDoList'; 

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;
