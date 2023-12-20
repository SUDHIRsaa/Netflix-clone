import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'

const Main = () => {
  const [movies, setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)]
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
    })

  }, [])
const truncate=(str,num)=>{
  if(str?.length>num){
    return str.slice(0,num)+'...'
}
else{
  return str
}
}
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full '>
        <div className='absolute w-full h-[550px]  bg-gradient-to-r from-black'></div>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className='w-full h-full  md:mt-3 object-cover' />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl mb-4'>{movie?.title}</h1>
        <div>
          <button  className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border bg-black text-white ml-4 border-gray-300 py-2 px-5'>watch latest</button>
        </div>
        <p className='w-full text-gray-200 mt-5'>Released:{movie?.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl-max-w-[35%] mt-3 text-gray-200'>
          {truncate(movie?.overview,150)}
        </p>
        </div>
       
      </div>
    </div>
  )
}

export default Main