import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Request'
const Home = () => {
  return (
    <>
      <Main/>
      <Row rowid='1'title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowid='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row  rowid='3'title='Trending' fetchURL={requests.requestTrending}/>
      <Row  rowid='4'title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row  rowid='5' title='Horror' fetchURL={requests.requestHorror}/>
      </>
    
  )
}

export default Home