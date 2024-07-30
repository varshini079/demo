// src/FilterSidebar.js
import React, { useState } from 'react';
import { Typography, Checkbox, FormControlLabel, List, ListItem, Divider, IconButton, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box>
      {/* Toggle Button for Mobile */}
      <IconButton
        sx={{ display: { xs: 'block', sm: 'none' }, margin: '10px' }}
        onClick={toggleSidebar}
      >
        <FilterListIcon />
      </IconButton>
      
      <Box
        sx={{
          width: '300px',
          padding: '20px',
          backgroundColor: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          display: isVisible ? 'block' : { xs: 'none', sm: 'block' } // Toggle visibility on mobile
        }}
      >
        <Box sx={{ marginBottom: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              FILTERS
            </Typography>
            <Typography variant="body2" sx={{ color: '#e40046', cursor: 'pointer' }}>
              CLEAR ALL
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ marginBottom: '20px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              CATEGORIES
            </Typography>
            <IconButton sx={{ padding: '5px' }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <List>
            {['Sarees', 'Kurta Sets', 'Kurtas', 'Jewellery Set', 'Earrings', 'Dress Material', 'Ethnic Dresses', 'Lehenga Choli'].map((category, index) => (
              <ListItem key={index}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Typography variant="body2">{category}</Typography>}
                />
              </ListItem>
            ))}
            <Typography variant="body2" sx={{ color: '#e40046', cursor: 'pointer' }}>
              + 139 more
            </Typography>
          </List>
        </Box>
        <Divider />
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Typography variant="h6" component="div">
              BRAND
            </Typography>
            <IconButton sx={{ padding: '5px' }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <List>
            {['KALINI', 'Mitera', 'Anouk', 'ANAND SAREES','Sangria','Saree Mall','HERE&NOW','Vishudh'].map((brand, index) => (
              <ListItem key={index}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Typography variant="body2">{brand}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
