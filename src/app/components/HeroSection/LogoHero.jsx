import React from 'react'
import Image from 'next/image'

const Images = [
    {
    Img: "/image/school-logo/kobe.png"
    },
    {
    Img: "/image/school-logo/kihs.png"
    },
    {
    Img: "/image/school-logo/ko.png"
    },
    {
    Img: "/image/school-logo/jp.png"
    },
    {
    Img: "/image/school-logo/deer.png"
    },
    {
    Img: "/image/school-logo/teach.png"
    },
]

export default function LogoHero() {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center w-[90%] mx-auto'>
       {Images.map((item, i) =>(
        <Image 
        key={i}
        src={item.Img}
        width={100}
        height={100}
        alt='Kobe Logo'
        style={{ width: "100px", height: "auto", objectFit:"contain" }}
        />
       ))}
    </div>
  )
}
