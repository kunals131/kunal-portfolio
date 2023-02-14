import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className=' w-full fixed bg-white flex flex-row justify-between items-center
    h-16 md:h-20 border-b border-gray-200 z-50
    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
    dark:bg-primaryBg dark:border-gray-600
    text-black dark:text-white'>
      <Link href='/'>
        <>
        <span className='block max-md:hidden'>Kunal Sangtiani</span>
        <span className='hidden max-md:block'>KS</span>
        </>
      </Link>
      <div className='flex items-center space-x-6'>
        <Navigation/>
        <DarkModeToggle/>
      </div>
    </div>
  )
}

export default Header