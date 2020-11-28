import { NextPage } from 'next'
import Link from 'next/link'
import { useCookies } from 'react-cookie'
import Switch from 'react-switch'

import React, { useEffect, useState } from 'react'

import { Container, Menu } from './styles'
import { useRecoilState } from 'recoil'
import { colorModeAtom } from '../../Recoil/atoms/ColorMode'
interface Props {
  storedDarkMode?: boolean
}

const Header: NextPage<Props> = () => {
  const [cookie, setCookie] = useCookies(['darkMode'])
  const [darkMode, setDarkMode] = useRecoilState(colorModeAtom)
  useEffect(() => {
    setDarkMode(JSON.parse(cookie.darkMode  || 'false'))
  }, [])

  useEffect(() => {
    if (darkMode) {
      setCookie('darkMode', 'true')
    } else {
      setCookie('darkMode', 'false')
    }
  }, [darkMode])

  // Switch Config

  return (
    <Container>
      <h1>Blog do Douglas</h1>
      <Menu>
      <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/">
          <a>Sobre</a>
        </Link>
        <Link href="/">
          <a>Portifólio</a>
        </Link>
        
      </Menu>
      <div>
        <h4>Dark Mode</h4>
        <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} value="darkMode"/>
      </div>
    </Container>
  )
}
export default Header
