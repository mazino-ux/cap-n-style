/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
import Modal from '../modal/Modal' // Import your Modal component

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="content mb-16">{children}</div>
      <Footer />
      {/* Bottom Navbar for small screens */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-between bg-white border-t shadow-md md:hidden">
        <button className="w-1/2 py-3 text-center bg-gray-300 border-r" > 
          <Link to={'/allproducts'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">VIEW PRODUCTS</Link>
          </button>
        <button className="w-1/2 py-3 text-center bg-gray-500 text-white">
          <Link to={'/cart'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"> BUY NOW </Link>
        </button>
      </div>
    </div>
  )
}

export default Layout
