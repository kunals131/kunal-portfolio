import { IExperience } from '@/typings'
import React from 'react'



const ExperienceItem = (props:IExperience) => {
  return (
    <div className='my-6'>
        <div className='text-2xl text-gray-700 dark:text-gray-200 font-thin flex items-start justify-between w-full'>
            <span >{props.title}</span>
            <div className='text-sm'>{props.duration}</div>
        </div>
        <div className='mt-0 dark:text-gray-400 text-lg font-[300]'>{props.company}</div>
        <ul className='flex text-sm mt-3 items-start list-disc list-inside flex-col space-y-2'>
            {props.description.map((text,idx)=>(
                <li key={idx}>{text}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceItem