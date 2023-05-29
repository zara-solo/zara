// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import HomeCarousel from './components/HomeCarousel'
// import AllProducts from './components/AllProducts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      
      <HomeCarousel />

    </div>
    </>
  )
}
