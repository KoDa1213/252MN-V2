import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.scss'
import { Roadmap } from '@components'
import { PageLayout } from 'layouts'

const Home: NextPage = () => {
  return (
    <PageLayout title="Next Home page">
      <Roadmap/>
      
    </PageLayout>
  )
}

export default Home
