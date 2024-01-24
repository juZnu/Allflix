import React, { useContext, useEffect } from 'react'

import axios from 'axios'
import backend from '../../Variables'
import { Mycontext } from '../../Context/Mycontext'
import MovieCard from "../MovieCard"


export default function Home() {
  const [user,,movies,setMovies] = useContext(Mycontext)
  useEffect(() => {
    axios.get(backend+'movies/',{
      headers:{
        Authorization: `Token ${user.Token}`
      }
    }).then(response => response.data)
    .then(data => setMovies(data))
  },[setMovies, user.Token])


  
  return (
    <>
        
        <div>
         <div>Recently added</div>
          <div>
              {movies.sort((a,b) => new Date(a.date_added) - new Date(b.date_added)).slice(0,3).map(movie => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
        </div>
        <div>
          <div>Popular Movies</div>
          <div>
              {movies.sort((a,b) => b.rating - a.rating).slice(0,3).map(movie => <MovieCard key={movie.id} movie={movie}/>)}
          </div>
        </div>
    </>
  )
}
