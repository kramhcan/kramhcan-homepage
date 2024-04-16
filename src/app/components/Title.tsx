"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const Title = () => {
    return (

        <section>
            {/* glow */}
            <div className="relative w-full">
                    <div className="absolute left-20 lg:w-[25vw] lg:h-[25vw] w-[33vw] h-[33vw] bg-blue-400 rounded-full mix-blend-screen filter opacity-15 blur-2xl animate-blob"></div>
                    <div className="absolute left-40 lg:left-64 lg:w-[25vw] lg:h-[25vw] w-[33vw] h-[33vw] bg-pink-400 rounded-full mix-blend-screen filter opacity-15 blur-2xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-15 left-20 lg:top-20 lg:left-32 lg:w-[25vw] lg:h-[25vw] w-[33vw] h-[33vw] bg-purple-400 rounded-full mix-blend-screen filter opacity-15 blur-2xl animate-blob animation-delay-4000"></div>
                </div>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    {/* Name and description */}
                    <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-600'>
                            Hey
                        </span>
                        <span>
                            , I&apos;m {" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Mark.',
                                1500,
                                'a Software Engineer.',
                                1500,
                                'a Data Analyst.',
                                1500,
                                'a Backend Developer.',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#f4f8fa] text-base lg:text-xl mb-5'>
                        Born and raised in Subang Jaya. Graduated at Asia Pacific University. Ready to see what the world has to offer.
                    </p>
                    <a href='#contact'>
                        <button className='font-bold px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black mt-3'>Contact Me</button>
                    </a>
                </div>

                <div className='col-span-5 place-self-center mt-5 lg:mt-0'>
                    {/* Todo: Make image blob-shaped */}
                    <div className='relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full'>
                        <Image
                            src='/kramhcan-homepage/images/Me.jpg'
                            alt='Picture of me.'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Title
