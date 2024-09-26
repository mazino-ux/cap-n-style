/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import 'tailwindcss/tailwind.css';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

function Terms() {
  const { mode } = useContext(myContext);

  return (
    <Layout>
      <div
        className="p-5"
        style={{
          backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : 'rgb(245 245 245)',
          color: mode === 'dark' ? 'white' : 'black',
        }}
      >
       <div
          className="container mx-auto p-5"
          style={{
            backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : 'white',
            color: mode === 'dark' ? 'white' : 'black',
            boxShadow: mode === 'dark' ? '0 4px 15px rgba(0, 0, 0, 0.75)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <section id="terms-of-service" className="content-section">
            <h1 className="text-center text-xl mb-5">Terms of Service</h1>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2">Terms of Service for Capnstyle</h2>
            <p className="text-sm mt-3">
              <strong>Effective Date:</strong> 25-07-2024
            </p>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 1. Acceptance of Terms</h2>
            <p className="text-sm mt-3">
              By accessing and using the website <span onClick={()=> window.location.href = `/`}>[www.capnstyle.com]</span> and purchasing products from Capnstyle, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our website or services.
            </p>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 2. Use of the Website</h2>
            <p className="text-sm mt-3">You agree to use the website only for lawful purposes and in accordance with these Terms of Service. You agree not to:</p>
            <ul className="list-disc list-inside text-sm mt-3">
              <li>Use the website in any way that violates any applicable federal, state, local, or international law.</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.</li>
              <li>Impersonate or attempt to impersonate Capnstyle, a Capnstyle employee, another user, or any other person or entity.</li>
            </ul>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 3. Account Registration</h2>
            <p className="text-sm mt-3">To access certain features of the website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your password and account and for all activities that occur under your account.</p>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 4. Product Information and Orders</h2>
            <p className="text-sm mt-3">We strive to ensure that the information on our website is accurate and complete. However, we do not guarantee that the descriptions, prices, or other content on the website are accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.</p>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 5. Pricing and Payment</h2>
            <p className="text-sm mt-3">All prices are listed in [Currency] and are subject to change without notice. Payment must be made at the time of purchase using the payment methods provided on the website. You agree to pay all charges incurred by you or any users of your account and credit card (or other applicable payment mechanism) at the prices in effect when such charges are incurred.</p>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 6. Shipping and Returns</h2>
            <p className="text-sm mt-3">Please refer to our Shipping Policy and Return Policy for information on shipping and returns. These policies are incorporated into these Terms of Service by reference.</p>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 7. Intellectual Property Rights</h2>
            <p className="text-sm mt-3">The website and its entire contents, features, and functionality are owned by Capnstyle, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as follows:</p>
            <ul className="list-disc list-inside text-sm mt-3">
              <li>The website and its entire contents, features, and functionality are owned by Capnstyle, its licensors, or other providers of such material.</li>
              <li>The website and its contents are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</li>
              <li>You may not reproduce, distribute, modify, create derivative works of, publicly display, or publicly perform the website or its contents.</li>
            </ul>
            <h2 className="text-lg border-b-2 border-gray-200 pb-2 mt-4">SECTION 8 - CONTACT INFORMATION</h2>
            <p className="text-sm mt-3">Questions about the Terms of Service should be sent to us at <a href="mailto:bamidelealabi06@gmail.com" className="text-blue-500 underline">bamidelealabi06@gmail.com</a>.</p>
          </section>
        </div>

        <div className="fixed bottom-5 right-10 z-50">
            <a href='https://wa.me/2349021612220?text=' target='_blank'>
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWLBBLSRztfjLNAYWWNURRVQO7S5NclXtiXxR7uiUXubd2P5_IhAoVbK4RPDFulg3mo-2QQAV46M7aF5kvpHRN9rkwAIP5-IApwj8fum8g11-g_Ub9zYiwZsbhTcmn8pKISZ30zmKLyXixOJRWAEseHclxrA4Ozd7whPqdQEUuL23JeH3ehu81galkp1M/s320/whatsapp_logo.png" alt="WhatsApp Logo" className="w-12 h-auto rounded-full" />
            </a>
          </div>
      </div>
    </Layout>
  );
}

export default Terms;
