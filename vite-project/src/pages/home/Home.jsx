
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import myContext from '../../context/data/myContext'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard.jsx'
import Testimonial from '../../components/testimonials/Testimonial'
import Track from '../../components/track/Track'

function Home() {
    
  return (
    <Layout>
       <HeroSection />
       <Filter />
       <ProductCard />
       <Track />
       <Testimonial />
    </Layout>
  )
}

export default Home