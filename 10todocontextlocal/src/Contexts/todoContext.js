import {createContext , useContext} from "react"


// taking what is required for todos in array
export const TodoContext = createContext({
    todos: [
        {
            id: 0,
            todo: "todo msg",
            completed: false,
        }
    ], 
    
    addtodo: (todo) => {}, 
    updateTodo: (id , todo) => {},
    deleteTodo: (id) => {},
    toggleCompelete: (id) => {}

})

export const UseTodo = () => {
    return useContext(TodoContext) // when you use useContext always give which context you talking about
}


export const TodoProvider = TodoContext.Provider // this provider will warp 