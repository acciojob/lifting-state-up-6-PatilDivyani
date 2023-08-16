import React,{useState} from "react";
import ChildComponent from "./ChildComponent";


const ParentComponent = () => {
   const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", state: false },
    { id: 2, text: "Build a React app", state: false },
    { id: 3, text: "Deploy the React app", state: false },
   ])


   return(
        <div>
            <h1>Parent Component</h1>
            <ChildComponent todos={todos} />
        </div>
   )


}

export default ParentComponent