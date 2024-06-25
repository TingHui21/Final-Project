"use client"

import { useCart } from '../../contexts/CartContext';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { cart, customerInfo: formData });
    clearCart();
    // Redirect to a thank you page or show a success message
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.ProductPrice) * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Your Order</h2>
          {cart.map((item) => (
            <div key={item.ProductID} className="mb-2">
              <span>{item.ProductName} x {item.quantity}</span>
              <span className="float-right">RM {(parseFloat(item.ProductPrice) * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: RM {total.toFixed(2)}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Customer Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block mb-1">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}