import "./App.css";
import React from "react";
import ApiDataFetch from "./comp01/ApiDataFetch";
import MovieData from "./MovieData";
import { requests } from "./key";
import Banner from "./Bannner";

function App() {
  return (
    <div className="App">
      <Banner />
      <MovieData
        title="Netflix_Orignal"
        Data_url={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <MovieData title="Netflix_Trending" Data_url={requests.fetchTrending} />
      <MovieData title="Netflix_TopRated" Data_url={requests.fetchTopRated} />
      <MovieData
        title="Netflix_ActionMovies"
        Data_url={requests.fetchActionMovies}
      />
      <MovieData
        title="Netflix_ComedyMovies"
        Data_url={requests.fetchComedyMovies}
      />
      <MovieData
        title="Netflix_HorrorMovies"
        Data_url={requests.fetchHorrorMovies}
      />
      <MovieData
        title="Netflix_RomanceMovies"
        Data_url={requests.fetchRomanceMovies}
      />
      <MovieData
        title="Netflix_Documantaries"
        Data_url={requests.fetchDocumantaries}
      />
    </div>
  );
}

export default App;
