import 'styled-components'
import { themeDefault } from '../styles/default/default'

type ThemeType = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
