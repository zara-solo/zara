import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
  return (
    <Carousel fade controls={false} indicators={false} interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://promotionaumaroc.com/wp-content/uploads/2022/01/Lc-Waikiki-fevrier-et-mars-2022-collection-Femme-4.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.elora.com/img/cms/Actu-Mode/20210531-ELORA-BLog-mode.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://guidelook.fr/wp-content/uploads/2020/08/style-vestimentaire-femme.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
