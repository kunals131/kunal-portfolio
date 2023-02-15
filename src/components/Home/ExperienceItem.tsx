import { IExperience } from '@/typings'
import React from 'react'



const ExperienceItem = (props:IExperience) => {
  return (
    <div className='my-6'>
      <article className=' text-gray-600 dark:text-gray-300 '>
        <h2 className='font-normal max-sm:text-xl text-2xl'>{props.title}</h2>
        <div className='flex  text-base max-sm:text-sm max-sm:gap-1 opacity-70 items-center  gap-2'>
          <p className='max-sm:truncate'>{props.company}</p>| 
          <p className='max-sm:shrink-0'>{props.duration}</p>
        </div>
        <div className='pl-4'>
        <ul className='mt-3 max-sm:text-sm list-outside list-disc text-gray-600 dark:text-gray-300 font-light text-base space-y-1'>
          {props.description.map((item,idx)=><li key={idx}>{item}</li>)}
        </ul>
        </div>
      </article>
    </div>
  )
}

export default ExperienceItem