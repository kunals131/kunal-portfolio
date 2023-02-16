
import { Header,Footer } from '@/components/common'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const url = `https://kunal-portfolio-gamma.vercel.app/${router.route}`
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
    <DefaultSeo
        titleTemplate="%s - Kunal Sangtiani"
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url,
            description: 'Looking for a skilled full stack developer with expertise in the MERN stack? Look no further than my portfolio website! As a talented developer, I bring a wealth of experience and a passion for cutting-edge technologies to every project I undertake. From responsive front-end designs to robust back-end architectures, I have the skills and knowledge needed to help you achieve your development goals.',
            site_name: 'Kunal Sangtiani',
            images: [],
        }}
        canonical={url}
    />
    <Header />
    <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
    >
        <Component {...pageProps} canonical={url} key={url} />
    </AnimatePresence>
    <Footer />
</>
  )
}
