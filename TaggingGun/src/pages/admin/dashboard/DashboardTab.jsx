/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus, FaUserTie } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../../fireabase/FirebaseConfig';
import './dashboard.css'

function DashboardTab() {
    const context = useContext(myContext);
    const { mode, product, edithandle, deleteProduct, user } = context;
    const [isOpen, setIsOpen] = useState(false);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const querySnapshot = await getDocs(collection(fireDB, 'orders'));
                const ordersData = querySnapshot.docs.map((doc) => ({ ...doc.data(), orderId: doc.id }));
                setOrders(ordersData);
                setTotalOrders(ordersData.length);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
            }
        };
        fetchOrders();
    }, []);

    useEffect(() => {
        if (product) {
            setTotalProducts(product.length);
        }
    }, [product]);

    useEffect(() => {
        if (orders) {
            setTotalOrders(orders.length);
        }
    }, [orders]);

    useEffect(() => {
        if (user) {
            setTotalUsers(user.length);
        }
    }, [user]);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const OrderDetails = ({ orders, mode }) => (
        <div className="px-4 md:px-0 mb-16">
            <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Order Details</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                        <tr>
                            <th scope="col" className="px-6 py-3">S.No.</th>
                            <th scope="col" className="px-6 py-3">Payment Id</th>
                            <th scope="col" className="px-6 py-3">Image</th>
                            <th scope="col" className="px-6 py-3">Title</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Category</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Address</th>
                            <th scope="col" className="px-6 py-3">Pincode</th>
                            <th scope="col" className="px-6 py-3">Phone Number</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Date</th>
                        </tr>
                    </thead>
                    {orders && orders.length > 0 && (
                        <tbody>
                            {orders.map((order, orderIndex) => (
                                order.cartItems.map((item, itemIndex) => {
                                    const { title, category, imageUrl, price } = item;
                                    return (
                                        <tr key={itemIndex} className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{itemIndex + 1}.</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.paymentId}</td>
                                            <td className="px-6 py-4">
                                                <img className='w-16' src={imageUrl} alt="img" />
                                            </td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>₦{price}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{category}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.name}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.address}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.pincode}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.phoneNumber}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.email}</td>
                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.date}</td>
                                        </tr>
                                    );
                                })
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
    

    return (
        <>
            <div className="container-fluid mx-auto">
                
                <div className="container px-5 mx-auto mb-10">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div 
                                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl"
                                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                            >
                                <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                                    <MdOutlineProductionQuantityLimits size={50} />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>{totalProducts}</h2>
                                <p className="text-purple-500 font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total Products</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div 
                                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl"
                                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                            >
                                <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                                    <AiFillShopping size={50} />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>{totalOrders}</h2>
                                <p className="text-purple-500 font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total Orders</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <div 
                                className="border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl"
                                style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}
                            >
                                <div className="text-purple-500 w-12 h-12 mb-3 inline-block">
                                    <FaUserTie size={50} />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>{totalUsers}</h2>
                                <p className="text-purple-500 font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total Users</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="tab container-fluid mx-auto">


                    <Tabs defaultIndex={0} className="">

                       <TabList className="tablist-container">
                            <Tab>
                                <button type="button" className="tab-button tab-button-purple">
                                    <div className="tab-content">
                                        <MdOutlineProductionQuantityLimits size={24} />
                                        <span>Products</span>
                                        <span className="tab-count">{totalProducts}</span>
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="tab-button tab-button-pink">
                                    <div className="tab-content">
                                        <AiFillShopping size={24} />
                                        <span>Orders</span>
                                        <span className="tab-count">{totalOrders}</span>
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="tab-button tab-button-green">
                                    <div className="tab-content">
                                        <FaUser size={24} />
                                        <span>Users</span>
                                        <span className="tab-count">{totalUsers}</span>
                                    </div>
                                </button>
                            </Tab>
                        </TabList>



                        {/* ====================== PRODUCT ======================== */}
                        <TabPanel>
                            <div className="px-4 md:px-0 mb-16">
                                <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
                                <div className="flex justify-end mb-4">
                                    <button
                                        onClick={() => navigate(`/addproduct`)}
                                        type="button"
                                        className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                                        style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}
                                    >
                                        <div className="flex gap-2 items-center">
                                            Add Product <FaCartPlus size={20} />
                                        </div>
                                    </button>
                                </div>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                            <tr>
                                                <th scope="col" className="px-6 py-3">S.No</th>
                                                <th scope="col" className="px-6 py-3">Image</th>
                                                <th scope="col" className="px-6 py-3">Title</th>
                                                <th scope="col" className="px-6 py-3">Price</th>
                                                <th scope="col" className="px-6 py-3">Category</th>
                                                <th scope="col" className="px-6 py-3">Date</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        {product && product.length > 0 && (
                                            <tbody>
                                                {product.map((item, index) => {
                                                    const { title, price, imageUrl, category, date } = item;
                                                    return (
                                                        <tr key={index} className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                {index + 1}.
                                                            </td>
                                                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                                <img className='w-16' src={imageUrl} alt="img" />
                                                            </th>
                                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                {title}
                                                            </td>
                                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                ₦{price}
                                                            </td>
                                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                {category}
                                                            </td>
                                                            <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                {date}
                                                            </td>
                                                            
                                                            <td className="px-6 py-4">
                                                                <div className="flex gap-2">
                                                                    <div className="flex gap-2 cursor-pointer text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                        
                                                                        <div onClick={() => deleteProduct(item)}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                            </svg>
                                                                        </div>
                                                                        <Link to={'/updateproduct'}>
                                                                            <div onClick={() => edithandle(item)}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                                </svg>
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        )}
                                    </table>
                                </div>
                            </div>
                        </TabPanel>

                        {/* ====================== ORDER ======================== */}
                        
                        <TabPanel>
                            <OrderDetails orders={orders} mode={mode} />
                        </TabPanel>

                        <TabPanel>
                            <div className="relative overflow-x-auto mb-10">
                                <h1 className="text-center mb-5 text-3xl font-semibold underline" style={{ color: mode === 'dark' ? 'white' : '' }}>User Details</h1>
                                <p>Total Users: {totalUsers}</p>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                        <tr>
                                            <th scope="col" className="px-6 py-3">S.No</th>
                                            <th scope="col" className="px-6 py-3">User ID</th>
                                            <th scope="col" className="px-6 py-3">Name</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Date Joined</th>
                                        </tr>
                                    </thead>
                                    {user && user.length > 0 && (
                                        <tbody>
                                            {user.map((item, index) => {
                                                const { userId, name, email, dateJoined } = item;
                                                return (
                                                    <tr key={index} className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {index + 1}.
                                                        </td>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {userId}
                                                        </td>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {name}
                                                        </td>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {email}
                                                        </td>
                                                        <td className="px-6 py-4 text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                            {dateJoined}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    )}
                                </table>
                            </div>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </>
    );
}

export default DashboardTab;
