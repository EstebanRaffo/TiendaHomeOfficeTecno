import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CardMedia } from '@mui/material';

import './styles/Carousel.css'

function ControlledCarousel({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="Carousel" activeIndex={index} onSelect={handleSelect}>
        {images && images.map((img, index) => <Carousel.Item key={index}>
                                                <CardMedia component="img" height="100" image={img} alt={"title"} />
                                              </Carousel.Item>
                            )}
    </Carousel>
  );
}

export default ControlledCarousel