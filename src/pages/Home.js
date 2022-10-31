import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TaskForm from '../components/TaskForm'
import Tasklist from '../components/Tasklist'


const Home = () => {
  return (
    <div>
      <Header />
      <TaskForm />
      <Tasklist />
      <Footer />
    </div>
  )
}

export default Home