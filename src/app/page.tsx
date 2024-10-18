import Image from "next/image";
import profileImg from './assets/profile.png'
import About from "./about";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row pt-12 md:p-24 px-8 gap-8">
        <div className="flex-1">
          <h1 className="font-Montserrat text-5xl md:text-6xl font-extrabold leading-normal bg-clip-text text-transparent bg-text-gradient">Welcome to My PortFolio</h1>
          <p className="py-4 md:w-3/4">Hi there! I’m Jeremiah Ikechukwu Egbune, a frontend developer and electrical engineer with a passion for creating dynamic web applications and solving complex technical problems. From coding responsive websites to maintaining critical infrastructure systems, I combine creativity and engineering expertise to deliver efficient, innovative solutions.</p>
        </div>

        <div className="flex-1">
          <div className="rounded-full w-96 h-96 border-2 border-green-500 overflow-hidden">
            <Image src={profileImg} className="object-cover w-full h-full" alt="dev" loading="lazy" />
          </div>

        </div>
      </div>
    <About />
    </div>
  );
}
