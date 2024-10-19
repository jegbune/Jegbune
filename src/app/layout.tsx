import './globals.css';
import Nav from "./components/(Layout Component)/Nav";
import Footer from "./components/(Layout Component)/Footer";
import { Metadata } from 'next';

export const metadata:Metadata = {
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
}) {
  return (
    <html lang="en">
      <body className='bg-inherit'>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  )
}
