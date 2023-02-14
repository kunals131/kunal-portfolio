import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='px-80 2xl:px-96 flex items-center justify-between fixed top-0 border-b border-gray-200 h-16 w-full left-0 z-50 text-black'>
      <Link href='/'>
        <>
        <span className='block max-md:hidden'>Kunal Sangtiani</span>
        <span className='hidden max-md:block'>KS</span>
        </>
      </Link>
      <div className='flex items-center'>
        <Navigation/>
      </div>
    </div>
  )
}

export default Header