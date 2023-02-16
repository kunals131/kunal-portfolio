

import { Section,PageTitle,PortfolioCard,PortfolioNavigation } from '@/components/common'
import { Layout } from '@/components/layout'
import { AnimatePresence, motion } from 'framer-motion'
import { CATEGORIES, CategoryOptions, PagesData, PortfolioData } from '@/utils/data'
import { useState } from 'react'




const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 100, y: 0 },
}

const PortfolioPage = () => {
    const [category, setCategory] = useState(CategoryOptions[0].value)

    return (
        <Layout title={PagesData.PORTFOLIO.title} description={PagesData.PORTFOLIO.subTitle}>
            <PageTitle title={PagesData.PORTFOLIO.title} subtitle={PagesData.PORTFOLIO.subTitle} />
            <Section linebreak>
                <div className='overflow-hidden w-full'>
                <PortfolioNavigation category={category} setCategory={setCategory} />
                <AnimatePresence mode='wait' initial={false}>
                    <motion.div
                        initial="hidden"
                        animate="enter"
                        key={category}
                        exit="exit"
                        variants={variants}
                        transition={{ type: 'linear' }}
                    >
                        {category === CATEGORIES.CLIENT ? <div>
                            {PortfolioData.filter(item => item.category === category).map(({ title, description, publishedAt,primaryURL, tags, canonical, coverImage }) => (
                                <PortfolioCard
                                    key={title}
                                    title={title}
                                    description={description}
                                    date={publishedAt}
                                    tags={tags}
                                    canonical={canonical}
                                    portfolio
                                    coverImage={coverImage}
                                    primaryURL={primaryURL}
                                />
                            ))}
                        </div> :
                            <div>
                                {PortfolioData.filter(item => item.category === category).map(({ title, description, publishedAt,assetsURL,liveURL,githubURL,primaryURL,videoURL, tags, canonical, coverImage }) => (
                                    <PortfolioCard
                                        key={title}
                                        title={title}
                                        description={description}
                                        date={publishedAt}
                                        tags={tags}
                                        canonical={canonical}
                                        portfolio
                                        coverImage={coverImage}
                                        assetsURL={assetsURL}
                                    githubURL={githubURL}
                                    liveURL={liveURL}
                                    videoURL={videoURL}
                                    primaryURL={primaryURL}
                                    />
                                ))}
                            </div>}
                    </motion.div>
                </AnimatePresence>
                </div>
            </Section>
        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const articles = await getAllPortfolioArticles()
//     return { props: { articles } }
// }



export default PortfolioPage