import React, { useState, useEffect } from "react";
import "./About.css";

export default function About({ data }) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (data == "") {
      console.log("nothing");
    } else {
      setDisplay(true);
    }
  }, [data]);

  const close = () => {
    setDisplay(false);
  };

  return (
    <div className={`container ${display && "showContainer"}`}>
      <div id="moviePoster">
        <img
          id="moviePosterImg"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt=""
        />
      </div>
      <div id="details">
        <h2 id="title">{data?.title || data?.name || data?.original_name}</h2>
        <div className="small-details">
          <p id="date">{data.first_air_date}</p>
          <p id="language">{data.original_language}</p>
          <p id="rating">{data.vote_average}</p>
        </div>
        <h1 id="description">{data.overview}</h1>
        <button className="play">Play</button>
      </div>
      <button id="close" onClick={close}>
        x
      </button>
    </div>
  );
}
