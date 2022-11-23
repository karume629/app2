import React, { useRef, useState } from 'react'

const TaskForm = ({newData}) => {
  const [task, setTask] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    newData(task)
  }
    
  return (
    <div class="addtask" >
      <form onSubmit={handleSubmit}>
      <input type="text" name="task" value={task} onChange={e=>setTask(e.target.value)} placeholder="Add task"/>
      <input type="submit" value="Add Task" />
      </form>
    </div>
  )
}

export default TaskForm