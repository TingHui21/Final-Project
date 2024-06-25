"use client";

import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../../contexts/CartContext';

export default function CheckoutPage() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    phoneNumber: '',
    creditCardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Form submitted:', formData);
    // You might want to clear the cart and redirect to a confirmation page here
  };

  const cartTotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.ProductPrice.split("RM ")[1]);
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <Head>
        <title>BYTEBAZAAR Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white bg-black bg-opacity-50 p-4 rounded">Checkout</h1>

        <div className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.ProductID} className="flex justify-between mb-2">
              <span>{item.ProductName} x {item.quantity}</span>
              <span>{item.ProductPrice}</span>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">Total: RM {cartTotal.toFixed(2)}</div>
        </div>

        <form onSubmit={handleSubmit} className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg text-white">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-2">Delivery Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="creditCardNumber" className="block mb-2">Credit Card Number</label>
            <input
              type="text"
              id="creditCardNumber"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={handleInputChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="cvv" className="block mb-2">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="expiryDate" className="block mb-2">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
                placeholder="MM/YY"
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
            Place Order
          </button>
        </form>
      </main>
      
      <Footer />
    </div>
  );
}