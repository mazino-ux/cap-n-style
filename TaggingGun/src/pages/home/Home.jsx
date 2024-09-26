
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
// import Filter from '../../components/filter/Filter'
import VideoAnimation from '../../components/video/VideoAnimation'
import Sidebar from '../../components/filter/Sidebar'
import ProductCard from '../../components/productCard/ProductCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice.jsx'

function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart)
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    console.log(cartItem) 

  
    
  return (
    <Layout>
       <Sidebar />
       {/* <Filter isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
       {/* <ProductCard isSidebarOpen={isSidebarOpen} /> */}
       <ProductCard />
       <VideoAnimation />
    </Layout>
  )
}

export default Home