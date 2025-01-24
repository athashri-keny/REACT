import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../App/features/Todos/TodoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos); // extracting the values of todos from the store
  const dispatch = useDispatch();

  const [editTodo, seteditTodo] = useState(null); // ID of the todo being edited
  const [updatedTodo, setUpdatedTodo] = useState(''); // Temporary updated text

  const handleUpdateclick = (id, currentText) => {
    seteditTodo(id); // Set the ID of the todo being edited
    setUpdatedTodo(currentText); // Set the current text in the input field
  };


  const handleUpdateSubmit = (id) => {

      dispatch(updateTodo({ id, text: updatedTodo })); // Dispatch the update action with new text
    seteditTodo(null); // Exit edit mode
    setUpdatedTodo(''); // Clear the input field
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((singletodo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={singletodo.id}
          >
            {editTodo === singletodo.id ? (
              // Show input if editing this todo
              <input
                type="text"
                value={updatedTodo}
                onChange={(e) => setUpdatedTodo(e.target.value)}
                className="text-black px-2 py-1 rounded"
              />
            ) : (
              // Show text if not editing
              <div className="text-white">{singletodo.text}</div>
            )}

            <div className="flex items-center">
              {editTodo === singletodo.id ? (
                <button
                  onClick={() => handleUpdateSubmit(singletodo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 mx-2 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleUpdateclick(singletodo.id, singletodo.text)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 mx-2 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  Update
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(singletodo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
