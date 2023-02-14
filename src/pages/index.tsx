

import PageTitle from '@/components/common/PageTitle'
import Section from '@/components/common/Section'
import ExperienceItem from '@/components/Home/ExperienceItem'
import { Layout } from '@/components/layout'
import { ExperienceData } from '@/utils/data'
import { NextPage } from 'next'

import React from 'react'

const Home: NextPage = () => {
  return (
    <Layout title='Home' description='Test title'>
      <PageTitle title="Hey, I'm Kunal 👋" subtitle="I'm a software developer at Ostmodern, and living in Southampton, UK." icons />
      <Section linebreak>
        <h1 className='font-light text-4xl'>About</h1>
        <div className='mt-4  font-light text-lg space-y-3'>
          <p>{`I spend most of my time as a frontend developer on Ostmodern's Skylark CMS using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and I'm currently experimenting with Serverless technologies on AWS and Azure.`}</p>
          <p className=''>{`I spend most of my time as a frontend developer on Ostmodern's Skylark CMS using React.js. Sometimes I use Node.js, Docker, Kubernetes and Golang and I'm currently experimenting with Serverless technologies on AWS and Azure.`}</p>
        </div>
      </Section>
      <Section>
        <h1 className='font-light text-4xl'>Experience</h1>
        <div className='flex mt-3 flex-col'>
          {ExperienceData.map(exp => (
            <ExperienceItem {...exp} key={exp.id} />
          ))}
        </div>
      </Section>
    </Layout>
  )
}

export default Home