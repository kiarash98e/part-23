/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Typography, Link } from '@mui/material'
import { useFilms } from '../../hooks/films/useFilms'
import { Link as RouterLink } from 'react-router-dom'

function films() {

    const films = useFilms()
    
    return (
      <>
        {
          films.results && 
          <>
            <Typography variant="h2">Films</Typography>
            {films.results && films.results.map((film:any) => {
              const filmUrlParts = film.url.split("/").filter(Boolean)
              const filmId = filmUrlParts[filmUrlParts.length - 1]
              return (
                <article key={filmId}>
                  <Link component={RouterLink} to={`/films/${filmId}`}>
                    <Typography variant="h6">
                      {film.episode_id}. {film.title}{" "}
                      <p>
                        ({new Date(Date.parse(film.release_date)).getFullYear()})
                      </p>
                    </Typography>
                  </Link>
                </article>
              )
            })}
          </>
        }
      </>
    )
}

export default films