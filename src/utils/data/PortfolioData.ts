import { IPortfolio } from "@/typings";

export const CATEGORIES = {
    CLIENT : 'client',
    PERSONAL : 'personal'
}

const {CLIENT,PERSONAL} = CATEGORIES


export const CategoryOptions = [
    {
        title: 'Client Projects',
        value: CLIENT
    },
    {
        title: 'Personal Projects',
        value: PERSONAL
    }

]

export const PortfolioData:IPortfolio[] = [
    {
        title : 'Verved.in',
        description : 'Verved is a digital agency website designed with great animations & good user experience. Its using Next Js and animation libraries like GSAP & Framer Motion.',
        canonical : 'verved-in',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676363070/Screenshot_2023-02-14_135311_dc0tea.png',
        portfolio : '',
        publishedAt : '13 Nov 2022',
        tags : ['Good', 'Published'],
        videoURL : '',
        category: CLIENT
    },
    {
        title : 'Connect The Docs',
        description : `Connect the docs is a full-stack web application where patients can find doctors, book appointments, perform AI diagnoses, and many more features.`,
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676375998/171213553-5da2f56f-cb52-4b25-af75-cd400a45c26a_j2rnnx.png',
        portfolio : '',
        publishedAt : '13 Jan 2022',
        tags : ['Good', 'Published'],
        category : PERSONAL
    },
    {
        title : 'Connect The Docs',
        description : 'Connect the docs is a full-stack web application where patients can find doctors, book appointments, perform AI diagnoses, and many more features.',
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676375998/171213553-5da2f56f-cb52-4b25-af75-cd400a45c26a_j2rnnx.png',
        portfolio : '',
        publishedAt : '13 Jan 2022',
        tags : ['Good', 'Published'],
        category : PERSONAL
    },
    {
        title : 'Connect The Docs',
        description : 'Connect the docs is a full-stack web application where patients can find doctors, book appointments, perform AI diagnoses, and many more features.',
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676375998/171213553-5da2f56f-cb52-4b25-af75-cd400a45c26a_j2rnnx.png',
        portfolio : '',
        publishedAt : '13 Jan 2022',
        tags : ['Good', 'Published'],
        category : PERSONAL

    },
]