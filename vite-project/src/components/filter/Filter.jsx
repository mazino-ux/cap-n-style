/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Filter() {
    const context = useContext(myContext);
    const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;

    const uniqueCategories = [...new Set(product.map(item => item.category))];
    const uniquePrices = [...new Set(product.map(item => item.price))];

    return (
        <div className="container mx-auto px-4 mt-5">
            <div className="p-5 rounded-lg shadow-xl border border-gray-200" 
                 style={{ backgroundColor: mode === 'dark' ? '#282c34' : 'rgb(243, 244, 246)', color: mode === 'dark' ? 'white' : 'black' }}>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2v6m4-6h6M4 4h16" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="searchkey"
                        id="searchkey"
                        value={searchkey}
                        onChange={e => setSearchkey(e.target.value)}
                        placeholder="Search here"
                        className="block w-full pl-10 pr-4 py-3 rounded-md text-sm border border-gray-300 focus:outline-none focus:border-gray-500"
                        style={{ backgroundColor: mode === 'dark' ? 'rgb(64, 66, 70)' : 'rgb(249, 250, 251)', color: mode === 'dark' ? 'white' : 'black' }}
                    />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="font-medium">Filters</p>
                    <button
                        className="px-4 py-2 text-sm font-medium rounded-md"
                        style={{ backgroundColor: mode === 'dark' ? '#3b3f45' : 'rgb(243, 244, 246)', color: mode === 'dark' ? 'white' : 'black' }}
                        onClick={() => {
                            setSearchkey('');
                            setFilterType('');
                            setFilterPrice('');
                        }}
                    >
                        Reset Filter
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    <select
                        value={filterType}
                        onChange={e => setFilterType(e.target.value)}
                        className="px-4 py-3 w-full rounded-md border border-gray-300 focus:outline-none focus:border-gray-500 text-sm"
                        style={{ backgroundColor: mode === 'dark' ? 'rgb(64, 66, 70)' : 'rgb(249, 250, 251)', color: mode === 'dark' ? 'white' : 'black' }}
                    >
                        <option value="">Select Category</option>
                        {uniqueCategories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    <select
                        value={filterPrice}
                        onChange={e => setFilterPrice(e.target.value)}
                        className="px-4 py-3 w-full rounded-md border border-gray-300 focus:outline-none focus:border-gray-500 text-sm"
                        style={{ backgroundColor: mode === 'dark' ? 'rgb(64, 66, 70)' : 'rgb(249, 250, 251)', color: mode === 'dark' ? 'white' : 'black' }}
                    >
                        <option value="">Select Price</option>
                        {uniquePrices.map((price, index) => (
                            <option key={index} value={price}>{price}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Filter;
