import React, { useContext } from 'react'

import { Mycontext } from '../../Context/Mycontext'
import MovieCard from '../MovieCard'

export default function Movies() {
  const [,,movies,] = useContext(Mycontext)

  return (
    <>

        <div>all Movies</div>
          <div>
              {movies.sort((a,b) => b.year - a.year).map(movie => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
    </>
  )
}
