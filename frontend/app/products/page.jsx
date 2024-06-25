import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const products = [
  {
    "ProductID": "A002",
    "ProductName": "Klee Ear Phone",
    "ProductDescription": "These ear phone feature a Klee theme design. Buy them if you're interested!",
    "ProductPrice": "RM 450.00",
    "Stock": 6,
    "imageURL": "/products/earphone.jpg"
  },
  {
    "ProductID": "L001",
    "ProductName": "ASUS ROG Strix G15 Laptop",
    "ProductDescription": "This is a Republic of Gaming Laptop. You can be able to run your programme smoothly with lesser bugs.",
    "ProductPrice": "RM 10500.00",
    "Stock": 3,
    "imageURL": "/products/ASUSROGStrixG15.jpg"
  },
  {
    "ProductID": "L002",
    "ProductName": "Dell Alienware Laptop",
    "ProductDescription": "This is an Dell Alienware Laptop. You can be able to run your programme smoothly with lesser bugs with cheaper price.",
    "ProductPrice": "RM 8500.00",
    "Stock": 4,
    "imageURL": "/products/DellAlienware18.jpg"
  },
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <Head>
        <title>BYTEBAZAAR Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-white bg-black bg-opacity-50 p-4 rounded">Our Products</h1>

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
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors">
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