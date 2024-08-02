import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import ShareIcon from '@mui/icons-material/Share';
import './singlepost.css';
import postsData from '../posts.json';
import SimpleSlider from './slider';
import screenshot1 from './images/Screenshot 2024-07-31 170302.png';
import screenshot2 from './images/Screenshot 2024-07-31 175939.png';
import screenshot3 from './images/Screenshot 2024-07-31 180141.png';

const images_ss = [screenshot1, screenshot2, screenshot3];
function formatUserName(userName) {
  return userName
      .split('_') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join('');
}

const SinglePost = () => {
  const { id } = useParams();
  const post = postsData.find(post => post.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { userImage, userName, images, description, review, tags, urls } = post;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box className="singlepost-container">
      <Card variant="outlined" className="singlepost-card">
        <Box className="singlepost">
          <Box className="singlepost-left">
            <CardContent orientation="horizontal" className="singlepost-card-content">
              <Link to={`/user/:userId`}>
                <Box className="singlepost-avatar-box">
                  <img size="sm" src={userImage} className="singlepost-avatar" alt="User" />
                  <Typography className="singlepost-username">{formatUserName(userName)}</Typography>
                </Box>
              </Link>
            </CardContent>

            <CardOverflow sx={{ borderRadius: 1 }}>
              <SimpleSlider images={images} /> 
            </CardOverflow>

            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>
                {description}
              </Typography>
            </CardContent>

            <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1, gap: 5, marginLeft: '2px', justifyContent: 'space-around' }}>
              <IconButton variant="plain" color="neutral" size="sm">
                <FavoriteBorder />
              </IconButton>
              <IconButton variant="plain" color="neutral" size="sm">
                <BookmarkBorderRoundedIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardContent>
          </Box>

          <Box className="singlepost-right">
              <CardContent className="singlepost-info" sx={{ fontSize: '2em' }}>
                <Typography className="singlepost-info-item"><strong>Review:</strong> {review}</Typography>
                <Typography className="singlepost-info-item"><strong>Tags:</strong> {tags.join(', ')}</Typography>
              </CardContent>

              <CardContent className="singlepost-url-list">
                <div className="singlepost-url-scroller">
                  {currentIndex > 0 && (
                    <button className="scroll-button left" onClick={handlePrev}>
                      &lt;
                    </button>
                  )}
                  <div className="singlepost-url-images">
                    {images_ss.slice(currentIndex, currentIndex + 3).map((image, index) => (
                      <a href={urls[currentIndex + index]} key={index} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={`Shop the Magic ${index + 1}`} className="singlepost-url-image" />
                      </a>
                    ))}
                  </div>
                  {currentIndex + 3 < images.length && (
                    <button className="scroll-button right" onClick={handleNext}>
                      &gt;
                    </button>
                  )}
                </div>
              </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default SinglePost;