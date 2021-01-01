import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const get = await axios.get(request.fetchNetflixOriginal);
      setMovie(
        get.data.results[
          Math.floor(Math.random() * get.data.results.length - 1)
        ]
      );

      return get;
    };
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/** Background image */}
        {/* title */}
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;
