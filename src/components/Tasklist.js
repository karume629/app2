import React from 'react'
import Task from './Task'

const Tasklist = ({data}) => {
  console.log("data from tasklist",data)
  return (
    <div>
      <ul>
        {
          data.map(item => {
            return <Task task={item.task} id={item.id} />
          })
        }
      </ul>

    </div>
  )
}

export default Tasklist