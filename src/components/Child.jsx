import React from 'react'
const ChildComponent = ({ todos }) => {


    return(
        <div>
            
            <ul>
                <h1>Child Component</h1>
                {todos.map((todo) => (
                    <li>
                       
                        {todo.text}
                        <button onClick={}>Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    )


}

export default ChildComponent