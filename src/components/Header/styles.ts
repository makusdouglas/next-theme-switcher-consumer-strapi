import styled from 'styled-components'
import {darken } from 'polished'

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.space[1]};
  width: 100%;
  height: ${props => props.theme.sizes[11]};
  background-color: ${props => props.theme.darkMode?
    props.theme.colors.gray[800] :
    props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  
  div {
    display: flex;
    align-items: center;
     h4 {
       margin-right: ${props => props.theme.space[1]};
     }
    }
  `

  export const Menu = styled.menu`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    a {
      color: ${props => props.theme.colors.white};
      text-decoration: none;
      font-size: ${props => props.theme.fontSizes["xl"]};
      
      margin: 0 ${props => props.theme.space[1]};
      
      &:hover {
        color: ${props => props.theme.colors.whiteAlpha[900]};
      }
    }


`
