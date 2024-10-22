'use client'

import React, { useEffect, useState } from 'react'
import SocialList from './social'
import { AiFillBulb } from 'react-icons/ai'

const Footer = ({ bgcolor, textColor }: { bgcolor: string, textColor: string }) => {
  
  const [textcolor, setTextColor] = useState('text-black')
  const [bgColor, setBgColor] = useState('bg-background-gradient')


  const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value}; path=/`;
  }
  
  const ThemeColor = () => {
    const newBgColor = bgColor === 'bg-background-gradient' ? 'bg-black' : 'bg-background-gradient';
    const newTextColor = textcolor === 'text-black' ? 'text-white' : 'text-black';

    setBgColor(newBgColor);
    setTextColor(newTextColor);

    setCookie('theme', newBgColor);
    setCookie('textColor', newTextColor);
  }

  useEffect(() => {
    ThemeColor();
  }, [ThemeColor])

  return (
    <div className={`${bgcolor} flex justify-between border-2 items-center w-full py-10 md:px-16 px-8 font-Montserrat font-semibold ${textColor}`}>

      {/* change background theme */}
      <div className='flex justify-center items-center text-3xl font-bold shadow-md w-12 h-12 rounded-full fixed bg-white left-4 bottom-44 text-black' onClick={ThemeColor}><AiFillBulb /></div>

      <div className='md:text-2xl'>&copy; 2024 Jegbune</div>

      <div className='md:flex gap-4 md:text-2xl'>
        Follow me on <br className='md:hidden' />Social Media
        <SocialList />
      </div>
    </div>
  )
}

export default Footer
