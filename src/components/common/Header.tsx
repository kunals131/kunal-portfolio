import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Navigation from './Navigation'
import PhoneNavigation from './PhoneNavigation'

const Header = () => {
  return (
    <div className=' w-full fixed bg-white flex flex-row justify-between items-center
r    h-16 md:h-20 border-b border-gray-200 z-50
    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
    dark:bg-primaryBg dark:border-gray-600
    text-black dark:text-white'>
      <PhoneNavigation />
      <Link href='/' className='relative px-2'>
        <div className='w-[30px] h-[30px] max-md:hidden bg-gray-200 dark:bg-yellow-500 z-[1] absolute rounded-lg rotate-45 right-0'></div>
        <>
          <span className='block font-semibold max-md:hidden relative z-[2]'>Kunal Sangtiani</span>
          <span className='hidden max-md:block relative z-[2] font-semibold'>KS</span>
        </>
      </Link>
      <div className='flex items-center space-x-6 max-sm:space-x-2'>
        <Navigation />
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Header