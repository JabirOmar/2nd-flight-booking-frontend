import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavContext } from '../App'
import classNames from 'classnames'
import {FaHome} from 'react-icons/fa'
import {BsFillInfoCircleFill, BsFillBookmarkCheckFill} from 'react-icons/bs'
import {RiContactsFill} from 'react-icons/ri'
import {AiOutlineLogin,AiOutlineSearch} from 'react-icons/ai'
import {FaPaperPlane} from 'react-icons/fa'

const NavBar = () => {

    const iswide = React.useContext(NavContext)

  return (
    <nav className={ classNames( 'w-[250px] h-full flex flex-col gap-4  ', {'w-[50px]':iswide} ) }>
      
      {/* Logo */}
      <div className=' bg-[#141414] h-[70px] flex items-center pl-[10px] '>
        
        <span className={ classNames('text-xl font-semibold text-amber-300 ', {'hidden':iswide})} >SkyScape</span>
      </div>

      {/* Links */}
      <div className={ classNames('h-full pl-[15px] bg-[#141414] mb-1 pt-6', {'pl-[9px]':iswide})}>
        <ul className=' flex flex-col gap-3 '>
            <NavLink to='./' className={ classNames('h-[40px] rounded-l-3xl flex items-center gap-3 pl-[20px]  hover:bg-[#242424]', {'pl-[9.6px]':iswide})} >
                <FaHome className=' nav-icon text-white'/>
                <span className={ classNames(' text-white',{'hidden':iswide} ) }>Home</span>
            </NavLink>
            <NavLink to='./explore' className={ classNames('h-[40px] rounded-l-3xl flex items-center gap-3 pl-[20px]  hover:bg-[#242424]', {'pl-[9.6px]':iswide})} >
                <AiOutlineSearch className=' nav-icon text-white text-xl'/>
                <span className={ classNames(' text-white',{'hidden':iswide} ) }>Explore</span>
            </NavLink>
            <NavLink to='./service' className={ classNames('h-[40px] rounded-l-3xl flex items-center gap-3 pl-[20px]  hover:bg-[#242424]', {'pl-[9.6px]':iswide})} >
                <FaPaperPlane className=' nav-icon text-white'/>
                <span className={ classNames(' text-white',{'hidden':iswide} ) }>Service</span>
            </NavLink>
            <NavLink to='./about' className={ classNames('h-[40px] rounded-l-3xl flex items-center gap-3 pl-[20px]  hover:bg-[#242424]', {'pl-[9.6px]':iswide})} >
                <BsFillInfoCircleFill className=' nav-icon text-white'/>
                <span className={ classNames(' text-white',{'hidden':iswide} ) }>About</span>
            </NavLink>
            <NavLink to='./book' className={ classNames('h-[40px] rounded-l-3xl flex items-center gap-3 pl-[20px]  hover:bg-[#242424]', {'pl-[9.6px]':iswide})} >
                <BsFillBookmarkCheckFill className=' nav-icon text-white'/>
                <span className={ classNames(' text-white',{'hidden':iswide} ) }>Book</span>
            </NavLink>
            <NavLink to='./contact' className={ classNames('h-[40px] rounded-l-3xl flex items-center gap-3 pl-[20px]  hover:bg-[#242424]', {'pl-[9.6px]':iswide})} >
                <RiContactsFill className=' nav-icon text-white'/>
                <span className={ classNames(' text-white',{'hidden':iswide} ) }>Contact</span>
            </NavLink>
            <NavLink to='./login' className={ classNames('h-[40px] rounded-l-3xl flex items-center gap-3 pl-[20px]  hover:bg-[#242424]', {'pl-[9.6px]':iswide})} >
                <AiOutlineLogin className=' nav-icon text-white'/>
                <span className={ classNames(' text-white',{'hidden':iswide} ) }>Login</span>
            </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
