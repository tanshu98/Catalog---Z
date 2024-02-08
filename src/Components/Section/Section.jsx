import React from 'react'
import './Section.css';
import Card from '../Card/Card';
import {group1,group2,group3, group4, group5, group6, group7,group8,group9,group10,group11,group12,group13,group14,group15,group16} from '../../assets/AssetData/Data';


let cardItemsData = [
  {
    id: 1,
    name: "clocks",
    img: group1,
    date: "18 Oct 2020",
    views: "9,906",
  },
  {
    id: 2,
    name: "plants",
    img: group2,
    date: "14 Oct 2020",
    views: "16,100",
  },
  {
    id: 3,
    name: "morning",
    img: group3,
    date: "12 Oct 2020",
    views: "12,460",
  },
  {
    id: 4,
    name: "pinky",
    img: group4,
    date: "10 Oct 2020",
    views: "11,402",
  },
  {
    id: 5,
    name: "hangers",
    img: group5,
    date: "24 Sep 2020",
    views: "16,008",
  },
  {
    id: 6,
    name: "perfumes",
    img: group6,
    date: "20 Sep 2020",
    views: "12,860",
  },
  {
    id: 7,
    name: "bus",
    img: group7,
    date: "16 Sep 2020",
    views: "10,900",
  },
  {
    id: 8,
    name: "new york",
    img: group8,
    date: "12 Sep 2020",
    views: "11,300",
  },
  {
    id: 9,
    name: "abstract",
    img: group9,
    date: "10 Sep 2020",
    views: "42,700",
  },
  {
    id: 10,
    name: "flowers",
    img: group10,
    date: "8 Sep 2020",
    views: "11,402",
  },
  {
    id: 11,
    name: "rosy",
    img: group11,
    date: "4 Sep 2020",
    views: "32,906",
  },
  {
    id: 12,
    name: "rocki",
    img: group12,
    date: "28 Oct 2020",
    views: "50,700",
  },
  {
    id: 13,
    name: "purple",
    img:  group13,
    date: "22 Aug 2020",
    views: "107,510",
  },
  {
    id: 14,
    name: "sea",
    img:  group14,
    date: "14 Aug 2020",
    views: "118,006 ",
  },
  {
    id: 15,
    name: "turtle",
    img: group15,
    date: "9 Aug 2020",
    views: "121,300 ",
  },
  {
    id: 16,
    name: "peace",
    img: group16,
    date: "3 Aug 2020",
    views: "21,204",
  },
];

const Section = () => {
  return (
    <div>
        <div className="section-heading">
        <span className="latest-photos">Latest Photos</span>
        <span className="page-span">Page <button>1</button>of 200</span>
      </div>
      <div className="section-content">
        <div className="card-container">
          {cardItemsData.map(eachCard => (
            <Card eachCardDetails={eachCard} key={eachCard.id}/>
          ))}            
        </div>
      </div>
    </div>
  )
}

export default Section