import React, { useCallback, useState } from 'react'
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [todos,setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice Hooks" },
  ]);

  const [input,setInput] = useState("");

  function addTodo(){
    if(!input.trim()) return;

    setTodos((prev)=>[
        ...prev,
        {
            id:Date.now(),
            text:input,
        },
    ]);

    setInput("");
  }

  const deleteTodo = useCallback((id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id !==id))
  },[])

  console.log("Todo App Rendered");


  return (
    <div>
        <h1>Todo App</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
        <hr />
        {
            todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} onDelete = {deleteTodo} />
            ))
        }
    </div>
  )
}

export default TodoApp