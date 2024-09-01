import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Context/TodoContext';

function Form() {
    const [todo, setTodo] = useState(" ") //individual Todo
    const {addTodo} = useTodo()

    const addItems = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo('')
    }
    return (
        <form  className="flex"
               onSubmit={addItems}>
            <input
                type="text"
                placeholder='Write a task'
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                className="w-full text-black border border-black/10 rounded-lg px-3 outline-none duration-150 bg-[#486a7c] py-1.5"
            />
            <button type="submit" className="rounded-lg px-3 py-1 ml-2 bg-[#131c22] text-white shrink-0">
                Add Task
            </button>
        </form>
    );
}


export default Form;