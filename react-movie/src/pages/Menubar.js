import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  //root로 돌아가는 function comp
  const home = () =>{
    navigate("/");
  };

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
      <button onClick={home} type="button">Home</button>
    </div>
  );
};

export default Menubar;
