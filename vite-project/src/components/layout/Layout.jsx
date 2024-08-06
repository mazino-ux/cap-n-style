/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
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
        <button className="w-1/2 py-3 text-center bg-gray-300 border-r"
         onClick={() => window.location.href = `/allproducts`}>VIEW PRODUCTS</button>
        <button
          className="w-1/2 py-3 text-center bg-gray-500 text-white"
          onClick={() => window.location.href = `/cart`} // Open the modal when clicking "BUY NOW"
        >
          BUY NOW
        </button>
      </div>
    </div>
  )
}

export default Layout
