import React, { useState } from 'react'

const TaskForm = () => {
  const [task, setTask]= useState('')
  return (
    <div>
      <form>
      <input type="text" name="task" value={task} onChange={e=>setTask(e.target.value)} placeholder="Add task"/>
      <input type="submit" />
      </form>
    </div>
  )
}

export default TaskForm