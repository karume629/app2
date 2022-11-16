import React, { useEffect, useState } from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import "../src/App.css"

const App = () => {
  const [data, setData] = useState([])
  console.log(data);
  const url = "http://localhost:3000/items/"
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(items => setData(items))
  },[])
  
  const newData = (item) => {
    console.log(item);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        task: item
      })
    })
    .then(res => res.json())
    .then(todo => setData([...data, todo]))
  }
  return (
    <Routes>
          <Route exact path="/" element = { <Home data={data} newData={newData} />}/>
          <Route  path="/about" element = { <About />}/>
          <Route  path="/contact" element = { <Contact />}/>
          
    </Routes>
  )
}

export default App