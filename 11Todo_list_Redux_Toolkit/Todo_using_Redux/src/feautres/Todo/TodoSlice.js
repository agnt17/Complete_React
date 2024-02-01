import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "Hello World"}];
}

// initial state is a simple object that only represents the initial state of the TODO list.
// reducers are use to update the store.

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo) // this thing is being put on todo 
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload
            })
        }
    }
})