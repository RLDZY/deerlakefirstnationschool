import React from 'react'
import Header from '@/components/Header/header.jsx'
import { Button } from '@/components/ui/button.jsx'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '@/components/Header/menu.jsx'
import Hero from '@/components/HeroSection/Hero'
import PostsList from '@/components/PostList'
import { NewsAndUpdate } from '@/components/News/NewsAndUpdate'

export default function page() {
  return (
    <>
    <header className='flex items-center justify-between max-w-[100%] h-[115px] border-b-[1px] border-[#E2E4F8]'>
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
      <Button className="bg-[#222B9A] px-[2rem]">Log In</Button>
    </div>

    <div className='md:hidden'>
      <Menu/>
    </div>


    </div>
    </header>

    {/* Hero Section */}
    <section className='w-[90%] mx-auto'>
    <Hero/>
    </section>
    {/* Hero Section */}

 {/* News Section */}
    <section className='w-[90%] mx-auto pb-[4rem]'>
      <NewsAndUpdate/>
    </section>
 {/* News Section */}

    </>
  )
}
