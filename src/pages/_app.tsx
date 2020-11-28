import React from 'react'
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import GlobalStyle from '../styles/global'
import Header from '../components/Header'
import { CookiesProvider } from 'react-cookie'
import {RecoilRoot } from 'recoil';
import ConfigTheme from './_configTheme' 

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  
  return (
    <RecoilRoot>
    <CookiesProvider>
    <ConfigTheme>
          <Header />
          <Component {...pageProps} />
          <GlobalStyle />
    </ConfigTheme>        
    </CookiesProvider>
    </RecoilRoot>
  )
}
export default MyApp
