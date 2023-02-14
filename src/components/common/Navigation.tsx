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
            <nav className='flex'>
                {NavLinks.map(link => (
                    <Link className='flex last:mr-0 mr-10 flex-col w-fit' href={link.href}>
                        <>
                            <span>{link.label}</span>
                            {isActiveLink(link.href, router.pathname) && <motion.div layoutId='navigation-active-underline' className='w-full h-[2px] bg-yellow-300'></motion.div>}
                        </>
                    </Link>
                ))}
            </nav>
        </AnimateSharedLayout>
    )
}

export default Navigation