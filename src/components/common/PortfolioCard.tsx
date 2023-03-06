import moment from 'moment'
import Image from 'next/image'
import Link from './NoScrollLink'
import PortfolioCardLinks from './PortfolioCardLinks'


interface IProps {
    title: string
    description: string
    date: string
    tags: string[]
    canonical: string
    portfolio?: boolean
    coverImage?: string
    assetsURL ?: string
    liveURL ?:string
    githubURL ?:string
    videoURL ?:string
    primaryURL ?:string
}

const PortfolioCard = ({
    title,
    description,
    date,
    tags,
    portfolio = false,
    coverImage = '',
    githubURL,
    liveURL,
    assetsURL,
    videoURL,
    primaryURL
}: IProps) => (
    <div className="mb-16 group flex flex-col-reverse  sm w-full">
        <div
            className={`w-full text-gray-500 dark:text-gray-300 ${coverImage ? '' : 'sm:w-4/5'}`}
        >
            <>
                <a target='_blank' rel="noreferrer" href={primaryURL || '/'} ><h3  className="text-2xl max-sm:text-xl text-gray-600 cursor-pointer dark:text-gray-100 group-hover:underline">{title}</h3></a>
                    <p className="text-sm max-sm:hidden my-1 opacity-70">
                        <span>{moment(date).format('Do MMMM YYYY')}</span>
                        <span className="px-1">-</span>
                        <span className='truncate'>{tags.join(', ')}</span>
                    </p>
                <p className="text-base mt-2">{description}</p>
                {/* <p className="text-base mt-2 underline hover:text-gray-800 dark:hover:text-gray-100 transition-colors">
                    Read more
                </p> */}
                <PortfolioCardLinks assetsURL={assetsURL} githubURL={githubURL} liveURL={liveURL} videoURL={videoURL} />
            </>

        </div>
        {coverImage && (
            <a href={primaryURL || '/'} target='_blank' rel="noreferrer" className='w-full'>
            <div className=" rounded-md h-fit max-md:hidden cursor-pointer max-sm:overflow-hidden max-sm:max-h-[150px] mb-6 max-sm:mb-4  relative w-full mt-1 sm:mt-0 flex items-center justify-center">
               <img src={coverImage} className='object-cover object-center w-full h-fit rounded-lg'/>
            </div>
            <div className='rounded-md hidden max-md:block max-md:h-[250px] w-full max-sm:h-[210px] mb-6' style={{background : `url(${coverImage}) center center/cover`}}></div>
            </a>
        )}
    </div>
)

export default PortfolioCard