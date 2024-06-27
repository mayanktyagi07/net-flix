import React from 'react'
import Nav from '../nav'
import Row from '../Row'
import Banner from '../Banner'
import requests from '../requests'
function Homescreen() {
  return (
    <div className='homeScreen'>
    <Nav />
    
    <Banner />
    <Row 
      title = "Netflix Originals"
      fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row title='Trending Now'
      fetchUrl ={requests.fetchTrending}
    />
    <Row title='Top Rated'
      fetchUrl ={requests.fetchTopRated}
    />
    <Row title='Action Movies'
      fetchUrl ={requests.fetchActionMovies}
    />
    <Row title='Comedy Movies'
      fetchUrl ={requests.fetchComedyMovies}
    />
    <Row title='Romance Movies'
      fetchUrl ={requests.fetchRomanceMovies}
    />
    <Row title='Documantries'
      fetchUrl ={requests.fetchDocumantaries}
    />
    
    </div>
  )
}

export default Homescreen