"use client"
import Link from 'next/link'
import SocialList from './social'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

interface NavProps{
  bgcolor: string;
  textColor: string;
}


const Nav = ({bgcolor, textColor}: NavProps) => {

  const NavList = () => (
    <>
      <Link href='#about' className={`${textColor} w-full md:border-b-0 border-b-2 text-center p-2 text-lg`}>
        About
      </Link>
      <Link href='#project' className={`${textColor} w-full md:border-b-0 border-b-2 text-center p-2 text-lg`}>
        Projects
      </Link>
      <Link href='/' className={`${textColor} w-full md:border-b-0 border-b-2 text-center p-2 text-lg`}>
        Resume
      </Link>
    </>
  )
  const [toggleMenu, setToggleMenu] = useState(false)



  return (
    <div className={`${bgcolor} flex justify-between fixed top-0 md:relative items-center w-full py-6 px-12 shadow-md font-Montserrat `}>
      <Link href='/'>
        <div className='flex md:gap-4 gap-8 justify-center items-center text-xl font-bold cursor-pointer'>
          <p className=' flex justify-center items-center w-12 h-12 border-4 border-green-500 text-green-500 rounded-full text-3xl'>J</p>
          <h1 className='text-green-500'>Jeremiah Egbune</h1>
        </div>
      </Link>

      <div className={`hidden md:flex gap-16 font-semibold ${textColor}`}>
        <NavList />

      </div>
      <div>
        <button className='hidden md:flex btn'>Contact</button>
      </div>
      <div className="md:hidden">
        <AiOutlineMenu className='text-3xl cursor-pointer text-green-500' onClick={() => setToggleMenu(prev => !prev)} />
        {toggleMenu ? <div className={`absolute top-28 shadow-md right-4 w-3/4 ${bgcolor} p-4 flex items-center flex-col gap-4 ${textColor} font-semibold `}>
          <NavList />
          <SocialList />
        </div> : null}
      </div>
    </div>
  )
}

export default Nav
