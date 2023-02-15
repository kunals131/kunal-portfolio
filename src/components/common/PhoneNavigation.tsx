import { NavLinks } from '@/utils/data'
import { Resume_URL } from '@/utils/data/PagesData';
import { isActiveLink } from '@/utils/functions';
import { dropMenuAnimation } from '@/utils/functions/dropMenuAnimation';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoArrowForward } from 'react-icons/io5'
const PhoneNavigation = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();
    const handleClose = () => setIsExpanded(false);

    useEffect(() => {
        dropMenuAnimation('.phone-menu-header', isExpanded, 182)
    }, [isExpanded]);
    useEffect(() => {
        router.events.on('routeChangeStart', handleClose);

        return () => router.events.off('routeChangeStart', handleClose);
    }, [router.events])
    return (
        <>
            <div onClick={() => setIsExpanded(prev => !prev)} className='hidden max-md:flex space-y-1 flex-col'>
                <span className={`${isExpanded ? 'rotate-[-45deg]' : ''} transition-all w-[25px] dark:bg-gray-50 h-[2px] bg-gray-800`}></span>
                <span className={`${isExpanded ? 'hidden' : ''} w-[20px] transition-all h-[2px] bg-gray-800 dark:bg-gray-50`}></span>
                <span className={`${isExpanded ? '-translate-y-[5px] rotate-[45deg] w-[25px]' : 'w-[18px]'} dark:bg-gray-50  h-[2px] transition-all bg-gray-800`}></span>
            </div>
            <div
                className={`h-0 hidden phone-menu-header shadow-xl max-md:block transition-all duration-700 absolute overflow-hidden  z-[1000] w-full left-0 top-16 md:top-20 dark:bg-secondaryBg bg-gray-50`}
            >
                {NavLinks.map((link) => (
                    <div className={`${isActiveLink(link.href, router.pathname) ? 'opacity-100' : 'opacity-80'} py-4 text-gray-800 dark:text-gray-300  px-5`} key={link.label}>
                        <Link href={link.href}>{link.label}</Link>
                    </div>
                ))}
                
                <a href={Resume_URL} target='_blank' rel="noreferrer">
                    <div className='py-4 opacity-80 border-t mt-2 border-gray-400 flex items-center gap-2 px-5'>
                        <p>Resume</p>
                        <IoArrowForward />
                    </div></a>

            </div>
        </>
    )
}

export default PhoneNavigation