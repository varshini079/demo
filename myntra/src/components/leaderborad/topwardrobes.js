import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../backend_services/firebaseconfig';
import './topwardrobes.css'; 

const TopCollections = () => {
  const [topCollections, setTopCollections] = useState([]);

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');

  const getCols = () => {
    if (isSmallScreen) return 2;
    if (isMediumScreen) return 2;
    return 3;
  };

  useEffect(() => {
    const fetchCollections = async () => {
      const collectionsRef = collection(db, 'wardrobe_collections');
      const collectionsSnapshot = await getDocs(collectionsRef);
      const collections = collectionsSnapshot.docs.map(doc => {
        const data = doc.data();
        const score = 6 * data.likes + 2 * data.views;
        return { id: doc.id, ...data, score };
      });

      const sortedCollections = collections.sort((a, b) => a.score - b.score);
      setTopCollections(sortedCollections);
    };

    fetchCollections();
  }, []);

  return (
    <div className="top-collections-container">
      <h2 className="header">Top Collections</h2>
      <div className="collections-wrapper">
        <div className="collection-list">
          {topCollections.map((collection) => (
            <div className="collection-box" key={collection.id}>
              <div className="collection-header">
                <img src={collection.profile_image} alt="Profile" className="profile-image" />
                <div className="collection-details">
                  <h3>{collection.name}</h3>
                </div>
              </div>
              <ImageList sx={{ width: '100%', height: 450 }} cols={getCols()} rowHeight={164}>
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
};

export default TopCollections;
