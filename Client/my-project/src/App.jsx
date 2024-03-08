import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
 const[data, setData] = useState([])

useEffect(() => {
  axios.get("http://localhost:4001/posts").then((response) => {
  console.log(response.data)
  });
}, [])
  return (
    <>
      <div className='text-red-500'>
        hello
       </div>
    </>
  )
}

export default App
