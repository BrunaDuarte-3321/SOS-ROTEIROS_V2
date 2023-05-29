import { ThemeProvider } from "styled-components"
import { themeDefault } from "./styles/default"
import { GlobalStyle } from "./styles/default/GlobalStyle"

export const App = () => {
  return (
     <ThemeProvider theme={themeDefault}>
      <h1>Teste</h1>
      <GlobalStyle/>
     </ThemeProvider>
  )
}
