import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';

function Navbar() {
  return (
    // Navbar Start
    <div className="nav">
      <div className="nav-left">
        <FontAwesomeIcon icon={faFilm} />
        <span>Catalog-Z</span>
      </div>
      <div className="nav-right">
      {/*  eslint-disable-next-line*/}
        <a href={""} className="active">Photos</a>
        <a href={""}>Videos</a>
        <a href={""}>About</a>
        <a href={""}>Contact</a>
      </div>
    </div> // Navbar End
    
  );
}

export default Navbar;
