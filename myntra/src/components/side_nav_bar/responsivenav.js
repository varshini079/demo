import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SideNav from './sidenav';
import FixedBottomNavBar from './bottomnav';

export default function MainLayout({ children }) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <CssBaseline />
      {isMobile ? <FixedBottomNavBar /> : <SideNav />}
      <Box
        sx={{
          display: 'flex',
          mt: isMobile ? 0 : -8,
          flexGrow: 1,
          p: isMobile ? 0 : 3,
          marginLeft: isMobile ? 0 : -10,


        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: isMobile ? 0 : 3,
            transition: 'padding 0.3s',
            width:isMobile ? '100%' : 0,
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
