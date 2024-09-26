/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

/* eslint-disable react/jsx-key */
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import { FaTimes, FaRedoAlt } from 'react-icons/fa'; // Import icons for X and Reset

function Filter({ onClose }) {
  const context = useContext(myContext);
  const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;

  const uniqueCategories = [...new Set(product.map(item => item.category))];
  const uniquePrices = [...new Set(product.map(item => item.price))];
  const uniqueColors = [...new Set(product.map(item => item.color))];

  // Reset filters
  const resetFilters = () => {
    setSearchkey('');
    setFilterType('');
    setFilterPrice('');
  };

  const handleShowResults = () => {
    onClose(); // Close the filter modal
  };

  return (
    <div className="filter-container" style={{ backgroundColor: mode === 'dark' ? '#69696996' : '', color: mode === 'dark' ? 'black' : 'black' }}>
      {/* Close Button */}
      <button onClick={onClose} className="close-button">
        <FaTimes />
      </button>

      <div className="filter-content" style={{ paddingTop: '50px', paddingBottom: '20px' }}>

        <div className="filter-header flex justify-between" >
          <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Filter Options</h2>
          
          {/* Reset Filter Button */}
          
        </div>

        {/* Search Input */}
        <div className="sidebar-items" >
        <label style={{ color: mode === 'dark' ? '#b8b8b8' : 'black' }}>Search Product</label>
          <input
            type="text"
            value={searchkey}
            onChange={(e) => setSearchkey(e.target.value)}
            placeholder="Search..."
            className='search'
          />
        </div>

        {/* Filter by Category */}
          <div className="sidebar-items">
            <label style={{ color: mode === 'dark' ? '#b8b8b8' : 'black' }}>Category</label>
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value.toLowerCase())}
            >
              <option value="">Select Category</option>
              {Array.from(
                new Set(
                  uniqueCategories.map(category => {
                    // Normalize category by converting to lowercase and removing trailing "s"
                    return category.toLowerCase().replace(/s$/, '');
                  })
                )
              ).map((normalizedCategory, index) => (
                <option key={index} value={normalizedCategory}>
                  {normalizedCategory}
                </option>
              ))}
            </select>
          </div>



        {/* Filter by Price */}
        <div className="sidebar-items" >
          <label style={{ color: mode === 'dark' ? '#b8b8b8' : 'black' }}>Price Range</label>
          <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)}>
            <option value="">Select Price</option>
            {uniquePrices.map((price, index) => (
              <option key={index} value={price}>{price}</option>
            ))}
          </select>
        </div>

        {/* Filter by Color */}
        <div className="filter-item" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            <div className="color" >
              <label>Color</label>
                <div className="color-content">
                  {[
                    { name: "All", color: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)" },
                    { name: "Black", color: "black" },
                    { name: "Blue", color: "blue" },
                    { name: "Red", color: "red" },
                    { name: "Green", color: "green" },
                    { name: "Yellow", color: "yellow" },
                    { name: "White", color: "white" }
                  ].map((item, index) => (
                    <label key={index} className="color-label">
                      <input type="radio" value={item.name} className='checkbox' />
                      <span className="checkmark" style={{ background: item.color, border: item.name === "White" ? "1px solid #ccc" : "none" }}></span>
                      {item.name}
                    </label>
                  ))}
                </div>
            </div>
        </div>

        {/* Show Results Button */}
        <div className="button_opt ">
          <button onClick={handleShowResults} className="show-results-button">
            Show Results
          </button>

          <button onClick={resetFilters} className="flex items-center reset-button">
              <FaRedoAlt className="mr-2" /> Reset
          </button>
        </div>
      </div>

    </div>
  );
}

export default Filter;
