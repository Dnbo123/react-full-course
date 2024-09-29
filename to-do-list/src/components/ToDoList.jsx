import React, {useState} from 'react'

function ToDoList() {
    const [task, setTask] = useState([""]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask () {
      //Adding new task and preventing empty task addition
     if (newTask.trim() !=="") {
      setTask(t => [...task, newTask]);
      setNewTask("");
     } 
    }
    function deleteTask (index) {
      const updatedTask = task.filter((_, i) => i !== index);
      setTask(updatedTask);
    }
    function moveTaskUp (index) {
        //An if statement to prevent moving up the first task
        if(index > 0) {
         // creating an array for the tasks
         const updatedTask = [...task];
         // Array destructuring formula
         [updatedTask[index], updatedTask[index - 1]] = 
         [updatedTask[index - 1], updatedTask[index]],
         setTask(updatedTask);
        }
    }
    function moveTaskDown (index) {
        //An if statement to prevent moving down the first task
        if(index < task.length - 1) {
         // creating an array for the tasks
         const updatedTask = [...task];
         // Array destructuring formula
         [updatedTask[index], updatedTask[index + 1]] = 
         [updatedTask[index + 1], updatedTask[index]],
         setTask(updatedTask);
        }  
    }



  return (
       <div className="to-do-list">
        <h1>My To-Do List</h1>

         <div>
            <input type="text"
            placeholder="Enter task..."
            value={newTask}
            onChange={handleInputChange}/>
        <button 
        className="add-button"
       onClick={addTask}>
           Add
        </button>
         </div>
         <ol>
            {task.map((task, index)=>
            <li key={index}>
             <span className="text">{task}</span>
             <button 
             className="delete-button"
             onClick={() => deleteTask(index)}>
                Delete
             </button>
             <button 
             className="move-button"
             onClick={() => moveTaskUp(index)}>
                👆
             </button>
             <button 
             className="move-button"
             onClick={() => moveTaskDown(index)}>
                👇
             </button>
            </li>
            )}
         </ol>

       </div>
  )
}

export default ToDoList;