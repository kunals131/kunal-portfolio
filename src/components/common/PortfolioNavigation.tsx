import React from 'react'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { CategoryOptions } from '@/utils/data/PortfolioData'
interface IProps {
    category: string,
    setCategory: (value: string) => void
}



const PortfolioNavigation = ({ category, setCategory }: IProps) => {
    return (
        <AnimateSharedLayout>
            <div className='flex items-center text-base border-gray-500 text-gray-700 dark:text-white mb-8 border-b-[1px] gap-8'>
                {CategoryOptions.map(item => (
                    <div key={item.value} onClick={() => setCategory(item.value)} className='flex flex-col pb-4 relative w-fit'>
                        <span className={`dark:text-white text-gray-700 transition-all cursor-pointer ${category !== item.value ? 'dark:opacity-40 opacity-60 hover:opacity-100' : ''}`}>{item.title}</span>
                        {item.value == category && <motion.div layoutId='portfolio-nav' className='absolute w-full h-[2px] bg-yellow-400 bottom-0 left-0'></motion.div>}
                    </div>
                ))}
            </div>
        </AnimateSharedLayout>
    )
}

export default PortfolioNavigation