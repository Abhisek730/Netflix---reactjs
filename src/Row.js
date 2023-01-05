import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, giveDetails }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // if [], run once when the row loads, and
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // showdetails
  const showDetails = (movie) => {
    giveDetails(movie);
  };

  // const opts = {
  //   height: "390",
  //   width: "640",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // const handleClick = (movie) => {
  //   let newName = movie.name;
  //   console.log(movie.name);
  //   let nameArray = newName.split(" ");
  //   console.log(nameArray);

  //   window.location.href = `https://www.youtube.com/results?search_query=${nameArray[0]}+${nameArray[1]}+${nameArray[2]}+${nameArray[3]}+${nameArray[4]}+trailer`;
  //   //   // console.table(movie?.title)
  //   //   if (trailerUrl) {
  //   //     setTrailerUrl("");
  //   //   } else {
  //   //     console.log("cool");
  //   //     movieTrailer(movie?.name || "")
  //   //       .then((url) => {
  //   //         console.log(movie.name);
  //   //         const urlParams = new URLSearchParams(new URL(url).search);
  //   //         setTrailerUrl(urlParams.get("v"));
  //   //         console.log(urlParams.get("v"));
  //   //       })
  //   //       .catch((error) => console.log(error));
  //   //   }
  // };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_container">
        {movies.map((movie) => {
          return (
            <img
              //onClick={() => handleClick(movie)}
              onClick={() => showDetails(movie)}
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="butni"
            />
          );
        })}
      </div>
      {/* {<Youtube videoId="" opts={opts}></Youtube>} */}
    </div>
  );
}

export default Row;
