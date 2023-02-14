
import PageTitle from '@/components/common/PageTitle'
import ArticleCard from '@/components/common/PortfolioCard'
import Section from '@/components/common/Section'
import { Layout } from '@/components/layout'

import { PortfolioData } from '@/utils/data/PortfolioData'


const title = 'Projects 📚'
const subtitle = "A selection of projects I've worked on, during my career as a software developer."

const PortfolioPage = () => (
    <Layout title={title} description={subtitle}>
        <PageTitle title={title} subtitle={subtitle} />
        <Section linebreak>
            {PortfolioData.map(({ title, description, publishedAt, tags,canonical, coverImage }) => (
                <ArticleCard
                    key={title}
                    title={title}
                    description={description}
                    date={publishedAt}
                    tags={tags}
                    canonical={canonical}
                    portfolio
                    coverImage={coverImage}
                />
            ))}
        </Section>
    </Layout>
)

// export const getStaticProps: GetStaticProps = async () => {
//     const articles = await getAllPortfolioArticles()
//     return { props: { articles } }
// }



export default PortfolioPage