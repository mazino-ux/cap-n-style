/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// Updated ProductCard component

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import '../filter/filter.css';
import './product.css';

function ProductCard() {
  const context = useContext(myContext);
  const { mode, sortOption, product, searchkey, filterType, filterPrice, filterColor, filterRange } = context;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    const itemInCart = cartItems.find((item) => item.id === product.id);
    if (itemInCart) {
      toast.info('Item already found in cart');
    } else {
      dispatch(addToCart(product));
      toast.success('Added To Cart Successfully!!');
    }
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);


  // Sorting logic
  const sortProducts = (products) => {
    if (sortOption === "Popular") {
      return products.sort((a, b) => b.rating - a.rating); // Example sorting by rating
    }
    if (sortOption === "New") {
      return products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); // Example sorting by date
    }
    return products;
  };


  // Filter and display products
  const filteredProducts = product
    .filter((obj) => obj.title.toLowerCase().includes(searchkey))
    .filter((obj) => obj.category.toLowerCase().includes(filterType))
    .filter((obj) => obj.price.includes(filterPrice))
    .filter((obj) => (filterColor ? obj.color.toLowerCase() === filterColor.toLowerCase() : true))
    .slice(0, filterRange ? parseInt(filterRange.split('-')[1], 10) : product.length);

  return (
    <section
      className="product-card-container"
    //   style={{ marginLeft: isSidebarOpen ? '250px' : '20px' }}
    >
      <div className="product-card-content">
        <div className="product-card-header">
          <h1 className="product-card-title" style={{ color: mode === 'dark' ? 'white' : '' }}>
            Our Latest Collection
          </h1>
          <div className="product-card-underline"></div>
        </div>

        <div className="product-card-grid">
          {filteredProducts.map((item, index) => {
            const { title, price, imageUrl, id } = item;
            return (
              <div className="product-card-item" key={index}>
                <div className="product-card-inner" style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                  <div onClick={() => navigate(`/productinfo/${id}`)} className="product-card-image-wrapper">
                    <img className="product-card-image" src={imageUrl} alt="product" />
                  </div>

                  <div className="product-card-details">
                    <h2 className="product-card-brand" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                    <h1 className="product-card-item-title" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h1>
                    <p className="product-card-price" style={{ color: mode === 'dark' ? 'white' : '' }}>₦ {price}</p>

                    <div className="product-card-rating">
                      {/* Star ratings as before */}
                      <span className="product-card-rating-stars">
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
                            </svg><br />
                      </span>
                    </div>
                    <div className="product-card-button-wrapper">
                      <button onClick={() => addCart(item)} className="product-card-button">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
