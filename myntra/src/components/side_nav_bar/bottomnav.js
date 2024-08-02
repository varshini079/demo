import React from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import HomeIcon from '@mui/icons-material/Home';
export default function FixedBottomNavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto',width:360, bottom: 0,left:0,right:0}}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between' }}>
        <IconButton color="inherit" onClick={handleNavigation('/style-buddies')}>
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleNavigation('/collections')}>
          <CollectionsIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleNavigation('/camera')}>
          <CameraAltOutlinedIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleNavigation('/leaderboard')}>
          <LeaderboardIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleNavigation('/rewards')}>
          <AutoGraphIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
