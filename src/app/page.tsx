import Image from "next/image";
import profileImg from './assets/profile.png'
import About from "./about";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row py-12 md:p-16 px-8 gap-8">
        <div className="flex-1 md:p-12">
          <h1 className="font-Montserrat  text-4xl md:text-4xl lg:text-7xl font-extrabold leading-normal bg-clip-text text-transparent bg-text-gradient">Welcome to My PortFolio</h1>
          <p className="py-4 md:w-full text-gray-500">Hi there! I’m Jeremiah Ikechukwu Egbune, a frontend developer and electrical engineer with a passion for creating dynamic web applications and solving complex technical problems. From coding responsive websites to maintaining critical infrastructure systems, I combine creativity and engineering expertise to deliver efficient, innovative solutions.</p>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <div className="rounded-full md:w-full md:h-full lg:w-96 lg:h-96 border-2 border-green-500 overflow-hidden">
            <Image src={profileImg} className="object-cover w-full h-full" alt="dev" loading="lazy" />
          </div>

        </div>
      </div>
    <About />
    </div>
  );
}
