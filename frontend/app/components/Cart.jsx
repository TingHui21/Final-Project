import { useCart } from '../contexts/CartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.ProductPrice) * item.quantity, 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.ProductID} className="flex justify-between items-center mb-2">
              <span>{item.ProductName}</span>
              <div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.ProductID, parseInt(e.target.value))}
                  className="w-16 mr-2 p-1 border rounded"
                />
                <button
                  onClick={() => removeFromCart(item.ProductID)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <strong>Total: RM {total.toFixed(2)}</strong>
          </div>
          <Link href="/checkout" className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
}