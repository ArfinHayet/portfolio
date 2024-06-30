import React, { useState } from 'react'
import { styles } from '../style'
import { Link } from 'react-router-dom'
import { logo, menu, close } from '../assets';
const Navbar = () => {

  const [active,setActive] = useState('')
  return (
    <nav className={`${styles.paddingX} w-full flex-item-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
         <Link to="/"
               className="flex item-center gap-2"
               onClick={()=>{
                setActive("")
                window.scrollTo(0,0);
               }}
         >
          <img src={logo} className="w-9 h-9 object-contain"/>
          <p className="text-white text-[-18px] font-bold cursor-pointer">
            Arfin <span> | Software Developer</span>
          </p>
         </Link>
         <p className="text-red-500">asdas</p>
      </div>
    </nav>
  )
}

export default Navbar