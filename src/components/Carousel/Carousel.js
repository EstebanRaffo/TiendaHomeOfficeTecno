import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './styles/Carousel.css'

function ControlledCarousel({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="Carousel" activeIndex={index} onSelect={handleSelect} variant='dark'>
        {images && images.map((img, index) => <Carousel.Item key={index}>
                                                <img className="d-block w-100" alt={"title"} src={img} style={{padding: '15%'}}/>
                                              </Carousel.Item>
                            )}
    </Carousel>
  );
}

export default ControlledCarousel