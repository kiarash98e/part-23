import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Layout from './components/layout/layout'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
        staleTime:60000,
        cacheTime:90000,
        refetchOnMount:false,
        refetchOnReconnect:false,
        refetchOnWindowFocus:false
    },
    mutations:{
      onError:(err) => console.log(err)
    }
  }
})

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Roboto Mono, monospace",
    },
    h2: {
      fontFamily: "Roboto Mono, monospace",
    },
    h3: {
      fontFamily: "Roboto Mono, monospace",
    },
    h4: {
      fontFamily: "Roboto Mono, monospace",
    },
    h5: {
      fontFamily: "Roboto Mono, monospace",
    },
    h6: {
      fontFamily: "Roboto Mono, monospace",
    },
  },
})

const App:React.FC = () => {
   
  return(
    <QueryClientProvider client={queryClient}>
        <Router>
          <ThemeProvider theme={theme}>
            <Layout/>
            <ReactQueryDevtools initialIsOpen/>
          </ThemeProvider>
        </Router>
    </QueryClientProvider>
  )
}

export default App
