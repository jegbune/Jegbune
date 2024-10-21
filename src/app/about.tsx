import { careers, data } from "./data/data"



const About = () => {
  return (
    <div id='about' className='flex flex-col gap-8 bg-white p-8 md:p-16'>
      <h1 className='font-Montserrat text-3xl text-center font-bold uppercase text-green-500 md:py-8'>About me</h1>
      
      <div className="flex flex-col text-black gap-12 md:flex-row">    
        <div className="flex md:w-[40%] text-center flex-col justify-center border-t-2 border-gray-100  items-center text-2xl shadow-green-300 shadow-md rounded-xl md:p-10 p-6">
        {data}
          </div>
      <div className="flex md:w-[55%] text-center flex-col md:flex-row gap-12">
        {
          careers && careers.length >0 ?
          careers.map((career, index) => (
        <div key ={index} className="flex flex-col justify-between flex-1 border-t-2 border-gray-100 shadow-green-300 shadow-md rounded-xl md:p-10 p-6">
          <h1 className='text-3xl py-4 font-bold'>{career.title}</h1>
          <div className="text-xl font-light">{career.desc}</div>
              <div className="flex flex-wrap gap-4 p-4 justify-center items-center text-sm">
                {career.certs.map( (cert, index) => (
                  <button key={index} className='btn'>{cert}</button>
                ))}
              </div>
        </div>

          ))
          : null        }
      </div>
      </div>
      </div>
  )
}

export default About