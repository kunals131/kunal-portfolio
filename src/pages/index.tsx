
import {Section,PageTitle} from '@/components/common'
import ExperienceItem from '@/components/Home/ExperienceItem'
import { Layout } from '@/components/layout'
import { ExperienceData, PagesData } from '@/utils/data'
import { NextPage } from 'next'

import React from 'react'

const Home: NextPage = () => {
  return (
    <Layout title='Home' description={PagesData.HOME.subTitle}>
      <PageTitle title="Hey, I'm Kunal 👋" subtitle={PagesData.HOME.subTitle} icons />
      <Section linebreak>
        <h1 className='font-light text-4xl'>About</h1>
        <div className='mt-4  font-light text-lg space-y-3'>
          {PagesData.HOME.about.map((item,key)=><p key={key}>{item}</p>)}
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