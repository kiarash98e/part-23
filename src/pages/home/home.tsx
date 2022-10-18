/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Typography } from '@mui/material'
import { useCachFilms } from '../../hooks/films/useFilms'

function home() {
  useCachFilms()
  return (
    <div>
      <Typography variant="h2">React Query Demo</Typography>
      <Typography variant="subtitle1">Using the Star Wars API</Typography>
       <section style={{margin:"2rem"}}>
        <Typography variant="h5">Why React Query?</Typography>
        <Typography variant="body1">
          In this demo you will be able to see how React Query is a significant
          improvement over <strong>redux</strong>, <strong>mobx</strong>, and
          any other general-purpose state container.
        </Typography>
        <Typography variant="body1">
          No reducers, thunks, or sagas. No ES6 models to maintain in order to
          tag them as observable.
        </Typography>
        <Typography variant="body1">
          Simply associate a key with your fetch call and let{" "}
          <strong>React Query</strong> handle the rest.
        </Typography>
        <Typography variant="h5">Ready to get started?</Typography>
        
      </section>
    </div>
  
  )
}

export default home