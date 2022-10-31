import React from 'react'

const Task = ({data}) => {
  console.log("data from task",data)
  return (
    <div>
        <ul>
            <li>fetch water</li>
            <li>Buy milk</li>
            <li>Buy shoes</li>
        </ul>
    </div>
  )
}

export default Task