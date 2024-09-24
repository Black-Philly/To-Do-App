import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../actions';

function Task() {
    const dispatch = useDispatch();
    const inputRef = useRef(null)


    const addNewTask = () => {
        const task = inputRef.current.value.trim();
        if(!task !== ""){
            dispatch(addToDo(task));
            inputRef.current.value = ""
        }
    };


  return (
    <div>
        <div>
            <input 
                type='text'
                placeholder='Add tasks here'
                ref={inputRef}
                className=''/>
            <button onClick={addNewTask}>Add Task</button>
        </div>
    </div>
    
  )
}

export default Task