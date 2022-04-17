import React, { useEffect, useState } from "react";
import { requests } from "./key";
import axios from "axios";
import "./Banner.css";

function Bannner() {
  const [moviedata, setMovieData] = useState([]);

  let baseUrl = "https://api.themoviedb.org/3";
  let banner_data = `${requests.fetchNetflixOriginals}`;
  let url = `${baseUrl}${banner_data}`;
  let img_url = "https://image.tmdb.org/t/p/w500/";

  async function fetchData() {
    await axios
      .get(url)
      .then((response) => {
        setMovieData(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  //we want to see that one on the back yeah this little question mark is for if if the movie is
  //ever for any reason undefined it won't freak out and and crash it will just say like handle it
  //Math.floor(Math.random() * response.data.results.length - 1)
  //console.log(setMovie);
  //console.log(`${img_url}${moviedata.backdrop_path}`);
  //let image = `${img_url}${moviedata.backdrop_path}`;

  return (
    <header className="container">
      <img
        src={`${img_url}${moviedata?.backdrop_path}`}
        alt={moviedata.name}
        style={{ width: "100%", maxHeight: "30rem" }}
      />
      <div className="bottom-left">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      <div className="top-left">Top Left</div>
      <div className="top-right">Top Right</div>
      <div className="bottom-right">Bottom Right</div>
      <div className="centered">Centered</div>
    </header>
  );
}

export default Bannner;
