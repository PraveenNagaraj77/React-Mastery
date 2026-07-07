import React from 'react'
import { memo } from 'react';

const TodoItem = ({todo,onDelete}) => {
    console.log(`${todo.text} Rendered ` );
  return (
    <div>
        <h3>{todo.text}</h3>
        <button onClick={()=>onDelete(todo.id)}>
            Delete
        </button>
        <hr />
    </div>

  )
}

export default memo(TodoItem)