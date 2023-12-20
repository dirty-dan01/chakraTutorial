import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand:{
    900: "#005300",
    800: '#006600',
    700: '#0D860D',
    500: '#59AC59',
    400: '#99CC99',

  }
}

const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
