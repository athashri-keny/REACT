import { useState } from 'react';
import './App.css';
import { TodoProvider } from './Contexts/todoContext';
import { useEffect } from 'react';
import TodoForm from './Components/TodosForm';
import TodoItem from './Components/TodoItem';


function App() {
  const [todos, setTodos] = useState([]); 

  const addtodo = (todo) => {
    setTodos((oldTodo) => [{ id: Date.now(), ...todo }, ...oldTodo]); // ... means joins the new arrays to old arrays
  };

 // it only updates the matching  id of the todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) // if the id matches the a new Todo is added to the array with the help of map 
    );
  };

  const deleteTodo = (id) => { 
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // todo.id is not matching the the current id
  };

 // The function finds the todo with the matching id and flips its completed value (true ↔ false). All other todos stay the same.
 
const toggleCompelete = (id) => {
  setTodos((prev) =>
    prev.map((prevTodo) =>  prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)) 
}

// loads the todos from localStorage

useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos")) // without json.parse the array will be in string and the usestate will not work or manipulate the todos
  if (todos) {
    setTodos(todos)
  }
}, [])
 
// The second handles saving data whenever the todos are updated.
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
} , [todos])


  return (
    <TodoProvider value={{ todos , addtodo, updateTodo, deleteTodo  , toggleCompelete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
