import React from 'react'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import {Routes,Route} from "react-router-dom"
function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Routers
