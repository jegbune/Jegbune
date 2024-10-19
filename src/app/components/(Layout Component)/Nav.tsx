"use client"

import Link from 'next/link'
import { useState } from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineFacebook, AiOutlineMenu } from 'react-icons/ai'


export const SocialList = () => (
  <div className='flex items-center gap-4'>
    <Link href='https://github.com/jegbune' target='_blank'><AiFillGithub className='text-3xl text-green-500 rounded-full' /></Link>
    <Link href='https://www.linkedin.com/in/jeremiah-ikechukwu-egbune-98b0a1178/' target='_blank'><AiFillLinkedin className='text-3xl text-green-500 rounded-full' /></Link>
    <Link href='https://www.facebook.com/jeremiah.egbune' target='_blank'><AiFillFacebook className='text-3xl text-green-600 rounded-full' /></Link>
  </div>
)

const Nav = () => {

  const NavList = () => (
    <>
      <Link href='#about' className='w-full md:border-b-0 border-b-2 text-center p-2 text-lg'>
        About
      </Link>
      <Link href='#projects' className='w-full md:border-b-0 border-b-2 text-center p-2 text-lg'>
        Projects
      </Link>
      <Link href='/' className='w-full md:border-b-0 border-b-2 text-center p-2 text-lg'>
        Resume
      </Link>
    </>
  )
  const [toggleMenu, setToggleMenu] = useState(false)





  return (
    <div className='flex  justify-between  items-center w-full py-6 px-12 bg-white shadow-md font-Montserrat'>
      <Link href='/'>
        <div className='flex md:gap-4 gap-8 justify-center items-center text-xl font-bold cursor-pointer'>
          <p className=' flex justify-center items-center w-12 h-12 border-4 border-green-500 text-green-500 rounded-full text-3xl'>J</p>
          <h1 className='text-green-500'>Jeremiah Egbune</h1>
        </div>
      </Link>

      <div className='hidden md:flex gap-16 font-semibold'>
        <NavList />

      </div>
      <div>
        <button className='hidden md:flex btn'>Contact</button>
      </div>
      <div className="md:hidden">
        <AiOutlineMenu className='text-3xl cursor-pointer text-green-500' onClick={() => setToggleMenu(prev => !prev)} />
        {toggleMenu ? <div className='absolute top-28 shadow-md right-4 w-3/4 bg-white p-4 flex items-center flex-col gap-4 font-semibold '>
          <NavList />
          <SocialList />
        </div> : null}
      </div>
    </div>
  )
}

export default Nav
