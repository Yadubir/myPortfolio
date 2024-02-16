import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function Contact() {
    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full py-20 bg-zinc-800 p-20 flex'>
      <div className='w-full flex gap-5 '>
        <h3 className='text-lg'>e-mail:</h3>
        <h3 className='text-lg no-underline hover:underline'>yadubirjhadns@gmail.com</h3>
      </div>
    </div>
  )
}

export default Contact
