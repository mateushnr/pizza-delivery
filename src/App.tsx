import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts/CartProvider'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <DefaultLayout />
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
