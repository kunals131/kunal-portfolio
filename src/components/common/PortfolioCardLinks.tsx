import React from 'react'
import { BsGlobe } from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai';
import {IoVideocamOutline} from 'react-icons/io5';
import {ImFilesEmpty} from 'react-icons/im';
import Link from 'next/link';
interface IProps {
    liveURL ?:string,
    githubURL ?:string
    videoURL ?:string
    assetsURL ?:string
}

const PortfolioCardLinks = ({assetsURL,githubURL,liveURL,videoURL}:IProps) => {
  return (
    <div className='flex items-center gap-4 mt-3'>
        {liveURL&&<a target='_blank' rel="noreferrer" href={liveURL || '/'}><BsGlobe title='Live URL' className='opacity-70 hover:opacity-100  transition-all cursor-pointer'/></a>}
        {githubURL&&<a target='_blank' rel="noreferrer" href={githubURL || '/'}><AiFillGithub title='Github URL' className='text-[20px] opacity-70 hover:opacity-100  transition-all cursor-pointer'/></a>}
        {videoURL&&<a target='_blank' rel="noreferrer" href={videoURL || '/'}><IoVideocamOutline title='Video Demonstration' className='text-[21px] opacity-70 hover:opacity-100  transition-all cursor-pointer'/></a>}
        {assetsURL&&<a target='_blank' rel="noreferrer" href={assetsURL || '/'}><ImFilesEmpty title='Assets' className='text-[18px] opacity-70 hover:opacity-100  transition-all cursor-pointer'/></a>}
    </div>
  )
}

export default PortfolioCardLinks