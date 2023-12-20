import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'
import{FaHeart,FaRegHeart} from 'react-icons/fa'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Movie from './Movie'
const Row = ({title,fetchURL,rowid}) => {
  const [movies, setMovies] = useState([])
  const [like, setLike] = useState(false)
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [fetchURL])
  const slidleft = () => {
    var slider = document.getElementById('slider'+rowid)
    slider.scrollLeft = slider.scrollLeft-500
  }
  const slidRight = () => {
    var slider = document.getElementById('slider'+rowid)
    slider.scrollLeft = slider.scrollLeft+500
  }


  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group'>
      <MdChevronLeft onClick={slidleft} size={40} className='absolute left-0  bg-white opacity-50 hover:opacity-100 text-3xl cursor-pointer rounded-full z-10 hidden group-hover:block'/>
      <div id={'slider'+rowid} className='overflow-x-scroll w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative'>

       {movies.map((item,id) => (
       <Movie key={id} item={item}/>
       ))}
      </div>
      <MdChevronRight onClick={slidRight} size={40}className='absolute right-0 bg-white opacity-50 hover:opacity-100 text-3xl cursor-pointer rounded-full z-10 hidden group-hover:block '/>
    </div>
    </>
  )
}

export default Row