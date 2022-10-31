import React, { useState } from 'react'

const TaskForm = () => {
  const [task, setTask]= useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log (task)
    setTask("")
  }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="task" value={task} onChange={e=>setTask(e.target.value)} placeholder="Add task"/>
      <input type="submit" value="Add Task" />
      </form>
    </div>
  )
}

export default TaskForm