// import axios from './axios';
import React, { useEffect, useState } from 'react'
import requests from './request';
import "./banner.css"
import axios from './axios';


function Banner() {

    const[movie,setMovie]=useState([]);

    // useEffect(()=>{
    //  async function fetchDAta(){
    //  const request=await axios.get(requests.fetchNetflixOriginals)
    //  setMovie(
    //     request.data.results[
    //         Math.floor(Math.random()* request.data.length-1)
    //     ]
    //  );
    //  return request;
    //  }
    //  fetchDAta();
    // },[])

    const fetchApi = async () => {
      const response = await axios.get(requests.fetchTrending);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };

    useEffect(() => {
      fetchApi();
    }, []);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

   return (
     <header
       className="banner"
       style={{
         backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
         backgroundPosition: "center center",
         backgroundSize: "cover",
       }}
     >
       <div className="banner_contents">
         <h1 className="banner_title">
           {movie?.title || movie?.name || movie?.original_name}
         </h1>
         <div className="banner_buttons">
           <button className="banner_btn">Play</button>
           <button className="banner_btn">My List</button>
         </div>
         <p className="banner__description">
           {truncate(
             movie?.overview ||
               "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia explicabo praesentium aut facere non nostrum, eos rem, soluta facilis ut fugiat nisi corrupti earum obcaecati iure doloremque aspernatur ipsam quaerat!",
             280
           )}
         </p>
       </div>
       <div className="banner_fade"></div>
     </header>
   );
}

export default Banner