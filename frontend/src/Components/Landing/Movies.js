import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Mycontext } from '../../Context/Mycontext'
import MovieCard from '../MovieCard'

export default function Movies() {
  const [,,movies,] = useContext(Mycontext)

  return (
    <>
        <Navbar />
        <div>all Movies</div>
          <div>
              {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
    </>
  )
}
