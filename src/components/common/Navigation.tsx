import React from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';
import { NavLinks } from '@/utils/data';
import { isActiveLink } from '@/utils/functions';
import { useRouter } from 'next/router';


const Navigation = () => {
    const router = useRouter();
    return (
        <AnimateSharedLayout>
            <nav className='flex max-md:hidden'>
                {NavLinks.map(link => (
                    <Link key={link.href} className='mr-6 sm:mr-8 flex flex-col relative' href={link.href}>
                        <>
                            <span>{link.label}</span>
                            {isActiveLink(link.href, router.pathname) && <motion.div layoutId='navigation-active-underline' className='w-full h-[1.8px] bg-yellow-300'></motion.div>}
                        </>
                    </Link>
                ))}
            </nav>
        </AnimateSharedLayout>
    )
}

export default Navigation