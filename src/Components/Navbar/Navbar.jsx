import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
import { FaAlignJustify } from "react-icons/fa6";

function Navbar() {
  return (
    // Navbar Start
    <div className="nav">
      <div className="nav-left">
        <FontAwesomeIcon className="fa-film-icon" icon={faFilm} />
        <a href={"/"}>Catalog-Z</a>
      </div>
      <div className="nav-right">
      {/*  eslint-disable-next-line*/}
      <a href={"/photos"} className="active">Photos</a>
        <a href={"/videos"}>Videos</a>
        <a href={"/about"}>About</a>
        <a href={"/contact"}>Contact</a>
      </div>
      <input type="checkbox"id="checkbox" />
        <label for="checkbox" className="check-btn">
          <FaAlignJustify className="hamburger-icon" />
        </label>
    </div> // Navbar End
    
  );
}

export default Navbar;
