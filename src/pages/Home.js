import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TaskForm from '../components/TaskForm'
import Tasklist from '../components/Tasklist'

const data = [
  {id:1,task:"fetch water"},
  {id:1,task:"Boil Water"},
  {id:1,task:"Buy shoes"},
]
console.log("data from home",data)
const Home = () => {
  return (
    <div>
      <Header />
      <TaskForm />
      <Tasklist data={data} />
      <Footer />
    </div>
  )
}

export default Home