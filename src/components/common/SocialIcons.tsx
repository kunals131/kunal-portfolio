import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const SocialGroup = () => {
    return (
        <div className='flex items-center gap-5 my-3'>
            <BsGithub className='opacity-60 cursor-pointer text-2xl hover:opacity-100 transition-all' />
            <FaLinkedinIn className='opacity-60 text-2xl cursor-pointer hover:opacity-100 transition-all' />
            <MdEmail className='opacity-60 text-[1.7rem] cursor-pointer hover:opacity-100 transition-all' />
        </div>
    )
}

export default SocialGroup