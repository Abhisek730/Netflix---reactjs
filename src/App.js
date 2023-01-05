import "./App.css";
import React, { useState } from "react";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [movieDetail, setMovieDetail] = useState("");

  const giveDetail = (movie) => {
    setMovieDetail(movie);
  };
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        giveDetails={giveDetail}
      ></Row>
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        giveDetails={giveDetail}
      ></Row>
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        giveDetails={giveDetail}
      ></Row>
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        giveDetails={giveDetail}
      ></Row>
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        giveDetails={giveDetail}
      ></Row>
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        giveDetails={giveDetail}
      ></Row>
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        giveDetails={giveDetail}
      ></Row>
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        giveDetails={giveDetail}
      ></Row>
      <About data={movieDetail}></About>
    </div>
  );
}

export default App;
