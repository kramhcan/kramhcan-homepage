"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import Navitems from './NavItems'
import { Bars3Icon , XMarkIcon } from "@heroicons/react/24/solid";
import Mobilemenu from './MobileMenu'

const navItems = [
  {
    href: '#about',
    title: 'About'
  },
  {
    href: '#projects',
    title: 'Projects'
  },
  {
    href: '#contact',
    title: 'Contact'
  }

]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#101010] bg-opacity-100'>
      <div className="flex flex-wrap items-center justify-between mx-auto px-5 py-2">
        <Link href={"/"} className='text-2xl lg:text-4xl text-white font-semibold'>
          MARK
        </Link>
        <div className='mobile-menu block md:hidden'>
          {
            !isOpen ? (
              <button onClick={() => setIsOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <Bars3Icon className="h-4 w-4"></Bars3Icon>
              </button>
            ) : (
              <button onClick={() => setIsOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <XMarkIcon className="h-4 w-4"></XMarkIcon>
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          {/* Unordered List for navbar items */}
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navItems.map((item, index) => (
                <li key={index}>
                  <Navitems href={item.href} title={item.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      
        
        <div className={`${
          isOpen ? 'h-[152px] opacity-100' : 'opacity-0 h-0'
        } transition-all delay-50 duration-200 overflow-hidden w-full`}><Mobilemenu links={navItems} /> </div>
      
    </nav>
  )
}

export default Navbar
