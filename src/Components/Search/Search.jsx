import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Search.css';


const Search = () => {
  return (
    <div className='hero-container'>
        <form>
          <input className="input-search" type="text" placeholder="Search" />
          <button className='search-btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    </div>
  )
}

export default Search