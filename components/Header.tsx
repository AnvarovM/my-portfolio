import React from 'react'
import Navbar from './layout/navbar'

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen">
      <Navbar />
      <div className="absolute top-1/3 sm:top-1/2 -translate-y-1/2 transform z-30 px-6 md:px-0">
        <div className='mx-auto'>
            <p className='text-base md:text-xl font-semibold'>Anvarov Muhammad</p>
            <h1 className='text-5xl font-semibold sm:text-7xl md:text-[6rem] leading-none md:font-medium md:tracking-wider'>Frontend</h1>
            <h1 className='text-5xl font-semibold sm:text-7xl md:text-[6rem] leading-none md:font-medium ml-16 md:tracking-wider'>Developer</h1>
        </div>
      </div>
        <div className='hidden md:block'>
            <div className='absolute left-14 bottom-2 w-[30rem] h-[30rem] animate-wiggle rounded-full border dark:border-transparent flex items-center justify-center z-0 group'>
                <div className='animation__div bg-blue-200 hover:bg-blue-300'>
                    <img className='w-8' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cGF0aCBpZD0ibGlua2VkaW4iIGQ9Ik0zNC4xNDEsMEg1Ljg1OUE1Ljg2Niw1Ljg2NiwwLDAsMCwwLDUuODU5VjM0LjE0MUE1Ljg2Niw1Ljg2NiwwLDAsMCw1Ljg1OSw0MEgzNC4xNDFBNS44NjYsNS44NjYsMCwwLDAsNDAsMzQuMTQxVjUuODU5QTUuODY2LDUuODY2LDAsMCwwLDM0LjE0MSwwWm0tMjAsMzEuNzE5SDkuNDUzVjE1LjMxM2g0LjY4OFptMC0xOC43NUg5LjQ1M1Y4LjI4MWg0LjY4OFptMTYuNDA2LDE4Ljc1SDI1Ljg1OVYyMi4zNDRhMi4zNDQsMi4zNDQsMCwwLDAtNC42ODcsMHY5LjM3NUgxNi40ODRWMTUuMzEzaDQuNjg4VjE2LjJhMTAuMTYxLDEwLjE2MSwwLDAsMSwzLjUxNi0uODgzLDYuMTM1LDYuMTM1LDAsMCwxLDUuODU5LDYuMjI2Wm0wLDAiIGZpbGw9IiMwMDdhYjkiLz4KPC9zdmc+Cg==" alt="linkedin png" />
                </div>
            </div>
            <div className='absolute left-1/3 top-6 w-[30rem] h-[30rem] animate-wiggle rounded-full border dark:border-transparent flex items-center justify-center z-0 group'>
                <div className='animation__div bg-gray-200 hover:bg-gray-300'>
                    <img className='w-8' src="https://img.icons8.com/glyph-neue/344/github.png" alt="linkedin png" />
                </div>
            </div>
            <div className='absolute right-20 bottom-6 w-[34rem] h-[34rem] animate-wiggle rounded-full border dark:border-transparent flex items-center justify-center z-0 group'>
                <div className='animation__div bg-red-200 hover:bg-red-300'>
                    <img className='w-8' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDQwIDMwIj4KICA8ZyBpZD0iZ21haWwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTY0KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSA2NCkiIGZpbGw9IiNlY2VmZjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjU2LDE2MC4yMTJsMTUsMTEuODQ1VjE0OC42NzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjM2IC03OC4wNTcpIiBmaWxsPSIjY2ZkOGRjIi8+CiAgICA8cGF0aCBpZD0iUGF0aF81IiBkYXRhLW5hbWU9IlBhdGggNSIgZD0iTTM2LjI1LDY0SDM1TDIwLDc1Ljg0NSw1LDY0SDMuNzVBMy43NTEsMy43NTEsMCwwLDAsMCw2Ny43NXYyMi41QTMuNzUxLDMuNzUxLDAsMCwwLDMuNzUsOTRINVY3MC42MTVMMjAsODIuMTUybDE1LTExLjU0Vjk0aDEuMjVBMy43NTEsMy43NTEsMCwwLDAsNDAsOTAuMjVWNjcuNzVBMy43NTEsMy43NTEsMCwwLDAsMzYuMjUsNjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjZjQ0MzM2Ii8+CiAgPC9nPgo8L3N2Zz4K" alt="linkedin png" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
