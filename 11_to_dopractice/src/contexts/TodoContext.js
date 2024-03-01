import { useContext,createContext } from "react";


export const TodoContext=createContext({
    todos: [
             {
                id:1,
                todo:"jaduu",
                completed:false
             }
          ],
    addContext:(todo)=>{},
    deleteContext:(id)=>{},
    updateContext:(id,todo)=>{},
    toggleComplete:(id)=>{}
    
})
export const TodoProvider=TodoContext.Provider;
export const useTodo=()=>{
    return useContext(TodoContext);
}