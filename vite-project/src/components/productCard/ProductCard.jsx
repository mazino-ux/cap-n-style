/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../../redux/cartSlice';
// import { toast } from 'react-toastify';

function ProductCard() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section className="text-gray-600 body-font">
            <div className="container-fluid px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-themeColor rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Blue Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦8500</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Green Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦7500</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Red Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦9000</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Black Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦9500</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Blue Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦8500</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Green Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦7500</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Red Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦9000</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <div onClick={() => window.location.href = `/productinfo/$`} className="flex justify-center cursor-pointer">
                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmHE3YYHkMiZgUBtpkmSda-ag9HGdLy75Lwn6Ky0QhNxpWBosR5noNCJrMKZbZbieFZEtUzvTi52W4KPqDdjfkeOHoYLCZTrduKlkhlP2DoFgsHGSf1W0qZh2WeKayXik_IpMR2f-MIz5ZRbOBEH-_c_9R7ygVBZ7jb8NJcncl_6o8BzKE9lZ3lWmtRkg/s320/black_versace_shade.jpeg" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>Cap'n'style</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Black Cap</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₦9500</p>
                                <div className="flex justify-center">
                                    <button type="button" 
                                    className="focus:outline-none text-white bg-green-900 focus:ring-4 focus:ring-purple-300 font-medium hover:shadow-lg hover:shadow-gray-500 hover:bg-green-700 rounded-lg text-sm w-full py-2">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProductCard;
