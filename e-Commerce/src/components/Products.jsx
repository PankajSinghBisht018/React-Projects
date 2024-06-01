import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {Button,Grid,Typography,Card,CardContent,CardMedia} from '@mui/material';

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SnapMart- Products</title>
        <meta name='description' content='Products' />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Helmet>
      <div className="container mx-auto py-8">
        <Typography variant="h3" align="center" gutterBottom>
          Products
        </Typography>
        <Grid container spacing={3}>
          {currentProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '80vh' }}>
                  <CardMedia
                    component="img"
                    src={product.image}
                    alt=""
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {product.description.split(' ').slice(0, 20).join(' ')}...
                    </Typography>
                    <Typography variant="h5" color="text.primary" paragraph>
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                    style={{ marginLeft:"20px" ,marginRight:"20px" ,marginBottom:"20px"}}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <br />
        <div className="flex justify-between bottom-0 mx-4">
          <Button
            variant="contained"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <Typography>
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default Products;
