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
        title : 'Connect - The - Docs',
        description : 'Find out how I built the website for The VECentre - a virtual venue designed with user experience in mind to reflect a live show, by artists for artists.',
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/practicaldev/image/fetch/s--qhfLiVnH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xbyavlmw1ryvijbm24ll.png',
        portfolio : '',
        publishedAt : '13 Jan 2022',
        tags : ['Good', 'Published'],
        category : PERSONAL
    },
    {
        title : 'Connect - The - Docs',
        description : 'Find out how I built the website for The VECentre - a virtual venue designed with user experience in mind to reflect a live show, by artists for artists.',
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/practicaldev/image/fetch/s--qhfLiVnH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xbyavlmw1ryvijbm24ll.png',
        portfolio : '',
        publishedAt : '13 Jan 2022',
        tags : ['Good', 'Published'],
        category : PERSONAL
    },
    {
        title : 'Connect - The - Docs',
        description : 'Find out how I built the website for The VECentre - a virtual venue designed with user experience in mind to reflect a live show, by artists for artists.',
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/practicaldev/image/fetch/s--qhfLiVnH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xbyavlmw1ryvijbm24ll.png',
        portfolio : '',
        publishedAt : '13 Jan 2022',
        tags : ['Good', 'Published'],
        category : PERSONAL

    },
]