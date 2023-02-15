
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
            description: 'Portfolio website of Kunal Sangtiani - Full Stack developer.',
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
