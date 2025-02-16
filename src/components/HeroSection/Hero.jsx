import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
    <section className='max-w-[100%] h-[600px] mt-[60px]'>
    <div className='grid md:grid-cols-2 place-items-center'>
        {/* Right Col */}
        <div>
            <h1 className='text-[2.5rem]'>Empowering Young Minds, Strengthening Our Community</h1>
            <p className='mt-[.5rem] w-[594px]'>Our commitment to environmental stewardship and community 
                engagement ensures that each student not only excels in their 
                studies but also plays an active role in shaping a sustainable future.</p>
                
            <div className='mt-[1.5rem] space-x-[1rem]'>
                <Button className="bg-[#222B9A] h-[44px] w-[196px]">School Tour</Button>
                <Button className="h-[44px] w-[196px] border-[1.5px] border-gray-900 bg-[#fff] hover:bg-[#fff] text-border-gray-900">Community Tour</Button>
            </div>
        </div>
        {/* Right Col */}

        {/* Left Col */}
        <div>
            <Image
                  src="/image/hero-img.png"
                  width={620}
                  height={360}
                  alt="Picture of the author"
              
                /> 
        </div>
        {/* Left Col */}
    </div>
    </section>
    </>
  )
}
