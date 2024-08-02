// src/ProductCard.js
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProductCard = ({ product, addCuration }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newCurationName, setNewCurationName] = useState('');
  const [visibility, setVisibility] = useState('public'); 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setNewCurationName('');
    setVisibility('public'); 
  };

  const handleAddCuration = (curation) => {
    console.log(`Add product to ${curation}`);
    handleMenuClose();
  };

  const handleCreateCuration = () => {
    // Implement logic to create a new curation
    console.log(`Create new curation: ${newCurationName} with visibility: ${visibility}`);
    addCuration({ name: newCurationName, visibility });
    handleDialogClose();
  };

  return (
    <>
    <Box sx={{marginTop:'15px'}}>
    <Card sx={{ maxWidth: 270, marginBottom: '10px',height:525}}>
      <CardMedia
      component="img"
      sx={{
        width: '100%',         
        height: '400px',       
        objectFit: 'contain',  
        objectPosition: 'top',
      }}
      image={product.image}
      alt={product.name}
    />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between',marginTop:'-15px' }}>
          <Typography variant="h6" component="div">
            {product.brand}
          </Typography>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Typography variant="body1" component="div">
            Rs. {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
            Rs. {product.originalPrice}
          </Typography>
        </Box>
        <Typography variant="body2" color="error">
          {product.discount}
        </Typography>
      </CardContent>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleAddCuration('ethnic')}>Add to Ethnic</MenuItem>
        <MenuItem onClick={() => handleAddCuration('casuals')}>Add to Casuals</MenuItem>
        <MenuItem onClick={() => handleAddCuration('for home')}>Add to For Home</MenuItem>
        <MenuItem onClick={handleDialogOpen}>Create New Collection</MenuItem>
      </Menu>

      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Collection</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Curation Name"
            fullWidth
            variant="standard"
            value={newCurationName}
            onChange={(e) => setNewCurationName(e.target.value)}
          />
          <RadioGroup
            aria-label="visibility"
            name="visibility"
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
            style={{ marginTop: '20px' }}
          >
            <FormControlLabel
              value="public"
              control={<Radio />}
              label="Public"
            />
            <FormControlLabel
              value="private"
              control={<Radio />}
              label="Private"
            />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleCreateCuration}>Create</Button>
        </DialogActions>
      </Dialog>
    </Card>
    </Box>
    </>
  );
};

export default ProductCard;
