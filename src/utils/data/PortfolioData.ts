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
        publishedAt : '17 August 2022',
        tags : ['Next Js', 'Tailwind CSS', 'Typescript', 'Animation', 'Anime Js'],
        videoURL : '',
        category: CLIENT,
        liveURL : 'https://verved.vercel.app/',
        primaryURL : 'https://verved.vercel.app/',
    },
    {
        title : 'Hoome.co.uk',
        description : `Hoome is a digital agency based in UK, I built this website to showcase their services. It's built using Next Js and Typescript.`,
        canonical : 'hoome-co',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478614/hoome_fubfvb.png',
        portfolio : '',
        publishedAt : '26 June 2022',
        tags : ['Next Js', 'Gsap', 'Animation', 'Framer Motion'],
        category : CLIENT,
        liveURL : 'https://www.hoome.co.uk/',
        primaryURL : 'https://www.hoome.co.uk/',
    },
    {
        title : 'Socialhallhq.com',
        description : `Social Hall is a dating site, it's developed using Next Js, Typescript with SEO functionality implemented using Next-seo. It's a full stack application with 2000+ Daily Active Users.`,
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478604/socialhall_ucji2v.png',
        portfolio : '',
        publishedAt : '29 September 2022',
        tags : ['Next Js', 'Nodemailer', 'Cypress', 'Tailwind CSS', 'MongoDB'],
        category : CLIENT,
        liveURL : 'https://socialhallhq.com/',
        primaryURL : 'https://socialhallhq.com/',
    },
    {
        title : 'Whatweclick.com',
        description : 'The portfolio website for Whatweclick, it a architecture photography agency. I recently wrote their website using TailwindCSS, Next Js & Typescript.',
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478604/whaweclick_vzqfc7.png',
        portfolio : '',
        publishedAt : '16 Feburary 2023',
        tags : ['Next Js', 'Tailwind CSS', 'Typescript','Tailwind CSS'],
        category : CLIENT,
        liveURL : 'https://www.whatweclick.com/',
        primaryURL : 'https://www.whatweclick.com/',

    },
    {
        title : 'Wave NFT Collection',
        description : "It's a showcase website for Wave NFT Collection, it has great animations which are implemented using Framer motion, GSAP & Anime Js. It's built using React Js & SCSS. ",
        canonical : 'nft-collection',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1679293338/nft_c4c1on.png',
        portfolio : '',
        publishedAt : '16 Feburary 2023',
        tags : ['Animations', "React Js", "SCSS", "Cross-Browser compatible"],
        category : CLIENT,
        liveURL : 'http://3.17.191.197/',
        primaryURL : 'http://3.17.191.197/',
    },
    {
        title : 'Sunshinejoy.com',
        description : `Sunshine Joy is a ecommerce website which provides canva like interface to allow users to design their products. I built this using MERN Stack.`,
        canonical : 'connnect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478606/sunshine_eygn01.png',
        portfolio : '',
        publishedAt : '01 January 2023',
        tags : ['Image Edior', 'React Js', 'Express Js', 'Node Js'],
        category : CLIENT,
        liveURL : 'https://sunshinejoy-live.netlify.app/',
        primaryURL : 'https://sunshinejoy-live.netlify.app/',
    },
    {
        title : 'Rehobothtransport.com',
        description : 'Rehoboth Transport is a trucking company based in USA. I built their website using React Js & Tailwindcss and also wrote unit test using jest. It also uses nodemailer to send promotional emails, automated replies etc.',
        canonical : 'transport-rehoboth',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478605/transport_breauo.png',
        portfolio : '',
        publishedAt : '27 October 2022',
        tags : ['React Js', 'Framer Motion', 'Tailwind CSS'],
        category : CLIENT,
        liveURL : 'https://rehobothtransport.com/',
        primaryURL : 'https://rehobothtransport.com/',

    },
    {
        title : 'Bricknbeam.in',
        description : 'Bricknbeam is a architecture firm based in Indore, India. I wrote their website using Next Js & Talwind CSS in 2021 and have been maintaing it since then.',
        canonical : 'bricknbeam',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478604/bricknbeam_pexm5w.png',
        portfolio : '',
        publishedAt : '25 October 2022',
        tags : ['Next Js', 'Next-SEO', 'Tailwind CSS', 'Nodemailer'],
        category : CLIENT,
        liveURL : 'https://www.bricknbeam.in/',
        primaryURL : 'https://www.bricknbeam.in/',

    },
    {
        title : 'Fantasy Bakery',
        description : `I built a complete ecommerce website for a local bakery. It's built with Next Js in the frontend and Express Js in the backend. I also built an admin panel which could be used to update website content & managing orders.`,
        canonical : 'fantasybakery',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478607/fantasybakery_nhun2p.png',
        portfolio : '',
        publishedAt : '14 November 2022',
        tags : ['Next Js', 'MongoDB', 'Node JS', 'Express JS'],
        category : CLIENT,
        liveURL : 'https://fantasy-bakery-temp.vercel.app/',
        primaryURL : 'https://fantasy-bakery-temp.vercel.app/',

    },
    {
        title : 'Surfeye.video',
        description : `Surf Eye is a surfing company which allows members to surf and then send them their recordings using the website. I built their complete frontend using React JS & SCSS.`,
        canonical : 'fantasybakery',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676478606/surfeye_g5srb5.png',
        portfolio : '',
        publishedAt : '16 July 2022',
        tags : ['React Js', 'Redux', 'SCSS', 'Material UI'],
        category : CLIENT,
        liveURL : 'https://www.surfeye.video/',
        primaryURL : 'https://www.surfeye.video/',

    },

    // Personal
    {
        title : 'Sansadhan Prabandhan',
        description : `It is a portal which allows institutes to share their resources, I built this project in Smart India Hackathon, I implemented the complete frontend and also built the web3 functionality which provides better security & contract assurance.`,
        canonical : 'fantasybakery',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676479098/sansadhan_jxi6w7.jpg',
        portfolio : '',
        publishedAt : '29 September 2022',
        tags : ['Blockchain', 'AI', 'ML', 'MERN','Winner of SIH 2022'],
        category : PERSONAL,
        githubURL : 'https://github.com/buggydecoders/Sih2022Finale',
        primaryURL : 'https://github.com/buggydecoders/Sih2022Finale',
        videoURL : 'https://www.youtube.com/watch?v=aHZfSLStODc&feature=share'
    },
    {
        title : 'SmartKart',
        description : `Developed an eCommerce store that uses blockchain-based NFT Warranty (ERC721 Token). Implemented frontend using Next Js & a hybrid backend using Express, Solidity & Hardhat. Built a panel for the sellers to manage orders and complete e-commerce functionality for customers to place & track
        orders.`,
        canonical : 'Smart Kart',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676479180/flipkart_ionavn.png',
        portfolio : '',
        publishedAt : '13 Jan 2022',
        tags : ['Blockchain', 'Next Js', 'Hardhat', 'The Graph', 'IPFS','NFT'],
        category : PERSONAL,
        githubURL : 'https://github.com/kunals131/SmartKart-v2',
        primaryURL : 'https://github.com/kunals131/SmartKart-v2',
        assetsURL : 'https://drive.google.com/drive/u/3/folders/1FYa27RfvyT_Hk9sr87V_1b74Jd3QnkPG',
        videoURL : 'https://drive.google.com/drive/u/3/folders/1FYa27RfvyT_Hk9sr87V_1b74Jd3QnkPG'
    },
    {
        title : 'Connect The Docs',
        description : `Built a web application to connect patients & doctors including features such as AI Diagnosis, Doctor Recommendation,
        and text messaging. Used socket.IO to implement text-messaging & notifications. Implemented AI diagnosis which predicts diseases based on symptoms & recommends best doctors.
        `,
        canonical : 'Connect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676479257/171212468-530bc2b5-3cfe-4885-9acd-164a941a14c8_qixqi1.png',
        portfolio : '',
        publishedAt : 'May 31 2022',
        tags : ['Next Js', 'Express Js', 'Tailwind CSS', 'Socket.io', 'Node Js', 'MySQL'],
        category : PERSONAL,
        githubURL : 'https://github.com/kunals131/Doctor-Appointment',
        primaryURL : 'https://github.com/kunals131/Doctor-Appointment',
       
    },
    {
        title : 'React Room',
        description : `Developed an Audio/Video conferencing web application using Dolby’s Voxeet SDK with Firebase’s real-time
        database. Implemented Smart Voice Assistance using Web Speech APIs .
        `,
        canonical : 'Connect-the-docs',
        coverImage : 'https://res.cloudinary.com/insight-byte/image/upload/v1676479328/147218151-f904fea0-b6a7-4bf9-908c-16091ca8dabc_a7n37d.png',
        portfolio : '',
        publishedAt : '12 Oct 2022',
        tags : ['Dolby APIs', 'React Js', 'Firebase','Winner of Dolby.io Hackathon'],
        category : PERSONAL,
        githubURL : 'https://github.com/kunals131/React-Room',
        primaryURL : 'https://reactroom.netlify.app/',
        liveURL : 'https://reactroom.netlify.app/',
        assetsURL : 'https://devpost.com/software/react-room-zy384i',
        videoURL : 'https://youtu.be/8y4oFbpTBPU'
    },

]
