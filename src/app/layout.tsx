import './globals.css';
import Nav from "./components/(Layout Component)/Nav";
import Footer from "./components/(Layout Component)/Footer";
import { Metadata } from 'next';
import Link from 'next/link';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Portfolio | Jeremiah Egbune',
    template: '%s | Jeremiah Egbune'
  },
  description: 'Frontend NextJS Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){

const cookieStore =  cookies();
const themeCookie = cookieStore.get('theme')
const textcolor = cookieStore.get('textColor')

const bgcolor = themeCookie?.value || 'bg-background-gradient';
const textColor = textcolor?.value || 'text-black'

  return (
    <html lang="en">
      <body className={bgcolor}>
        <Nav bgcolor={bgcolor} textColor= {textColor} />
        {children}

        {/* move page to the top */}
        <div className='flex justify-center items-center text-3xl font-bold shadow-md w-12 h-12 rounded-full fixed bg-white right-4 bottom-44 text-black cursor-pointer'><Link href='/'><AiOutlineArrowUp /></Link></div>
        
        
        <Footer bgcolor={bgcolor} textColor= {textColor} />
      </body>
    </html>
  )
}
