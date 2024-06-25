"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, error, isLoading } = useUser()

  return (
    <header className="bg-white bg-opacity-80 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.jpg" alt="Store Logo" width={150} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link href="/products" className="text-gray-800 hover:text-blue-600">Products</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">About Us</Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          {!isLoading && (
            <>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-800">{user.name}</span>
                  {user.picture && (
                    <Image 
                      src={user.picture} 
                      alt={user.name || 'User'} 
                      width={32} 
                      height={32} 
                      className="rounded-full"
                    />
                  )}
                  <Link 
                    href="/api/auth/logout" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <Link href="/api/auth/login" className="text-gray-800 hover:text-blue-600">Sign Up/Login</Link>
              )}
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">Home</Link>
            <Link href="/products" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">Products</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">About Us</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">Contact</Link>
            {!isLoading && (
              <>
                {user ? (
                  <>
                    <span className="block px-3 py-2 text-gray-800">{user.name}</span>
                    <Link 
                      href="/api/auth/logout" 
                      className="block px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full text-center transition duration-300"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link href="/api/auth/login" className="block px-3 py-2 text-gray-800 hover:bg-gray-200">Sign Up/Login</Link>
                )}
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}