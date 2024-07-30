import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled ,alpha} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  border: '1px solid black', 
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    marginLeft: theme.spacing(1),
    width:'500px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const pages = ['MEN','WOMEN','KIDS','HOME & LIVING','BEAUTY','STYLE BUDDIES'];

function ResponsiveAppBar() {
  const navigate = useNavigate(); 
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleNavigateToHome = () => {
    navigate('/');
  };

  const handleNavigateToStyleBuddies = () => {
    navigate('/style-buddies');
  };

  const handleNavigateToProfile = () => {
    navigate('/user-profile');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          {/* Menu icon for mobile screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, marginRight: '0px', marginLeft: '-10px' }}>
            <IconButton
              size="small"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              
              }}
            >
              {pages.map((page) => (
                <MenuItem  
                   key={page}
                   onClick={() => {handleCloseNavMenu(); if (page === 'STYLE BUDDIES') {navigate('/style-buddies');
                    }
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile screens */}
          <img 
            src="/Myntra_Logo.png" 
            alt="Logo" 
            style={{ 
              display: { xs: 'block', md: 'none' }, 
              width: '50px', 
              height: '35px', 
              marginRight: 'auto',
              marginLeft: '10px',
            }} 
            onClick={handleNavigateToHome} 
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,marginLeft:'50px'}}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'black', display: 'block',fontSize: '1rem',gap: '10px' }}
                onClick={page === 'STYLE BUDDIES' ? handleNavigateToStyleBuddies : handleCloseNavMenu}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
    </Box>
          <Box sx={{ flexGrow: 0 ,marginRight:'10px' }}>
            <Tooltip >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <IconButton onClick={handleNavigateToProfile}>
                 <img src="/profile.png" alt="Profile" style={{ width: '40px', height: '40px' }}  /></IconButton> 
                 <IconButton> <img src="/wish.png" alt="Wishlist" style={{ width: '30px', height: '25px' }} /></IconButton>
                 <IconButton> <img src="/bag1.png" alt="Bag" style={{ width: '30px', height: '30px' }} /></IconButton>
                </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
