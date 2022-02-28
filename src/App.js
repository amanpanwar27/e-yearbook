import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/AuthenticationPages/Login'
import Profile from "./pages/Profile/Profile";

const App = () => {
  return(
    <BrowserRouter path='/'>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App