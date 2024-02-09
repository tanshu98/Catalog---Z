import React from 'react'
import './Pagination.css';

const Pagination = () => {
  return (
    <div className='pagination'>
        <button className='prev-next-btn'>Previous</button>
        <div className="center-btns previous">
            <button className='btns active'>1</button>
            <button className='btns'>2</button>
            <button className='btns'>3</button>
            <button className='btns'>4</button>
        </div>
        <button className='prev-next-btn'>Next Page</button>
    </div>
  )
}

export default Pagination