import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { HeroImage } from './HeroImage'
import LogoHero from './LogoHero'


export default function Hero() {
  return (
    <>
    <section className='max-w-[100%] h-auto mt-[180px]'>
    <div className='grid md:grid-cols-2 place-items-center'>
        {/* Right Col */}
        <div className='px-[2rem] mb-[2rem]'>
            <h1 className='text-[2rem] lg:text-[2.5rem]'>Empowering Young Minds, Strengthening Our Community</h1>
            <p className='mt-[.5rem] w-[400px] lg:w-[594px]'>Our commitment to environmental stewardship and community 
                engagement ensures that each student not only excels in their 
                studies but also plays an active role in shaping a sustainable future.</p>
                
            <div className='mt-[1.5rem] flex flex-col gap-y-2 lg:flex lg:flex-row lg:space-x-4'>
                <Button className="bg-[#222B9A] h-[44px] w-[196px]">School Tour</Button>
                <Button className="h-[44px] w-[196px] border-[1.5px] border-gray-900 bg-[#fff] hover:bg-[#fff] text-border-gray-900">Community Tour</Button>
            </div>
        </div>
        {/* Right Col */}

        {/* Left Col */}
        <div>
           <HeroImage/>
        </div>
        {/* Left Col */}
    </div>


    {/* Logo Icons */}
    <div className='mt-[5rem]'>
      <LogoHero/>
    </div>
    {/* Logo Icons */}
    


    </section>
    </>
  )
}
