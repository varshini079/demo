import React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import SimpleSlider from './slider';
import './card.css';

function formatUserName(userName) {
  return userName
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

const Post = ({ id, userImage, userName, images, description }) => {
  return (
    <Box className="post-container">
      <Card variant="outlined" className="post-card">
        <CardContent orientation="horizontal" className="post-card-content">
        <Link to={`/user/:userId`}>
          <Box className="post-avatar-box">
            <img
              size="sm"
              src={userImage}
              alt="img"
              className="post-avatar"
            />
            <Typography className="post-username">
              {formatUserName(userName)}
            </Typography>
          </Box>
        </Link>
        </CardContent>
        <CardOverflow sx={{ borderRadius: 1 }}>
          <SimpleSlider images={images} />
        </CardOverflow>
        <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}>
          <CardContent sx={{ alignItems: 'center', marginTop: '-30px' }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: 'flex', alignItems: 'center', color: 'black', marginTop: '15px', justifyContent: 'center' }}
            >
              {description}
            </Typography>
          </CardContent>
         </Link>

        <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1, marginTop: '-15px', gap: 5, marginLeft: '2px', justifyContent: 'space-around', marginBottom: '-5px' }}>
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
      </Card>
    </Box>
  );
};

export default Post;
