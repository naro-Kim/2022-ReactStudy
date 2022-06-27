import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getMovie } from "../movie_data";

const Movie = () => {
  const params = useParams();
  const [searchParams, setSearchParms] = useSearchParams(); // useSearchParm는 get역할, set은 set역할
  const movie = getMovie(parseInt(params.movieId));
  
  const detail = searchParams.get("detail");

  const handleClick = () =>{
    setSearchParms({detail: detail === "true" ? false : true});
    console.log(detail); 
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Director : {movie.director}</p>
      <p>category : {movie.category}</p>
      <button type="button" onClick={handleClick}>자세히</button>
      {detail === "true" ? <p>{movie.detail}</p>  : " "}
    </div>
  );
};

export default Movie;
