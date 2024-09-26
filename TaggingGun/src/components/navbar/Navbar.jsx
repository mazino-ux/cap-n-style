/* eslint-disable react/no-unescaped-entities */
import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
// import { BsFillCloudSunFill, BsSearch, BsX } from 'react-icons/bs'
import { BsFillCloudSunFill, BsSearch } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import myContext from '../../context/data/myContext'
import { RxCross2 } from 'react-icons/rx'
import { FaHome, FaShoppingBag, FaUserShield, FaSignOutAlt, FaUserPlus } from 'react-icons/fa'
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

import { useSelector } from 'react-redux'
import './navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  // const [isSearchVisible, setIsSearchVisible] = useState(false);

  const context = useContext(myContext)
  const { toggleMode, mode, searchkey, setSearchkey } = context

  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.clear('user')
    window.location.href = "/"
  }

  const cartItems = useSelector((state) => state.cart)

    // Function to toggle search input visibility
  // const toggleSearch = () => {
  //   setIsSearchVisible(prev => !prev);
  // };


  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
})

const handleAvatar = e => {
    if (e.target.files[0]){

        setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }
}

  return (
    <div className="bg-white sticky top-0 z-50">
    {/* Mobile menu */}
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className={`relative flex w-full max-w-[600px] flex-col overflow-y-auto pb-12 shadow-xl ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
              
              {/* Menu Links */}
              <div className="flex flex-col px-4 py-6 space-y-6 border-t border-gray-200 mt-[4.4rem]">
              <div className="flex item-center justify-center border-b p-2 avatar">
                  <label htmlFor="file"><img src={avatar.url || "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?ga=GA1.1.967407136.1708519265"} alt="" className="inline-block w-20 h-20 rounded-full" />
                    <p className='text-center ml-[-1rem]'>Update Profile Pic </p>
                   </label>  
                <input type="file" name="file" id="file" style={{display: "none"}} onChange={handleAvatar}   /> 
                   
                </div>
                <Link to={'/'} className="font-medium flex items-center space-x-4 text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <FaHome className="text-2xl hover:text-blue-500 transition duration-300" /> 
                  <span>HOME</span>
                </Link>
                <Link to={'/order'} className="font-medium flex items-center space-x-4 text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  <FaShoppingBag className="text-2xl hover:text-blue-500 transition duration-300" /> 
                  <span>ORDER</span>
                </Link>
                {user?.user?.email === 'mazinoishioma@gmail.com' || user?.user?.email === 'bamidelealabi06@gmail.com' ? (
                  <Link to={'/dashboard'} className="font-medium flex items-center space-x-4 text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <FaUserShield className="text-2xl hover:text-blue-500 transition duration-300" /> 
                    <span>ADMIN</span>
                  </Link>
                ) : null}
                {user ? (
                  <a onClick={logout} className="font-medium flex items-center space-x-4 cursor-pointer text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <FaSignOutAlt className="text-2xl hover:text-blue-500 transition duration-300" /> 
                    <span>LOGOUT</span>
                  </a>
                ) : (
                  <Link to={'/signup'} className="font-medium flex items-center space-x-4 text-lg" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <FaUserPlus className="text-2xl hover:text-blue-500 transition duration-300" /> 
                    <span>SIGN UP</span>
                  </Link>
                )}
              </div>


              {/* Social Media Icons */}
              <div className="mt-auto border-t border-gray-200 px-4 py-6 flex justify-around">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl hover:text-blue-600 transition duration-300" />
                </a>
                <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-2xl hover:text-green-500 transition duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl hover:text-blue-700 transition duration-300" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl hover:text-pink-600 transition duration-300" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>




      {/* =============== DESKTOP_VIEW =============== */}
      <header className="relative bg-white">
  
        <nav aria-label="Top" className="bg-transparent px-4 sm:px-6 lg:px-8 shadow-xl" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              {/* Toggle Button */}
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 lg:hidden logo ml-1"
                onClick={() => setOpen(!open)} 
                style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '' }}
              >
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                {open ? (
                  <RxCross2 className='little_icons' /> // Close Icon when menu is open
                ) : (
                  // Hamburger icon when menu is closed

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M10 17h10" />
</svg>




                  // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  //   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  // </svg>
                )}
              </button>

              {/* Logo */}
              <div className="flex h-16 items-center justify-between">
                <div className="ml-4 flex lg:ml-0 navbar-logo">
                  <Link to={'/'} className="flex items-center">
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLnhRvBWWr9lMS1heAOuJT8m8IPHhEKgcVQQYoMmq7QKyPzlX8AsYb0qdC5Ef1nIwNxw7-zhKQjw3FdIyKjM_7SCrXLnhDldBp8y_H1R4puU21ADCELGOXwqgk_lF6ygSJGKqkBNzMVprBQZjBUy50-fneHiTJPlH7BP3yFEY25woudFFkl3JNHgDjMUI/s320/logo.png"
                      alt="Logo"
                      className="w-16 h-14 md:w-20 md:h-16"
                    />
                    <h1 style={{ color: mode === 'dark' ? 'white' : '' }}>
                      Cap'n'style<span className="text-gray-400"> .</span>
                    </h1>
                  </Link>
                </div>
              </div>

            <div className="mt-1 ml-[1.5rem] search-header">
                {/* Search Input */}
                  <div
                    className="search-container"
                    style={{ 
                             backgroundColor: mode === 'dark' ? '#3b3f45' : '#ffffff', 
                             color: mode === 'dark' ? 'white' : 'black' }}
                  >
                    <input
                      type="text"
                      name="searchkey"
                      id="searchkey"
                      value={searchkey}
                      onChange={e => setSearchkey(e.target.value)}
                      placeholder="Search here"
                      // className="search-input"
                      style={{ flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent', color: mode === 'dark' ? 'white' : 'black' }}
                    /><button className="search-button" style={{ backgroundColor: 'transparent', border: 'none', outline: 'none' }}>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6m4-6h6M4 4h16"
                      />
                    </svg></button>
                </div>

                    
                 
              </div>


              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/order'} className="text-sm font-medium text-gray-700" style={{ color: mode === 'dark' ? 'white' : '', }}>
                  <FaShoppingBag className="inline-block mr-2" />  Order
                  </Link>

                  {user?.user?.email === 'mazinoishioma@gmail.com' || user?.user?.email === 'bamidelealabi06@gmail.com'?
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <FaUserShield className="inline-block mr-2" />  Admin
                  </Link> : ""
                }
                 
                  {user ? <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                  <FaSignOutAlt className="inline-block mr-2" />  Logout
                  </a> : <Link to={'/signup'} className="text-sm font-medium text-gray-700 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <FaUserPlus className="inline-block mr-2" />Signup
                  </Link>}
                </div>

                <div className="hidden lg:ml-8 lg:flex avatar">
                  <label htmlFor="file"><img src={avatar.url || "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033967.jpg?ga=GA1.1.967407136.1708519265"} alt="" className="inline-block w-10 h-10 rounded-full" /></label>  
                <input type="file" name="file" id="file" style={{display: "none"}} onChange={handleAvatar}   /> 
                </div>

                {/* Search */}
                <div className="flex lg:ml-6 mobile-view_head">
                <div className="mobile-view_search flex items-center px-[5px]">
                  <button  className="search-button">
                      <BsSearch  /> 
                    </button>
                  </div>

                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ? (
                      <FiSun className='little_icons'/>
                    ) : (
                      <BsFillCloudSunFill className='little_icons'/>
                    )}
                  </button>


                </div>

                {/* Cart */}
                <div className="cart-items">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cart-icon little_icons">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="cart-count" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
