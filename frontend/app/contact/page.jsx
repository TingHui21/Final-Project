import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <Head>
        <title>Contact Us - ByteBazaar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-white">Contact Us</h1>
          
          <div className="text-lg space-y-6 text-gray-200">
            <p>
              We&apos;d love to hear from you! Whether you have a question about our products, need technical support, or just want to say hello, don&apos;t hesitate to reach out.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Get in Touch</h2>
              <p>Email: contact@bytebazaar.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Tech Street, Digital City, 12345</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Business Hours for Physical Shop</h2>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">Connect with Us</h2>
              <p className="mb-2">Follow us on social media for the latest updates, promotions, and tech news!</p>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/profile.php?id=61561396232966" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors">
                  <FaFacebook size={24} />
                </Link>
                <Link href="https://www.instagram.com/byte_bazaar2024" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 transition-colors">
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
              Explore Our Products
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}