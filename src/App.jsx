import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import Explore from './components/Explore'
import {RiMenuFoldLine} from 'react-icons/ri'
import classNames from 'classnames'
import Service from './components/Service'
import About from './components/About'
import Book from './components/Book'
import Contact from './components/Contact'
import Login from './components/Login'

export const NavContext = React.createContext()

function App() {

  const [iswide, setIsWide] = useState(false)

  const handleNavBar = () => {
    setIsWide(!iswide)
  }
  return (
    <div className=" fixed w-screen h-screen bg-[#242424] p-3 flex gap-3 ">
      <NavContext.Provider value={iswide}>
        <div className=' relative'>
          <NavBar />
          <RiMenuFoldLine className={ classNames('absolute top-[20px] text-2xl right-[10px] cursor-pointer text-amber-300', { 'rotate-180 ': iswide}) } onClick={handleNavBar} />
        </div>
  
        <section className={ classNames('w-[calc(100%-224px)] bg-[#141414]', {'w-[calc(100%-60px)]':iswide})} >
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/service' element={<Service />} />
            <Route path='/about' element={<About />} />
            <Route path='/book' element={<Book />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </section>
      </NavContext.Provider>
    </div>
  )
}

export default App
