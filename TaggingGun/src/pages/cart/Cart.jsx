/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import ConfirmationModal from '../conf/ConfirmationModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore'; // Import Firebase Firestore functions
import { fireDB } from '../../fireabase/FirebaseConfig';
import emailjs from 'emailjs-com'; // Example for EmailJS
import './cart.css'

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const [totalAmount, setTotalAmount] = useState(0);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp += parseInt(cartItem.price) * cartItem.quantity;
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const shipping = 1000;
  const grandTotal = shipping + totalAmount;

  const openModal = (item) => {
    setItemToDelete(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setItemToDelete(null);
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    dispatch(deleteFromCart(itemToDelete));
    toast.success('Deleted from Cart Successfully!');
    closeModal();
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const incrementCount = (item) => {
    dispatch(increaseQuantity(item));
  };

  const decrementCount = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleOrderPlacement = async () => {
    const orderData = {
      name,
      address,
      email,
      phoneNumber,
      cartItems,
      totalAmount: grandTotal,
      status: 'Pending',
      date: new Date().toISOString(),
    };

    try {
      // Store order details in Firestore
      await addDoc(collection(fireDB, 'orders'), orderData);

      toast.success('Order placed successfully and stored in the database!');
      sendEmailAndRedirect();
    } catch (error) {
      console.error('Error placing order: ', error);
      toast.error('Failed to place order. Please try again.');
    }
  };

  const sendEmailAndRedirect = () => {
    const emailParams = {
      to_email: 'mazinoishioma@gmail.com',
      user_name: name,
      user_address: address,
      user_email: email,
      user_phone: phoneNumber,
      cart_items: cartItems.map(item => `${item.title} - Quantity: ${item.quantity}, Price: ₦${item.price * item.quantity}`).join(', '),
      total_price: grandTotal
    };

    // Send email using EmailJS
  emailjs.send('capnstyle_taggun', 'template_c714zba', emailParams, 'g8_EkJyXRQoObn3qk') // Use your public key
  .then((response) => {
    toast.success('Order details sent via email!');


        // Redirect to WhatsApp
        const whatsappMessage = `Hello, I would like to place an order. Total: ₦${grandTotal}. Items: ${cartItems.map(item => `${item.title} (Qty: ${item.quantity})`).join(', ')}`;
        window.location.href = `https://wa.me/2348104694214?text=${encodeURIComponent(whatsappMessage)}`;
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast.error('Failed to send order details via email.');
      });
  };

  return (
    <Layout>
      <div
        className={`min-h-screen pt-5 pb-10 transition-colors duration-300 ${
          mode === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'
        }`}
      >
        <h1 className="mb-10 text-center text-3xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col md:flex-row md:space-x-6">
          
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className={`mb-6 rounded-lg border drop-shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:justify-between ${
                  mode === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt="product-image"
                  className="w-full rounded-lg sm:w-40 object-cover"
                />
                <div className="mt-5 sm:mt-0 sm:ml-4 flex flex-col sm:flex-row justify-between w-full">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="mt-2 text-sm">{item.description}</p>
                    <p className="mt-2 text-sm font-bold">₦{item.price * item.quantity}</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <button
                        onClick={() => incrementCount(item)}
                        className="px-2 py-1 bg-gray-200 rounded text-sm text-gray-800 hover:bg-gray-300 transition"
                      >
                        +
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => decrementCount(item)}
                        className="px-2 py-1 bg-gray-200 rounded text-gray-800 text-sm hover:bg-gray-300 transition"
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div
                    onClick={() => openModal(item)}
                    className="mt-4 sm:mt-0 sm:ml-6 flex justify-end text-gray-600 cursor-pointer hover:text-red-500 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.226 2.013H6.086a2.25 2.25 0 01-2.226-2.013L5.98 5.446m12.994-.623a2.25 2.25 0 012.162 2.164v.563M6.02 5.446a2.25 2.25 0 00-2.162 2.164v.563m15.032 0H4.848"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          <div
            className={`mt-6 h-full rounded-lg border p-8 shadow-xl transition-colors duration-300 transform hover:scale-105 ${
              mode === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
            } md:mt-0 md:w-1/3`}
          >

             {/* ================== TOTAL ==================== */}
            <div className="total-section" style={{ color: mode === 'dark' ? 'black' : '', }}>
              <div className="total-amount">
                <p>Subtotal:</p>
                <p>₦{totalAmount}</p>
              </div>
              <div className="total-amount">
                <p>Shipping:</p>
                <p>₦{shipping}</p>
              </div>
              <div className="total-amount">
                <p>Grand Total:</p>
                <p>₦{grandTotal}</p>
              </div>
            </div>
            <div className="input-section" style={{ color: mode === 'dark' ? 'black' : '', }}>
              <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <button className="submit-button" disabled={!name || !address || !email || !phoneNumber} onClick={handleOrderPlacement}>
                Place Order
              </button>
            </div>
      
          </div>


        </div>


        {/* Confirmation Modal */}
        <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDelete} />
      </div>
    </Layout>
    
  );
}

export default Cart;
