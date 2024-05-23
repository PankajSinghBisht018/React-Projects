import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';
import { motion } from 'framer-motion';

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexLastProduct = currentPage * itemsPerPage;
  const indexFirstProduct = indexLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexFirstProduct, indexLastProduct);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      const productFilter = data.filter(product => product.image !== null);
      setProducts(productFilter);
    };
    fetchProduct();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto bg-gray-100 py-8">
      <h1 className="text-3xl text-center font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-1">
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg p-4 rounded-lg flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={product.image}
              alt=""
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-900 font-bold mb-4">${product.price}</p>
            <motion.button
              className="mt-auto bg-gray-700 text-white py-2 px-4 rounded"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, backgroundColor: '#3B0D0C' }}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
      <br />
      <div className="flex justify-between bottom-0 mx-4">
        <button
          className={`mt-auto py-2 px-4 bottom-0 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white'}`}
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`mt-auto py-2 px-4 bottom-0 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-700 text-white'}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
