import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const sidebarItems = [
  { category: 'Overview', items: [] },
  { category: 'Orders', items: ['Orders & Returns'] },
  { category: 'Credits', items: ['Coupons', 'Myntra Credit', 'MynCash'] },
  { category: 'Account', items: ['Profile', 'Saved Cards', 'Saved UPI', 'Saved Wallets/BNPL', 'Addresses', 'Myntra Insider', 'Delete Account'] },
  { category: 'Legal', items: ['Terms of Use', 'Privacy Policy'] },
];

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Box>
      <Button
        sx={{
          display: { xs: 'block', sm: 'none' },
          position: 'relative',
          top: 60,
          left: 0,
          backgroundColor: '#fff',
          border: 'none',
          padding: 1,
          cursor: 'pointer',
          zIndex: 1001,
        }}
        onClick={toggleSidebar}
      >
        ☰
      </Button>
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{
          display: { xs: isSidebarVisible ? 'block' : 'none', sm: 'block' },
          position: { xs: 'fixed', sm: 'static' },
          
          width: { xs: 200, sm: 'auto' },
          background: { xs: 'white', sm: 'inherit' },
          height: { xs: '100%', sm: 'auto' },
          zIndex: { xs: 1000, sm: 'auto' },
        }}
      >
        {sidebarItems.map((section, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={section.category} />
            </ListItem>
            <Divider />
            {section.items.map((item, idx) => (
              <React.Fragment key={idx}>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary={item} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
