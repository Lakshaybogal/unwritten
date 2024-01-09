import './globals.css'
import Navbar from './components/Navbar/page.jsx';
import Footer from './components/Footer/page.jsx';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'UnWritten',
  description: 'Jai Siya Ram',
}

export default function Layout({ children }) {
  return (

    <main className={inter.className}>
      <div className='flex flex-col justify-center items-center p-5'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>

  )
}
