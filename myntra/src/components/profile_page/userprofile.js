import React from 'react';
import './userprofile.css';
import Sidebar from './sidebar';
import { ImageList, ImageListItem } from '@mui/material';
import FetchPosts from './fetchposts'; 

const collections = [
  {
    id: 1,
    profile_image: 'https://randomuser.me/api/portraits/women/40.jpg',
    name: 'Summer Collection',
    images: [
      'https://i.pinimg.com/236x/9a/4f/1d/9a4f1de49933b83be208e22c4ad61cf2.jpg',
      'https://i.pinimg.com/474x/88/81/7d/88817dc28d0bbe36927c12c3ae79f7e2.jpg',
      'https://i.pinimg.com/236x/aa/f9/6c/aaf96cfa51fb7005456bf59efc8e5e40.jpg',
      'https://i.pinimg.com/236x/ed/d6/2f/edd62f74316a8772d6b2f1060134d617.jpg',
      'https://i.pinimg.com/236x/d5/7e/ac/d57eac8918b4e8deb4799ed668fa0670.jpg',
    ],
  }
 
];

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <div className="profile-info">
          <img src="https://randomuser.me/api/portraits/women/40.jpg" alt="Profile" className="profile-picture" />
          <div className="user-name">Varshitha</div>
        </div>
        <div className="user-posts">
          <h3>User Posts</h3>
          <div className="posts-list">
          <FetchPosts startIndex={8} limit={1} />
    </div>
        </div>
        <div className="user-collection">
          <h3>Collection</h3>
          {collections.map((collection) => (
            <div className="collection-box" key={collection.id} >
              <div className="collection-header">
                <img src={collection.profile_image} alt="Profile" className="profile-image" />
                <div className="collection-details">
                  <h3>{collection.name}</h3>
                </div>
              </div>
              <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
                {collection.images.map((image, index) => (
                  <ImageListItem key={index}>
                    <img
                      srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${image}?w=164&h=164&fit=crop&auto=format`}
                      alt="img"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;