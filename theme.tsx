import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    bg: '#f1e0fdac'
  },
}
const textStyles = {
  logo: {
    fontSize: '32px',
    fontWeight: '600',
    fontFamily: 'Clash Display',
    // color: '#570861',
    color: 'black'

  },
  nav: {
    fontSize: '18px',
    // fontWeight: '200',
    fontFamily: 'Oswald',
    color: 'gray.500'
  }
}
const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  },
  colors,
  textStyles,
  fonts: {
    heading: `'Clash Display','Poppins','Cabinet Grotesk','Oswald',sans-serif`,
    body: `'Oswald', 'Clash Display','Poppins','Cabinet Grotesk' ,sans-serif`,
  },
})

export default theme