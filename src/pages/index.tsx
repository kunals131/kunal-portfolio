
import { SocialGroup } from '@/components/common'
import PageTitle from '@/components/common/PageTitle'
import Section from '@/components/common/Section'
import { Layout } from '@/components/layout'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Home: NextPage = () => {
  return (
    <Layout title='Home' description='Test title'>
      <PageTitle title="Hey, I'm Kunal 👋" subtitle="I'm a software developer at Ostmodern, and living in Southampton, UK." icons />
      <Section linebreak>
        <h1 className='font-light text-4xl'>About</h1>
        <p className='mt-4  font-light text-lg space-y-3'>
          <p>I spend most of my time as a frontend developer on Ostmodern's Skylark CMS using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and I'm currently experimenting with Serverless technologies on AWS and Azure.</p>
          <p className=''>I spend most of my time as a frontend developer on Ostmodern's Skylark CMS using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and I'm currently experimenting with Serverless technologies on AWS and Azure.</p>
        </p>
      </Section>
      <Section>
      <h1 className='font-light text-4xl'>Experience</h1>
        <p className='mt-4  font-light text-lg space-y-3'>
          <p>I spend most of my time as a frontend developer on Ostmodern's Skylark CMS using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and I'm currently experimenting with Serverless technologies on AWS and Azure.</p>
          <p className=''>I spend most of my time as a frontend developer on Ostmodern's Skylark CMS using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and I'm currently experimenting with Serverless technologies on AWS and Azure.</p>
        </p>
      </Section>
    </Layout>
  )
}

export default Home