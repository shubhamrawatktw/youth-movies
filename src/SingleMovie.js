import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'
import { useGlobalContext } from './context'

const url = "https://www.omdbapi.com/?apikey=34b9fdec";

function SingleMovie() {
  const {id} = useParams()
  const {isLoading,setIsLoading} = useGlobalContext()
  const [movie,setMovie] = useState([]) 

const fetchData = async (url)=>{
  setIsLoading(true)
  const res = await fetch(url)
  const data = await res.json()
   setMovie(data)
   setIsLoading(false)
}

  useEffect(()=>{
    fetchData(`${url}&i=${id}`)
  },[id])
  
  if (isLoading) {
    return <div className="loading"></div>
  }

  const {Poster:poster,Title:title,Plot:plot,Year:year,imdbRating:rating} =movie


  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className="single-movie-info">
  <h2>{title}</h2>
  <p>{plot}</p>
  <p>{rating}</p>
  <h4>{year}</h4>
<Link to="/" className="btn">back to movies</Link>
      </div>
    </section>
  )
}

export default SingleMovie
