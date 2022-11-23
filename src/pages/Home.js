import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TaskForm from '../components/TaskForm'
import Tasklist from '../components/Tasklist'
import { BASE_URL } from '../constant/constant'



const Home = ({data, newData}) => {

  return (
    <div className='abc'>
      <div className='xyz'>
        <Header />
        <TaskForm newData={newData} />
        <Tasklist data={data} />
        <Footer />
      </div>
    </div>
  )
}

export default Home