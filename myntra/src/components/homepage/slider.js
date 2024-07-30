import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import {  useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import './slider.css';

const SimpleSlider = ({ images, postId }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveStep(next),
  };

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      sliderRef.current.slickNext();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1, position: 'relative', paddingBottom: '30px' }}>
      <Link to={`/post/${postId}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} style={{  maxWidth: '100%', height: 'auto',padding:'15px'}}>
              <AspectRatio ratio={1}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' ,marginLeft:'-15px',padding:'5px'}}
                />
              </AspectRatio>
            </div>
          ))}
        </Slider>
      </Link>
      <MobileStepper 
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{
            color:'black' ,
            fontWeight: 'bold', // or a number like 500, 600, etc.
            letterSpacing: '0.5px', // adjust spacing as needed
          }}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{
            color: 'black',
            fontWeight: 'bold', // or a number like 500, 600, etc.
            letterSpacing: '0.5px', // adjust spacing as needed
          }}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
        sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
      />
    </Box>
  );
};

export default SimpleSlider;
