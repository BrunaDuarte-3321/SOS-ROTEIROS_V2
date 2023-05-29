import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { themeDefault } from './styles/default/default'

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
