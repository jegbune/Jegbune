import React from 'react'
import Image from 'next/image'
import { projectData } from './data/projectData'

const Projects = () => {
  return (
    <div id='project' className='flex flex-col shadow-lg lg:px-12 lg:py-12 px-8 pb-8'>
      <h1 className="py-8 text-3xl text-center font-bold">Projects</h1>

      <div className='flex flex-col md:flex-row flex-wrap  items-center justify-between md:justify-around gap-y-8 text-black'>

        {projectData.map((data, index) => (
          <div key={index} className='max-w-[300px] 2xl:max-w-[400px] shadow-lg rounded-2xl border-t-2 border-gray-300 overflow-hidden'>
            <div className='p-0'>
              <Image src={data.img} className='w-full object-cover h-full' alt='profileImage' />
            </div>
            <div className='p-4 bg-white'>
              <h2 className='text-2xl font-semibold'>{data.title}</h2>
              <p >{data.desc}</p>
            </div>
          </div>

        ))}
      </div>

    </div>
  )
}

export default Projects
