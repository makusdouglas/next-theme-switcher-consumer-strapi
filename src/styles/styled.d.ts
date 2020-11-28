/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import { darkTheme } from './theme'

export type Theme = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
