import React from 'react'
import Browse from '../../Components/HomeComponents/BrowseSection'
import UpTo from '../../Components/HomeComponents/UpToSection'
import BestSeller from '../../Components/HomeComponents/BestSellerSection'
import Latest from '../../Components/LatestSection'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Your page description" />
        <title> Home Page </title>

      </Helmet>
     <Browse/>
     <UpTo/>
     <BestSeller/>
     <Latest/>
    </div>
  )
}

export default Home
