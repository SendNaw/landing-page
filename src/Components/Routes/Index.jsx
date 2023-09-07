import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
function Index() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
       
    </Routes>
    </>
  )
}

export default Index