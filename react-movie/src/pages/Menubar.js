import React from "react";
import { Link, Outlet } from "react-router-dom";

const menubar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/movies"}>Movies</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default menubar;
