import React from 'react'
import { SocialList } from './Nav' 

const Footer = () => {
  return (
    <div className='flex justify-between border-2 border-gray-100  items-center w-full py-10 md:px-16 px-8 bg-white font-Montserrat font-semibold'>
      <div className='md:text-2xl'>&copy; 2024 Jegbune</div>
      <div className='md:flex gap-4 md:text-2xl'>
        Follow me on <br className='md:hidden' />Social Media
        <SocialList />
      </div>
    </div>
  )
}

export default Footer
