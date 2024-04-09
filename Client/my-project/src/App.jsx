import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import User from './Components/User';
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  const[data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4001/posts").then((response) => {
    console.log(response.data)
    setData(response.data)
    });
  }, [])

  return (
    <>
       <Routes>

          <Route path='/' element={ <Home data={data} />} />
          <Route path='/user' element={ <User/>} />
          <Route path='/signup' element={ <Signup />} />
           <Route path='/login' element={<Login />} />
        </Routes>
    </>
  )
}

export default App
