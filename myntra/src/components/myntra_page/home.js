// src/components/myntra_page/Home.js
import React from 'react';
import categories from './categoriesData';
import './styles.css';
import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MyntraPage = () => {
  return (
    <div className="container">
      <Box className="banner-container">
        <img src="/images/banner2.jpg" alt="Banner Image 2" className="banner-image-full-width" />
      </Box>
      <Box className="banner-container">
        <img src="/images/banner1.jpg" alt="Banner Image 1" className="banner-image-full-width" />
      </Box>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        className="shop-title"
      >
        <b>SHOP BY CATEGORY</b>
      </Typography>
      <div className="card-container">
        {categories.map((category) => (
          <div className="card" key={category.id}>
            <img src={category.imageUrl} className="card-img-top" alt={category.title} />
            <div className="card-body">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.discount}</p>
              <Link to="/shop">
                <Button variant="contained" color="primary">Shop Now</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyntraPage;
