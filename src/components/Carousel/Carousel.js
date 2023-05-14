import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CardMedia } from '@mui/material';


function ControlledCarousel({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((img) => <Carousel.Item>
                                <CardMedia component="img" height="100" image={img} alt={"title"} />

                                {/* <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="First slide"
                                /> */}
                            </Carousel.Item>
                    )}
    </Carousel>
  );
}

export default ControlledCarousel