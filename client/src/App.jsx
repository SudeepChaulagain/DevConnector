import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css'
import axios from 'axios'

function App() {

  useEffect(()=>{
    const getCsrfToken = async () =>{

      const {data} = await axios.get('/api/csrf-token')
      
      axios.defaults.headers['X-CSRF-Token'] = data.csrfToken

    }
    getCsrfToken()

  }, [])
  return (
    <> 
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>

    </>
   
  )
}

export default App
