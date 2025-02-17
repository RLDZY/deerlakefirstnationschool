import React from 'react'

export default function Welcome() {
  return (
    <>
    <section className='w-[100%] h-auto'>
    <div className='mt-[145px]'>
        <h1 className='text-[1.5rem] font-bold mb-[2rem]'>Welcome Message from the Director</h1>
    </div>
    <div className='gap-[100px] grid grid-cols-1 lg:grid-cols-2'>
        {/* right */}
        <div>
        <div className='w-[400px] lg:w-[620px] h-[460] bg-[#E1E2F2] rounded-sm'/>    
        </div>
        {/* right */}

        {/* Left */}
        <div>
        <h1 className='font-bold'>Dear Students, Parents, and Visitors,</h1>
        <p className='pt-2 italic text-[.9rem]'>It is with great pleasure and excitement that I welcome you. As the Education School Director of Deer Lake First Nation School, I am proud to lead an institution where every child’s growth, development, and success are at the heart of all we do. Our school is a place where academic excellence meets a nurturing environment, where curiosity is encouraged, and where students are equipped with the skills they need to thrive in an ever-changing world.
        <br/><br/>Our dedicated team of educators and staff work tirelessly to create a community that is inclusive, supportive, and inspiring. Whether you are a current student, a prospective family, or a valued member of our broader community, we hope you find all the information you need to understand what makes our school unique.
        <br/><br/>Thank you for visiting. We look forward to partnering with you as we continue to build a strong and vibrant school community.
        </p>
        <h2 className='pt-2 font-bold'>Doreen Rae</h2>  
        <p>School Education Director</p>
        </div>
        {/* Left */}
    </div>
    </section>
    </>
  )
}
