/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { BsX, BsSliders, BsChevronDown } from 'react-icons/bs'; // Importing icons
import myContext from '../../context/data/myContext';
import Filter from './Filter';
import "./sidebar.css";

const Sidebar = () => {
  const {  mode, sortOption, setSortOption } = useContext(myContext);  // Get sortOption from context
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter modal

  const toggleFilter = () => {
    setShowFilter(!showFilter); // Toggle filter visibility
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (option) => {
    setSortOption(option);  // Update sort option in context
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="sidebar_head flex justify-between ">

       <h1 
        className="flex items-center cursor-pointer" 
        onClick={toggleFilter} 
        style={{ color: mode === 'dark' ? 'white' : '' }}
      >
        <BsSliders className="mr-2" />
        Show Filter
      </h1>

      {/* Filter Modal */}
      {showFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div 
            className="filter-modal-container"
            style={{ maxHeight: '80vh', overflowY: 'scroll' }}
          >
            <Filter onClose={toggleFilter} transition-3s />
          </div>
        </div>
      )}

        <div className="sort-by flex items-center mr-[10px]" style={{ color: mode === 'dark' ? 'white' : '' }}>
          <p>Sort by</p>
          <div className="relative"> 
            <span
              className="sort-option font-bold flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              {sortOption} <BsChevronDown className="ml-1" /> 
            </span>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="dropdown absolute border rounded shadow-md mt-2" 
                    style={{ backgroundColor: mode === 'dark' ? 'black' : '' }}>
                <ul className="dropdown-menu">
                  <li className="dropdown-item p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSortChange("Popular")}>  Popular </li>
                  <li className="dropdown-item p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSortChange("New")}>  New</li>
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
