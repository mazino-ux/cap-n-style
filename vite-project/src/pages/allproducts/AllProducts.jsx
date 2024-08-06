/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

function Allproducts() {
  const context = useContext(myContext)
  const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
      filterPrice,setFilterPrice} = context

  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.cart);
  console.log(cartItems)

  const addCart = (product)=> {
      dispatch(addToCart(product));
      toast.success('Succesfully Added To Cart!');

  }

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Filter/>
      <section className="text-gray-600 body-font">
            <div className="container-fluid px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-gray-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
                     .filter((obj) => obj.category.toLowerCase().includes(filterType))
                     .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => {
                        const { title, price, description, imageUrl,id } = item;
                        return (
                          <div  className="p-4 md:w-1/4  drop-shadow-lg " key={index}>
                              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >

                                  <div onClick={()=> window.location.href = `/productinfo/${item.id}`} className="flex justify-center cursor-pointer" >
                                      <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                                  </div>

                                  <div className="p-5 border-t-2">
                                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Cap'n'style</h2>

                                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>

                                      {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                      <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦ {price}</p>

                                      <span className="flex items-center">
                                          <svg
                                              fill="currentColor"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              className="w-4 h-4 text-yellow-500"
                                              viewBox="0 0 24 24"
                                          >
                                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                          </svg>
                                          <svg
                                              fill="currentColor"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              className="w-4 h-4 text-yellow-500"
                                              viewBox="0 0 24 24"
                                          >
                                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                          </svg>
                                          <svg
                                              fill="currentColor"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              className="w-4 h-4 text-yellow-500"
                                              viewBox="0 0 24 24"
                                          >
                                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                          </svg>
                                          <svg
                                              fill="currentColor"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              className="w-4 h-4 text-yellow-500"
                                              viewBox="0 0 24 24"
                                          >
                                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                          </svg>
                                          <svg
                                              fill="none"
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              className="w-4 h-4 text-yellow-500"
                                              viewBox="0 0 24 24"
                                          >
                                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                          </svg>
                                      </span><br />


                                      <div className=" flex justify-center">
                                          <button onClick={()=>addCart(item)} type="button" className="focus:outline-none text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      )
                    })}




                </div>

            </div>
        </section >
    </Layout>
  )
}

export default Allproducts