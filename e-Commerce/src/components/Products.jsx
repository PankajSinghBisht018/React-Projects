
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      const productFilter = data.filter(product => product.image !== null);
      setProducts(productFilter.slice(0, 8));
    };
    fetchProduct();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto bg-gray-100 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-1">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg flex flex-col">
            <img src={product.image} alt="" className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-900 font-bold mb-4">${product.price}</p>
            <button className="mt-auto bg-rose-950 text-white py-2 px-4 rounded" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
