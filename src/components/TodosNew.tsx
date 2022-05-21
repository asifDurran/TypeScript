import React, { useState, useRef } from "react";

const TodoNew = () => {
    const inputRef = useRef<HTMLInputElement | null >(null);
    const [todosList, setTodosList] = useState<string[]>([]);

  const addTodo = () => {
    if(inputRef.current){
        const todo = inputRef.current.value
        setTodosList([...todosList, todo])
        inputRef.current.value = ""

    }
  
    }
   
  return (
    <div>
        <input type="text" placeholder="Type todo .." 
        ref={inputRef}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {
                todosList.map((todo, index) => {
                    return <li key={index}>{todo}</li>
                }
                )
            }  
        </ul>

    </div>
  )
}

export default TodoNew