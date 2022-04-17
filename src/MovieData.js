import React, { useState, useEffect } from "react";
import "./MovieData.css";
import Axios from "axios";
import YouTube from "react-youtube";
import { memo } from "react";

function MovieData({ Data_url, title, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  let baseUrl = "https://api.themoviedb.org/3";
  let url = `${baseUrl}${Data_url}`;
  let img_url = "https://image.tmdb.org/t/p/w500/";

  async function fetchMovies() {
    await Axios.get(url).then((response) => {
      setMovies(response.data.results);
      console.log(response);
    });
  }

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };
  // <YouTube videoId="2g811Eo7K8U" opts={opts} />
  useEffect(() => {
    fetchMovies();
  }, [Data_url]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row_posterLarge"} `}
              src={`${img_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(MovieData);
