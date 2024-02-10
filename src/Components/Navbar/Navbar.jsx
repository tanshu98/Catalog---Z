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
        <span>Catalog-Z</span>
      </div>
      <div className="nav-right">
      {/*  eslint-disable-next-line*/}
        <a href={""} className="active">Photos</a>
        <a href={""}>Videos</a>
        <a href={""}>About</a>
        <a href={""}>Contact</a>
      </div>
      <input type="checkbox"id="checkbox" />
        <label for="checkbox" className="check-btn">
          <FaAlignJustify className="hamburger-icon" />
        </label>
    </div> // Navbar End
    
  );
}

export default Navbar;
