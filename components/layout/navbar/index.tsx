import React, { useEffect, useState } from 'react';

import { contact_data } from 'data/navData';

import { useTheme } from 'next-themes';
import { IoIosArrowDown } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { AiFillGithub, AiOutlineGoogle, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { RiDropFill, RiContrastDropFill, RiShareFill, RiTranslate2, RiTelegramFill } from 'react-icons/ri';
import ReactCountryFlag from "react-country-flag"
import { useRouter } from 'next/router';

const icon = [
  AiFillGithub,
  AiOutlineGoogle,
  RiTelegramFill,
  AiFillLinkedin,
  AiOutlineInstagram,
]

const Navbar = () => {
  const [show, setShow] = useState(true);
  const {systemTheme, theme, setTheme} = useTheme();
  const router = useRouter();

     // scroll animation
     const controlNavbar = () => {
      if (window.scrollY > 200) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
  
    // scroll animation
    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, []);

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if(currentTheme === 'dark') {
      return (
        <RiDropFill className='nav__icon' onClick={() => setTheme('light')}>dark</RiDropFill>
      )
    }else {
      return (
        <RiContrastDropFill className='nav__icon' onClick={() => setTheme('dark')}>light</RiContrastDropFill>
      )
    }
  }
  return (
    <div className="container">
      <nav className={show ? 'navbar bg-white dark:bg-transparent bg-opacity-30 backdrop-filter backdrop-blur-md' : 'navbar bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm'}>
        <div>
          <h1 className='text-lg md:text-2xl font-monda font-medium cursor-pointer hover:opacity-70'>Anvarov</h1>
        </div>
        <div className='hidden lg:inline-flex items-center space-x-4 md:space-x-8'>
              <ul className='flex items-center space-x-4 md:space-x-8'>
                <li onClick={() => router.push('/')} className={router.pathname == '/' ? 'nav__link active' : 'nav__link'}>Home</li>
                <li onClick={() => router.push('/portfolio')} className={router.pathname == '/portfolio' ? 'nav__link active' : 'nav__link'}>Portfolio</li>
                <li onClick={() => router.push('/about')} className={router.pathname == '/about' ? 'nav__link active' : 'nav__link'}>About</li>
                <div className='relative flex items-center space-x-2 nav__link group'>
                  <li>Contact</li>
                  <IoIosArrowDown />
                  <div className='absolute top-4 md:top-16 right-0 p-4 border-2 rounded-b-md transform scale-0 origin-bottom group-hover:scale-100'>
                      {contact_data.map((item, index) => {
                        const Icon = icon[index]
                        return (
                          <ul className='flex items-center space-x-2 hover:text-my-lightText dark:hover:text-white' key={index}>
                            <div className='absolute -top-10 right-0 bg-red-300 w-full opacity-0 h-10 -z-30 cursor-pointer'></div>
                            <Icon className='text-xl' />
                            <li onClick={() => router.push(`${item.path}`)} className='text-center text-sm font-medium py-1'>{item.title}</li>
                          </ul>
                        )
                      })}
                  </div>
                </div>
              </ul>
        </div>
        <div className='flex space-x-4'>
          {renderThemeChanger()}
          <div className='relative group'>
            <RiTranslate2 className='nav__icon' />
            <div className='absolute top-10 md:top-14 right-0 px-4 py-2 border-2 rounded-b-md transform scale-0 origin-right group-hover:scale-100'>
              <ul className='flex flex-col items-center space-y-1 hover:text-my-lightText dark:hover:text-white' >
                  <div className='absolute -top-10 right-0 bg-red-300 w-full opacity-0 h-10 -z-30 cursor-pointer' />
                 <li className='text-xl hover:text-gray-600 cursor-pointer'><ReactCountryFlag countryCode="UZ" /></li>
                 <li className='text-xl hover:text-gray-600 cursor-pointer'><ReactCountryFlag countryCode="RU" /></li>
                 <li className='text-xl hover:text-gray-600 cursor-pointer'><ReactCountryFlag countryCode="US" /></li>
              </ul>
            </div>
          </div>
          <div className='hidden md:block relative group'>
            <RiShareFill className='nav__icon' />
            <div className='absolute top-10 md:top-14 right-0 px-4 py-2 border-2 rounded-b-md transform scale-0 origin-right group-hover:scale-100'>
              <ul className='flex flex-col items-center space-y-2 hover:text-my-lightText dark:hover:text-white' >
                  <div className='absolute -top-10 right-0 bg-red-300 w-full opacity-0 h-10 -z-30 cursor-pointer' />
                 <li className=' text-xl hover:text-gray-600 dark:text-gray-200 cursor-pointer'><AiFillGithub /></li>
                 <li className=' text-xl hover:text-gray-600 dark:text-gray-200 cursor-pointer'><AiFillLinkedin /></li>
                 <li className=' text-xl hover:text-gray-600 dark:text-gray-200 cursor-pointer'><RiTelegramFill /></li>
                 <li className=' text-xl hover:text-gray-600 dark:text-gray-200 cursor-pointer'><AiOutlineInstagram /></li>
              </ul>
            </div>
          </div>
          <CgMenuRight className='nav__icon block md:hidden' />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
