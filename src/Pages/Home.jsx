import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Search from '../Components/Search/Search'
import Section from '../Components/Section/Section'
import Pagination from '../Components/Pagination/Pagination'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Search />
        <Section />
        <Pagination />
        <Footer />
    </div>
  )
}

export default Home