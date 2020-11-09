import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Primary color</h1>
      <h2>Secondary color</h2>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

export default Home
