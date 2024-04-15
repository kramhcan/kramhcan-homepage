import React from 'react'
import { SocialIcon } from 'react-social-icons'

const ContactComponent = () => {
  return (
    <section id='contact'>
      <h2 className='text-center text-white text-4xl mt-6 mb-4 font-bold'>Contact Me</h2>
      <ul className='text-center text-white font-bold'>
        <li>Email: markchan0134@gmail.com</li>
        <li>Phone: +60 17-322 1543</li>
      </ul>
      <div className='md:text-center'>
        <button className='font-bold px-20 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300 text-black mt-3'>
          <SocialIcon url="https://linkedin.com" href='https://www.linkedin.com/in/markchan0134/' />
        </button>
        <button className='font-bold px-20 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300 text-black mt-3'>
          <SocialIcon url="https://github.com/" href='https://github.com/kramhcan' />
        </button>
        <button className='font-bold px-20 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300 text-black mt-3'>
          <SocialIcon url="https://whatsapp.com/" href='https://wa.me/60173221543' />
        </button>
  
      </div>
    </section>
  )
}

export default ContactComponent
