import { useState,useEffect  } from 'react'
import { TodoProvider } from './Context/TodoContext'
import Form from './Components/Form';
import Item from './Components/Items';

function App() {

  const [todos, setTodos] = useState([]); // Array of all todos list
  // ADD TODOS
  const addTodo = (todo)=>{
      setTodos((prev)=> 
        [{id: Date.now(), ...todo}, ...prev]
    )
  }
  // UPDATE THE TODOS
  const updateTodo = (id,todo)=>{
    setTodos((prev)=> 
      prev.map((eachVal)=> 
        (eachVal.id === id ? todo : eachVal))
   )   
  }
  // DELETE THE TODOS
  const deleteTodo = (id) => {
    setTodos((prev)=>
       prev.filter((prevTodos)=> (prevTodos.id !== id))
   )
  }
  // COMPLETE TOGGLE CHECKBOX FUNCTION
  const toggleComplete = (id)=>{
    setTodos((prev)=>
    prev.map((prevTodos)=> prevTodos.id === id ? {...prevTodos, completed: !prevTodos.completed} : prevTodos ))
  }
  
  // USEEFFECT HOOK FOR GETTING THE ITEMS
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  // USEEFFECT HOOK FOR SETTING THE ITEMS
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  
  return (
    <>
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#1c536c] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-5xl font-bold text-center mb-8 mt-2">TODOS LIST</h1>
                    <div className="mb-4">
                        <Form/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                        <div key={todo.id}
                        className='w-full'>
                          <Item todo={todo}/>                                                                                                                                                                                                                                                                                                                                                                                                
                        </div> 
                      ))}
                    </div>
                </div>
            </div>
     </TodoProvider>
    </>
  )
}

export default App
