import React from 'react'
import Header from '@/app/components/Header/header.jsx'
import { Button } from '@/app/components/ui/button.jsx'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '@/app/components/Header/menu.jsx'
import Hero from '@/app/components/HeroSection/Hero'
import PostsList from '@/app/components/PostList'
import { NewsAndUpdate } from '@/app/components/News/NewsAndUpdate'
import Welcome from './components/Welcome/Welcome'

export default function page() {
  return (
    <>
    <header className='fixed bg-white top-0 z-10 flex items-center justify-between w-[100%] h-[115px] border-b-[1px] border-[#E2E4F8]'>
    <div className='flex items-center justify-between w-[90%] mx-auto ' >
    <Link href='/'><div className='flex items-center'>
    <Image
      src="/image/logo.png"
      width={82}
      height={82}
      alt="dlfns-logo"
    /> 
      <h1 className='text-[#222B9A] font-bold hidden lg:flex'>Deer Lake First Nation School</h1>
    </div></Link>
    <div className='hidden md:flex'>
    <Header/>
    </div>
    <div className='hidden md:flex'>
      <Link href="/signin"><Button className="bg-[#222B9A] px-[2rem]">Log In</Button></Link>
    </div>

    <div className='md:hidden'>
      <Menu/>
    </div>


    </div>
    </header>

    {/* Hero Section */}
    <section className='w-[100%] md:w-[90%] mx-auto'>
    <Hero/>
    </section>
    {/* Hero Section */}

 {/* News Section */}
 <section className='w-[90%] mx-auto pb-[4rem]'>
      <Welcome/>
    </section>
 {/* News Section */}



 {/* News Section */}
    <section className='w-[90%] mx-auto pb-[4rem]'>
      <NewsAndUpdate/>
    </section>
 {/* News Section */}

    </>
  )
}
