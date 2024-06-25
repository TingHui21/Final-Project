import Head from 'next/head'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Background.jpg')" }}>
      <Head>
        <title>ByteBazaar - Your Digital Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-white">About ByteBazaar</h1>
          
          <div className="text-lg space-y-6 text-gray-200">
            <p>
              Greetings from ByteBazaar, your one-stop shop for everything tech related!
            </p>
            <p>
              Our mission at ByteBazaar is to power your digital lifestyle with innovative products and first-rate service.
            </p>
            <p>
              We provide dependable hardware for both novice and experienced gamers, programmers, and general users.
            </p>
            <p>
              Our team of professionals has carefully chosen the newest PCs, peripherals, and accessories to guarantee quality and functionality.
            </p>
            <p>
              As part of our dedication to client pleasure, we work hard to make sure your shopping experience is easy and fun.
            </p>
            <p>
              Take a look around our virtual lanes and allow ByteBazaar be your reliable guide through the ever-changing technological landscape.
            </p>

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