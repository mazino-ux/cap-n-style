/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="relative h-[74.5vh] lg:col-span-2 lg:row-span-3 0  hover:scale-[.97] transition-scale-110">
          <img
            src="https://img.freepik.com/premium-photo/man-with-blue-hat-flower-front-him_1189614-9205.jpg?w=740"
            alt="Main Discount"
            className="w-full h-full object-cover hover:scale-101 transition-scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end px-8 py-4">
            <h2 className="text-white text-3xl lg:text-4xl font-bold">50% Off Now!</h2>
            <p className="text-white text-xl lg:text-2xl">Exclusive Discount on Trendy Caps!</p>
            <p className="text-white mt-2">Sale off 50% only this week</p>
            <Link to={'/allproducts'} className='flex'>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded w-40">View Collections</button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="relative h-40 sm:h-64 lg:h-40 overflow-hidden hover:scale-105 transition-scale-105 ">
            <img
              src="https://img.freepik.com/free-photo/modern-baseball-cap-design-elegant-garment-generated-by-ai_188544-42124.jpg?t=st=1722947228~exp=1722950828~hmac=51ff4dcf877e8e7b9b8757f674384800b6d54d35ab06d2a394d2da7baebac0b4&w=900"
              alt="Stylish Sunglasses"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end px-4 py-2">
              <h2 className="text-white text-xl lg:text-2xl font-bold">Stylish Sunglasses</h2>
              <p className="text-white">50% off Now</p>
              <Link to={'/allproducts'} className='flex'><button className="mt-2 px-2 py-1 bg-black text-white rounded w-40">View Collections</button></Link>
            </div>
          </div>
          <div className="relative h-40 sm:h-64 lg:h-40 overflow-hidden hover:scale-105 transition-scale-105 ">
            <img
              src="https://img.freepik.com/free-photo/shiny-headwear-illuminates-cap-fashion-night-party-generated-by-ai_188544-42209.jpg?t=st=1722947335~exp=1722950935~hmac=f8471a1990898a485256064a4360999d9ade3743aefdeace6ccebd430fe41563&w=900"
              alt="Classic Baseball Caps"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end px-4 py-2">
              <h2 className="text-white text-xl lg:text-2xl font-bold">Classic Baseball Caps</h2>
              <p className="text-white">50% off Now</p>
              <Link to={'/'} className='flex'><button className="mt-2 px-2 py-1 bg-black text-white rounded w-40">View Collections</button></Link>
            </div>
          </div>
          <div className="relative h-40 sm:h-64 lg:h-40 overflow-hidden hover:scale-105 transition-scale-105 ">
            <img
              src="https://img.freepik.com/premium-photo/gold-silver-helmet-with-word-v-it_1282598-11597.jpg?w=740"
              alt="Designer Sunglasses"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-end px-4 py-2">
              <h2 className="text-white text-xl lg:text-2xl font-bold">Designer Sunglasses</h2>
              <p className="text-white">Sale off 50% only this week</p>
              <Link to={'/'} className='flex'><button className="mt-2 px-2 py-1 bg-black text-white rounded w-40">View Collections</button></Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Banner;
