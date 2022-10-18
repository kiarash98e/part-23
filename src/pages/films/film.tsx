/* eslint-disable react-hooks/rules-of-hooks */
import { Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFilm } from '../../hooks/films/useFilm'

function film() {
  const { filmId } = useParams()

  const film = useFilm(filmId)
  return (
    <>
      {
        film ? (
          <>
            <Typography variant="h2">{film.title}</Typography>
            <Typography variant="body1" sx={{mt:3,width:"80%"}}>{film.opening_crawl}</Typography>
          </>
        ):null
      }
    </>
  )
}

export default film