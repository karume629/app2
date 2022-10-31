import React from 'react'
import Task from './Task'

const Tasklist = ({data}) => {
  console.log("data from tasklist",data)
  return (
    <div>
      <Task data={data}/>

    </div>
  )
}

export default Tasklist