import { SocialMediaLinks } from '@/utils/data/PagesData';
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialIcon = ({ href, icon, title }: { href: string, icon: any, title: string }) => {
    return (
        <a title={title} href={href} target='_blank' rel="noreferrer">
            {icon}
        </a>
    )
}

const SocialGroup = () => {
    return (
        <div className='flex items-center gap-5 my-3'>
            <SocialIcon href={SocialMediaLinks.github} title='Github' icon={<BsGithub className='opacity-60 cursor-pointer text-2xl hover:opacity-100 transition-all' />} />
            <SocialIcon href={SocialMediaLinks.linkedin} title='Linkedin' icon={<FaLinkedinIn className='opacity-60 text-2xl cursor-pointer hover:opacity-100 transition-all' />} />
            <SocialIcon href={`mailto:${SocialMediaLinks.email}`} title='Email' icon={<MdEmail className='opacity-60 text-[1.7rem] cursor-pointer hover:opacity-100 transition-all' />} />
        </div>
    )
}

export default SocialGroup