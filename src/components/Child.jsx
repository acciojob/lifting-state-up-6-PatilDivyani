import React, {useState} from 'react'
const ChildComponent = ({ todos, setTask }) => {
    // const [todoId, setTodoId] = useState("")
    // console.log(todoId)

    return(
        <div>
            
            <ul>
                <h1>Child Component</h1>
                {todos.map((todo) => (
                    <li>
                       
                        {todo.text}
                        <button onClick={()=>setTask(todo)}>Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default ChildComponent