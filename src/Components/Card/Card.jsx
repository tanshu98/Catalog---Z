import React from "react";
import './Card.css';


const Card = (props) => {
        const {eachCardDetails} = props
        console.log(eachCardDetails);
        let {id, name, img, date, views} = eachCardDetails 
        return (
            <div>
              <div className="card">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <div className="image-details">
                  <span className="date-span">{date}</span>
                  <span className="views-span">{views}</span>
                </div>
              </div>
            </div>
          );
};

export default Card;