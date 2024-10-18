import { careers, data } from './data'



const About = () => {
  return (
    <div id='about' className='flex flex-col gap-8 bg-white p-8'>
      <h1 className='font-Montserrat text-3xl text-center font-bold uppercase text-green-500 md:py-8'>About me</h1>
        <div className="flex flex-col justify-between flex-1 border-t-2 border-gray-100 shadow-green-300 shadow-md rounded-xl p-10">
        {data}
          </div>
      <div className="flex flex-col md:flex-row gap-12">
        {
          careers.map((career, index) => (
        <div key ={index} className="flex flex-col justify-between flex-1 border-t-2 border-gray-100 shadow-green-300 shadow-md rounded-xl p-10">
          <h1 className='text-3xl font-bold'>{career.title}</h1>
          <div className="text-xl">{career.desc}</div>
              <div className="flex gap-4 justify-between items-center text-sm">
                {career.certs.map( (cert, index) => (
                  <button key={index} className='btn'>{cert}</button>
                ))}
              </div>
        </div>

          ))
        }

        
      </div>
      </div>
  )
}

export default About
