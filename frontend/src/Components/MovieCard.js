import React from 'react'

export default function MovieCard({movie}) {

  return (
    <div>
        <div>{movie.title}</div>
        <div>{movie.year}</div>
        <div>{movie.rating}</div>

    </div>
    
  )
}
