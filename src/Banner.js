import React from 'react'
import { useState , useEffect } from 'react'
import './banner.css'
import axios from './axios'
import requests from './requests'
function Banner() {
    const [Movie, setMovie] = useState([])

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        return request;
      }
    
      fetchData();
    }, []);

    console.log(Movie)
    


  function cuutingText(string ,n)
  {
    return string?.length > n ? string.substr(0,n-1) + '...':string
  }

  return (
    <header 
    className='banner'

    style={{
        backgroundSize: "cover",
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    }}    
    >
    <div className='banner_contents'>
        <h1 className='banner_title'>
        {Movie?.name || Movie?.title}
        </h1>
        <div className='banner_buttons'>
        <button className='banner_button'>Play</button>
        <button className='banner_button'>My List</button>
        </div>
    
    <h1 className='banner_discription'>{cuutingText (Movie?.overview,150)}</h1>


    </div>
    <div className='banner-fadeButton'>

    </div> 
    </header>

  )
}

export default Banner