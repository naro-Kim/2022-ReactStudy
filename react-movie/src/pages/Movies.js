import React from "react";
import { getMovies } from "../movie_data";
import { NavLink, Link, Outlet } from "react-router-dom";

const movies = () => {
  const movies = getMovies();
  return (
    <div>
      <h1>LIKE LION MOVIES</h1>
      <hr />
      <div>
        {movies.map((movie) => (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={({isActive})=>{
              return{
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#ffce00" : " ",
              };
            }}
          >
            <p>{movie.title}</p>
          </NavLink>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default movies;
