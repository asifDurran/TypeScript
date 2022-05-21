import React, { useState } from "react";
// control component's state
const Todo = () => {
    const [todos, setTodos] = useState("");
    const [todosList, setTodosList] = useState<string[]>([]);

  const addTodo = () => {
    setTodosList([...todosList, todos]);
    setTodos("");
    }
    const handelChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodos(e.target.value);
    }
  return (
    <div>
        <input type="text" placeholder="Type todo .." 
        value={todos}
        onChange={handelChange}
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

export default Todo