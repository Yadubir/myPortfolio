import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='fixed z-[999] bg-transparent w-full bg-zinc-800 text-zinc-100'>
            <div className='flex justify-between items-center h-16 text-zinc-100 relative shadow-sm' role='navigation'>
                <div className='pl-8'>
                    <a href='/' className='text-zinc-100 text-2xl font-bold hover:text-[rgb(243,219,215)]'>MyPortfolio</a>
                </div>
                <div className='links flex gap-10 pr-10'>
                    {["Home", "About", "Projects", "Contact"].map((item, index) => (
                        <a key={index} className={`text-lg font-light no-underline hover:underline hover:text-[fff0ed] capitalize ${index===2 && 'mr-32'} cursor-pointer`}>{item}</a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
