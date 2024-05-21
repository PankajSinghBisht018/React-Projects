import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../features/CartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  let totalAmount = 0;
  cartItems.forEach(item => {
    totalAmount += item.price * item.quantity;
  });


  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto bg-gray-100 py-8 shadow-xl">
      <h1 className="text-3xl text-center font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="min-w-full text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-2">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover mx-auto" />
                  </td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    </div>
                  </td>
                  <td className="px-4 py-2">${item.price * item.quantity}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => dispatch(removeFromCart(item.id))} className='bg-rose-950  text-white px-4 py-2 mx-20 rounded '>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mr-52 ">
            <button onClick={handleClearCart} className="bg-rose-950 text-white px-4 py-2 mx-20 rounded">
              Clear Cart
            </button>
          </div>
        </>
      )}
      <div className="text-right mr-52 mt-4">
        <h2 className="text-2xl font-bold">Total Amount:{totalAmount}</h2>
      </div>
    </div>
  );
}

export default Cart;
