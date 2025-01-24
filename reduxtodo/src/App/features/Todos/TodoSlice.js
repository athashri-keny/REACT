import {createSlice , nanoid } from '@reduxjs/toolkit'



// configuring the initial stage of the store of the redux
const initialState = {
    todos: [{
        id: 1 ,
        text: "hello word",
         }]
        
}
 
// creating slice (features) for the app
export const TodoSlice = createSlice({
    name: 'todos',
    initialState, // adding the initailState of the todo

    // state means the current situation 
    // action is used when we need to add something

    //reducers are used to add features to the app
    reducers: {
        // creating a todo
        addTodo: (state , action) => {
            const todo = 
                {
                    id: nanoid(), // used for unique id 
                    text: action.payload // decalring the value of the todo
                }
            
                // updating the state 
                state.todos.push(todo)
        },
  
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((singleTodo) => singleTodo.id !== action.payload);
        },


        updateTodo: (state, action) => {
            state.todos = state.todos.map((singleTodo) =>
              singleTodo.id === action.payload.id
                ? { singleTodo, text: action.payload.text } // Update the text if ids match
                : singleTodo // Otherwise, keep the todo unchanged
            );
          },
    }
})

export const {addTodo , removeTodo , updateTodo} = TodoSlice.actions

export default TodoSlice.reducer