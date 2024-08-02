
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import myContext from '../../context/data/myContext'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard.jsx'
import Testimonial from '../../components/testimonials/Testimonial'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice.jsx'

function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart)

    console.log(cartItem) 

    const addCart = () => {
      dispatch(addToCart("shirt"));
    }
  
    const deleteCart = () => {
      dispatch(deleteFromCart("shirt"));
    }
  
    
  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div> */}
       <HeroSection />
       <Filter />
       <ProductCard />
       <Track />
       <Testimonial />
    </Layout>
  )
}

export default Home