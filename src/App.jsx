import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import BuildResume from './views/Build-Resume/Build-Resume'
import Login from './views/Login/Login'
import ChooseT from './views/Choose-T/Choose-T'
import FresherT1 from './components/Templates/Fresher-T1'
import FresherT2 from './components/Templates/Fresher-T2'
import ExperiencedT1 from './components/Templates/Experienced-T1'

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/build-resume' element={<BuildResume />} />
          <Route path='/ChooseT' element={<ChooseT />} />
          <Route path="/template/fresher-1" element={<FresherT1 />} />
          <Route path='/template/fresher-2' element={<FresherT2 />} />
          <Route path='/template/experienced-1' element={<ExperiencedT1 />} />
        </Routes>
        

      <Footer />
    </>
  )
}

export default App