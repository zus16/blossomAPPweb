import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App