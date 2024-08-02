import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const itemData = [
  {
    img: 'https://i.pinimg.com/236x/9a/4f/1d/9a4f1de49933b83be208e22c4ad61cf2.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://i.pinimg.com/474x/88/81/7d/88817dc28d0bbe36927c12c3ae79f7e2.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.pinimg.com/236x/aa/f9/6c/aaf96cfa51fb7005456bf59efc8e5e40.jpg',
    title: 'Camera',
  },
  {
    img: 'https://i.pinimg.com/236x/ed/d6/2f/edd62f74316a8772d6b2f1060134d617.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.pinimg.com/236x/d5/7e/ac/d57eac8918b4e8deb4799ed668fa0670.jpg',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const StandardImageList = ({ data }) => {
  return (
    <ImageList sx={{ width: 500, height: 450,border:'black' }} cols={3} rowHeight={164}>
      {data.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            loading="lazy"
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default StandardImageList;
