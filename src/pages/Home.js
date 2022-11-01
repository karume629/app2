import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TaskForm from '../components/TaskForm'
import Tasklist from '../components/Tasklist'
import { BASE_URL } from '../constant/constant'



const Home = () => {
const [data, setData] = useState([])
useEffect(()=>{
  fetch(`${BASE_URL}/tasks`)
  .then((response) => response.json())
  .then((data) => setData(data));
},[])
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