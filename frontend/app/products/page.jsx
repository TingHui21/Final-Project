"use client";

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../../contexts/CartContext';
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa';

export default function EcommercePage() {
  const { cart } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.ProductPrice.split("RM ")[1]);
    return sum + (price * item.quantity);
  }, 0);
  const { addToCart } = useCart();
  
  useEffect(() => {
    fetch('http://0.0.0.0:8005/get_products/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prev => ({ ...prev, [product.ProductID]: true }));
    setTimeout(() => {
      setAddedToCart(prev => ({ ...prev, [product.ProductID]: false }));
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <Head>
        <title>BYTEBAZAAR Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white bg-black bg-opacity-50 p-4 rounded">Our Products</h1>

        <div className="bg-black bg-opacity-80 p-4 rounded-lg shadow-lg mb-8 text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Cart Summary</h2>
          <p className="text-lg">Items in cart: {cartItemCount}</p>
          <p className="text-lg font-semibold">Total: RM {cartTotal.toFixed(2)}</p>
          <Link href="/cart" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            View Cart
          </Link>
        </div>
        <Link href="/checkout" className="text-4xl text-white hover:text-blue-300 transition-colors">
          <FaShoppingCart />
        </Link>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.ProductID} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-black bg-opacity-70 text-white">
              <div className="relative h-48 mb-4">
                <Image 
                  src={product.imageURL} 
                  alt={product.ProductName} 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.ProductName}</h2>
              <p className="text-gray-300 mb-2">{product.ProductDescription}</p>
              <p className="text-lg font-bold mb-2">{product.ProductPrice}</p>
              <p className="text-sm mb-4">In Stock: {product.Stock}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className={`w-full py-2 px-4 rounded-full transition-colors ${
                  addedToCart[product.ProductID]
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {addedToCart[product.ProductID] ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}