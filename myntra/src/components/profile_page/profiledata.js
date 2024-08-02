import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AutoGridNoWrap from './autogrid'; 
import FetchPosts from './fetchposts'; 
import './profile.css'; 

const userData = {
  profileImage: 'https://randomuser.me/api/portraits/women/50.jpg',
  name: 'Smitha',
  bio: 'Fashion enthusiast. Love to share my style and get inspired by others.'
};


const following = [
  { id: 1, name: 'Ava', profileImage: 'https://randomuser.me/api/portraits/women/56.jpg' },
  { id: 2, name: 'shiva', profileImage: 'https://randomuser.me/api/portraits/men/56.jpg' },
];

const followers = [
  { id: 1, name: 'joy', profileImage: 'https://randomuser.me/api/portraits/men/60.jpg' },
  { id: 2, name: 'Helen', profileImage: 'https://randomuser.me/api/portraits/women/60.jpg' },
];

const Profile = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="user-profile">
      <div className="profile-sidebar">
        <div className="profile-header">
          <img className="profile-images" src={userData.profileImage} alt={userData.name} />
          <h2 className="profile-name">{userData.name}</h2>
          <p className="profile-bio">{userData.bio}</p>
        </div>
      </div>
      <div className="profile-content">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" variant="scrollable" scrollButtons="auto">
                <Tab label="Posts" value="1" />
                <Tab label="Collections" value="2" />
                <Tab label="Following" value="3" />
                <Tab label="Followers" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="posts-list">
              <FetchPosts startIndex={0} limit={1} />
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="collections-list">
                <p>No Collection</p>
              </div>
            </TabPanel>
            <Box sx={{width:350}}>
            <TabPanel value="3">
              <AutoGridNoWrap data={following} />
            </TabPanel>
            <TabPanel value="4">
              <AutoGridNoWrap data={followers} />
            </TabPanel>
            </Box>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
