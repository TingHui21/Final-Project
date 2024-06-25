import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/products/earBuds.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/products/iMac.jpg' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/products/iMac.jpg' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/products/keyBoard.jpg' },
  { id: 5, name: 'Product 5', price: 59.99, image: '/products/RazerBasiliskV3Pro.jpg' },
  { id: 6, name: 'Product 6', price: 69.99, image: '/products/keyBoard.jpg' },
]

export default function EcommercePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <Head>
        <title>BYTEBAZAAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow bg-white bg-opacity-80">
              <div className="relative h-48 mb-4">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}